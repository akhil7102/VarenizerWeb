import { useState, useEffect } from "react";
import { TopNavigation } from "./components/TopNavigation";
import { ScanProgress } from "./components/ScanProgress";
import { ScanButtons } from "./components/ScanButtons";
import { StatusBar } from "./components/StatusBar";
import { DragDropArea } from "./components/DragDropArea";
import { ScanResults } from "./components/ScanResults";
import { SignInModal } from "./components/SignInModal";
import { SignUpModal } from "./components/SignUpModal";
import { HelpModal } from "./components/HelpModal";
import { ScanTypeModal } from "./components/ScanTypeModal";
import { UpgradeModal } from "./components/UpgradeModal";
import { UsageIndicator } from "./components/UsageIndicator";
import { Footer } from "./components/Footer";
import { FooterPages } from "./components/FooterPages";
import { UrlScanner } from "./components/UrlScanner";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useUsageLimits } from "./hooks/useUsageLimits";
import { generateScanResults, scanUrlWithVirusTotal, extractUsername, showScanCompletionNotification } from "./utils/scanUtils";
import { SCAN_CONFIG } from "./utils/constants";

interface ScanResult {
  totalFiles: number;
  cleanFiles: number;
  threatsFound: number;
  suspiciousFiles: number;
  scanDuration: string;
  scanType: string;
  files: Array<{
    name: string;
    size: number;
    status: 'clean' | 'threat' | 'suspicious';
    threats: string[];
    hash: string;
    antivirusResults: Array<{
      engine: string;
      detected: boolean;
      result: string;
    }>;
    detectionRatio: string;
  }>;
}

interface HistoryItem {
  id: string;
  timestamp: string;
  type: 'file' | 'url';
  files?: string[];
  url?: string;
  results: ScanResult;
}

export default function App() {
  // Page and UI state
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentFooterPage, setCurrentFooterPage] = useState<string | null>(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showScanTypeModal, setShowScanTypeModal] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Scanning state
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanType, setScanType] = useState<'quick' | 'full' | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);
  const [scanResults, setScanResults] = useState<ScanResult | null>(null);

  // URL scanning state
  const [isUrlScanning, setIsUrlScanning] = useState(false);
  const [urlScanResults, setUrlScanResults] = useState<ScanResult | null>(null);

  // System state
  const [virusTotalConnected] = useState(true);
  const [lastUpdate] = useState("2024-01-15 14:30");

  // Local storage hook
  const {
    isDarkMode,
    isAuthenticated,
    userEmail,
    userName,
    scanHistory,
    setScanHistory,
    handleSignIn: signIn,
    handleSignUp: signUp,
    handleSignOut
  } = useLocalStorage();

  // Usage limits hook
  const {
    usageData,
    limits,
    incrementFileScans,
    incrementUrlScans,
    getDaysUntilReset,
    showUpgradeModal,
    limitType,
    closeUpgradeModal,
  } = useUsageLimits();

  // Scan progress simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isScanning && scanProgress < 100) {
      interval = setInterval(() => {
        setScanProgress((prev) => {
          const increment = scanType === 'quick' ? SCAN_CONFIG.QUICK_SCAN_INCREMENT : SCAN_CONFIG.FULL_SCAN_INCREMENT;
          return Math.min(prev + increment, 100);
        });
      }, SCAN_CONFIG.PROGRESS_INTERVAL);
    } else if (scanProgress >= 100 && isScanning) {
      setTimeout(async () => {
        setIsScanning(false);
        setScanProgress(0);
        
        const results = await generateScanResults(uploadedFiles, scanType);
        setScanResults(results);
        setShowResults(true);
        setScanType(null);

        // Add to scan history
        const historyItem = {
          id: Date.now().toString(),
          timestamp: new Date().toISOString(),
          type: 'file',
          files: uploadedFiles.map(f => f.name),
          results: results
        };
        setScanHistory((prev: HistoryItem[]) => [historyItem, ...prev.slice(0, SCAN_CONFIG.HISTORY_LIMIT - 1)]);

        showScanCompletionNotification(results);
      }, SCAN_CONFIG.COMPLETION_DELAY);
    }
    
    return () => clearInterval(interval);
  }, [isScanning, scanProgress, scanType, uploadedFiles, setScanHistory]);

  // Scroll to top when scan results are shown
  useEffect(() => {
    if (showResults && (scanResults || urlScanResults)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showResults, scanResults, urlScanResults]);

  // Event handlers
  const handleStartScan = (type: 'quick' | 'full') => {
    setIsScanning(true);
    setScanProgress(0);
    setScanType(type);
    setShowResults(false);
  };

  const handleStopScan = () => {
    setIsScanning(false);
    setScanProgress(0);
    setScanType(null);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleFileUpload = (files: File[]) => {
    if (files.length > 0) {
      setPendingFiles(files);
      setShowScanTypeModal(true);
    }
    setShowResults(false);
  };

  const handleFileDrop = (files: File[]) => {
    setPendingFiles(files);
    setShowScanTypeModal(true);
    setShowResults(false);
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    setShowResults(false);
  };

  const handleSignInWrapper = (email: string, password: string) => {
    signIn(email, password, extractUsername);
    setShowSignIn(false);
  };

  const handleSignUpWrapper = (email: string, password: string, name: string) => {
    signUp(email, password, name, extractUsername);
    setShowSignUp(false);
  };

  const handleNewScan = () => {
    setUploadedFiles([]);
    setScanResults(null);
    setShowResults(false);
    setUrlScanResults(null);
  };

  const handleBackToHome = () => {
    setShowResults(false);
    setScanResults(null);
    setUploadedFiles([]);
    setScanProgress(0);
    setScanType(null);
    setIsScanning(false);
    setCurrentPage('home');
  };

  const handleScanTypeSelect = (type: 'quick' | 'full') => {
    // Check usage limits before starting scan
    const canScan = incrementFileScans(pendingFiles.length);
    if (!canScan) {
      setPendingFiles([]);
      setShowScanTypeModal(false);
      return; // Scan blocked due to limits
    }
    
    setUploadedFiles(pendingFiles);
    setPendingFiles([]);
    setShowScanTypeModal(false);
    handleStartScan(type);
  };

  const handleScanTypeCancel = () => {
    setPendingFiles([]);
    setShowScanTypeModal(false);
  };

  const handleNavigation = (page: string) => {
    // Only handle scanner page navigation
    if (page === 'home' || page === 'url-scanner') {
      setCurrentPage(page);
      setShowResults(false);
      setScanResults(null);
      setUrlScanResults(null);
    }
  };

  const handleUrlScan = async (url: string) => {
    // Check usage limits before starting URL scan
    const canScan = incrementUrlScans(1);
    if (!canScan) {
      return; // Scan blocked due to limits
    }
    
    setIsUrlScanning(true);
    try {
      const results = await scanUrlWithVirusTotal(url);
      setUrlScanResults(results);
      
      const historyItem = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        type: 'url',
        url: url,
        results: results
      };
      setScanHistory(prev => [historyItem, ...prev.slice(0, SCAN_CONFIG.HISTORY_LIMIT - 1)]);
      
      // Scroll to top when URL scan results are ready
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('URL scan failed:', error);
    } finally {
      setIsUrlScanning(false);
    }
  };

  const handleRescan = (historyItem: HistoryItem) => {
    if (historyItem.type === 'url') {
      handleUrlScan(historyItem.url!);
    }
  };

  const handleFooterNavigation = (pageId: string) => {
    console.log('Footer navigation called with:', pageId); // Debug log
    
    // Define all valid footer pages (both legal and product pages)
    const legalPages = ['privacy-policy', 'terms-of-service', 'eula', 'cookie-policy', 'security-disclosure'];
    const productPages = ['features', 'real-time-protection', 'threat-intelligence', 'system-requirements', 'pricing'];
    const validPages = [...legalPages, ...productPages];
    
    if (validPages.includes(pageId)) {
      setCurrentFooterPage(pageId);
    } else {
      console.log('Unknown page requested:', pageId);
    }
  };

  // Show footer page if one is selected
  if (currentFooterPage) {
    return (
      <FooterPages 
        currentPage={currentFooterPage}
        isDarkMode={isDarkMode}
        onBack={() => setCurrentFooterPage(null)}
      />
    );
  }

  // Main scanner page
  const renderHomePage = () => {
    if (showResults && (scanResults || urlScanResults)) {
      return (
        <ScanResults 
          results={scanResults || urlScanResults}
          isDarkMode={isDarkMode}
          onNewScan={handleNewScan}
          onBackToHome={handleBackToHome}
          scanHistory={scanHistory}
          onRescan={handleRescan}
        />
      );
    }

    return (
      <div className="flex-1 p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl">
          {/* App Title */}
          <div className="text-center mb-12">
            <div className="flex flex-col items-center">
              <h1 className={`text-6xl font-bold mb-4 ${isDarkMode 
                ? 'bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-cyan-600 via-purple-600 to-green-600 bg-clip-text text-transparent'
              }`}>
                Verinizer
              </h1>
              <p className={`text-xl mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Advanced File & URL Security Scanner
              </p>
            </div>
          </div>

          {/* Scan Options Tabs */}
          <div className="flex justify-center mb-8">
            <div className={`flex ${isDarkMode 
              ? 'bg-slate-900/70 border-slate-700/50' 
              : 'bg-white/90 border-slate-200/60'
            } rounded-2xl p-2 border backdrop-blur-sm`}>
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  currentPage === 'home'
                    ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-lg'
                    : isDarkMode
                      ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100/50'
                }`}
              >
                File Scanner
              </button>
              <button
                onClick={() => setCurrentPage('url-scanner')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ml-2 ${
                  currentPage === 'url-scanner'
                    ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white shadow-lg'
                    : isDarkMode
                      ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100/50'
                }`}
              >
                URL Scanner
              </button>
            </div>
          </div>

          {/* Scanner Content */}
          {currentPage === 'url-scanner' ? (
            <UrlScanner
              isDarkMode={isDarkMode}
              onUrlScan={handleUrlScan}
              isScanning={isUrlScanning}
              results={urlScanResults}
              scanHistory={scanHistory.filter(item => item.type === 'url')}
              onRescan={handleRescan}
            />
          ) : (
            <>
              {/* File Scanner */}
              {!isScanning && uploadedFiles.length === 0 ? (
                <div className="flex justify-center mb-12">
                  <DragDropArea 
                    onFileDrop={handleFileDrop}
                    isDarkMode={isDarkMode}
                  />
                </div>
              ) : (
                <div className="flex justify-center mb-12">
                  <ScanProgress 
                    progress={scanProgress}
                    isScanning={isScanning}
                    scanType={scanType}
                    isDarkMode={isDarkMode}
                    uploadedFiles={uploadedFiles}
                  />
                </div>
              )}

              {/* Uploaded Files Display */}
              {uploadedFiles.length > 0 && !isScanning && (
                <div className={`mb-8 p-6 ${isDarkMode 
                  ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
                  : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
                } rounded-2xl border backdrop-blur-sm`}>
                  <h3 className={`font-medium mb-4 text-lg ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
                  }`}>
                    Files Ready for Scanning ({uploadedFiles.length})
                  </h3>
                  <div className="space-y-3">
                    {uploadedFiles.slice(0, 5).map((file, index) => (
                      <div key={index} className={`flex items-center justify-between p-4 ${isDarkMode 
                        ? 'bg-slate-800/60 border-slate-600/30 hover:bg-slate-700/60 hover:border-cyan-500/50' 
                        : 'bg-slate-50/80 border-slate-200/40 hover:bg-white/80 hover:border-cyan-500/40 hover:shadow-lg'
                      } rounded-xl group transition-all duration-300 border`}>
                        <div className="flex-1 min-w-0">
                          <div className={`text-sm truncate font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                            {file.name}
                          </div>
                          <div className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveFile(index)}
                          aria-label={`Remove ${file.name} from scan queue`}
                          className={`ml-4 p-2 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 ${isDarkMode 
                            ? 'text-slate-400 hover:text-red-400 hover:bg-red-500/10 border-transparent hover:border-red-500/30' 
                            : 'text-slate-400 hover:text-red-500 hover:bg-red-500/10 border-transparent hover:border-red-500/30'
                          } border`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                    {uploadedFiles.length > 5 && (
                      <div className={`text-sm text-center py-3 ${isDarkMode 
                        ? 'bg-slate-800/30 border-slate-600/20 text-slate-400' 
                        : 'bg-slate-100/60 border-slate-200/30 text-slate-500'
                      } rounded-xl border`}>
                        +{uploadedFiles.length - 5} more files
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Scan Buttons */}
              {uploadedFiles.length > 0 && !isScanning && (
                <ScanButtons 
                  onStartScan={handleStartScan}
                  onStopScan={handleStopScan}
                  isScanning={isScanning}
                  scanType={scanType}
                  isDarkMode={isDarkMode}
                  hasFiles={uploadedFiles.length > 0}
                />
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${isDarkMode 
      ? 'bg-slate-950 text-slate-100' 
      : 'bg-gradient-to-br from-white via-slate-50/50 to-cyan-50/40 text-slate-900'
    } relative overflow-hidden`}>

      {/* Background Effects */}
      {!isDarkMode && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 via-blue-500/8 to-purple-500/6 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-500/10 via-emerald-500/8 to-cyan-500/6 rounded-full blur-3xl transform -translate-x-48 translate-y-48"></div>
        </>
      )}

      <div className="relative z-10 min-h-screen flex flex-col">
        <TopNavigation 
          isDarkMode={isDarkMode}
          onFileUpload={handleFileUpload}
          isAuthenticated={isAuthenticated}
          onShowSignIn={() => setShowSignIn(true)}
          onShowSignUp={() => setShowSignUp(true)}
          onSignOut={handleSignOut}
          onShowHelp={() => setShowHelp(true)}
          userEmail={userEmail}
          userName={userName}
          currentPage={currentPage}
          onNavigate={handleNavigation}
        />

        {renderHomePage()}

        <StatusBar 
          virusTotalConnected={virusTotalConnected}
          lastUpdate={lastUpdate}
          isDarkMode={isDarkMode}
        />
        
        <Footer isDarkMode={isDarkMode} onNavigate={handleFooterNavigation} />
      </div>

      {/* Usage Indicator - Fixed Position */}
      <div className="fixed bottom-4 right-4 z-40 w-80 max-w-[calc(100vw-2rem)]">
        <UsageIndicator
          isDarkMode={isDarkMode}
          usageData={usageData}
          limits={limits}
          daysUntilReset={getDaysUntilReset()}
        />
      </div>

      {/* Modals */}
      <ScanTypeModal 
        isOpen={showScanTypeModal}
        onClose={handleScanTypeCancel}
        onSelectScanType={handleScanTypeSelect}
        isDarkMode={isDarkMode}
        fileCount={pendingFiles.length}
      />

      <UpgradeModal 
        isOpen={showUpgradeModal}
        onClose={closeUpgradeModal}
        isDarkMode={isDarkMode}
        limitType={limitType}
        currentUsage={limitType === 'file' ? usageData.fileScans : usageData.urlScans}
        limit={limitType === 'file' ? limits.fileScans : limits.urlScans}
      />

      <SignInModal 
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        onSignIn={handleSignInWrapper}
        onSwitchToSignUp={() => { setShowSignIn(false); setShowSignUp(true); }}
        isDarkMode={isDarkMode}
      />
      
      <SignUpModal 
        isOpen={showSignUp}
        onClose={() => setShowSignUp(false)}
        onSignUp={handleSignUpWrapper}
        onSwitchToSignIn={() => { setShowSignUp(false); setShowSignIn(true); }}
        isDarkMode={isDarkMode}
      />
      
      <HelpModal 
        isOpen={showHelp}
        onClose={() => setShowHelp(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}