import { useEffect } from "react";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { EulaPage } from "./pages/EulaPage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage";
import { SecurityDisclosurePage } from "./pages/SecurityDisclosurePage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { RealTimeProtectionPage } from "./pages/RealTimeProtectionPage";
import { ThreatIntelligencePage } from "./pages/ThreatIntelligencePage";  
import { SystemRequirementsPage } from "./pages/SystemRequirementsPage";
import { PricingPage } from "./pages/PricingPage";

interface FooterPagesProps {
  currentPage: string;
  isDarkMode: boolean;
  onBack: () => void;
}

export function FooterPages({ currentPage, isDarkMode, onBack }: FooterPagesProps) {
  // Scroll to top when component mounts or page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      // Legal Pages
      case 'privacy-policy':
        return <PrivacyPolicyPage isDarkMode={isDarkMode} />;
      case 'terms-of-service':
        return <TermsOfServicePage isDarkMode={isDarkMode} />;
      case 'eula':
        return <EulaPage isDarkMode={isDarkMode} />;
      case 'cookie-policy':
        return <CookiePolicyPage isDarkMode={isDarkMode} />;
      case 'security-disclosure':
        return <SecurityDisclosurePage isDarkMode={isDarkMode} />;
      
      // Product Pages
      case 'features':
        return <FeaturesPage isDarkMode={isDarkMode} />;
      case 'real-time-protection':
        return <RealTimeProtectionPage isDarkMode={isDarkMode} />;
      case 'threat-intelligence':
        return <ThreatIntelligencePage isDarkMode={isDarkMode} />;
      case 'system-requirements':
        return <SystemRequirementsPage isDarkMode={isDarkMode} />;
      case 'pricing':
        return <PricingPage isDarkMode={isDarkMode} />;
        
      default:
        return (
          <div className="flex-1 p-8 flex items-center justify-center">
            <div className="text-center">
              <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                Page Not Found
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                The page "{currentPage}" could not be found.
              </p>
            </div>
          </div>
        );
    }
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
          
          <div className="absolute inset-0 opacity-[0.03]">
            <div 
              className="w-full h-full animate-pulse"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
                `
              }}
            />
          </div>
          
          <div className="absolute inset-0 opacity-[0.015]">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />
          </div>
        </>
      )}

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <nav className={`${isDarkMode 
          ? 'bg-slate-900/95 border-slate-700/50' 
          : 'bg-white/95 border-slate-200/60'
        } backdrop-blur-sm border-b sticky top-0 z-50 shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo and Brand */}
              <div className="flex items-center space-x-4">
                <img 
                  src="/assets/verinizer-logo.svg" 
                  alt="Verinizer" 
                  className="w-8 h-8"
                />
                <span className={`text-xl font-bold ${isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent' 
                  : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
                }`}>
                  Verinizer
                </span>
              </div>

              {/* Back Button */}
              <button
                onClick={onBack}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${isDarkMode 
                  ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50' 
                  : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100/50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        {renderPage()}

        {/* Footer */}
        <footer className={`mt-auto ${isDarkMode 
          ? 'bg-slate-900/50 border-slate-700/50' 
          : 'bg-white/50 border-slate-200/60'
        } backdrop-blur-sm border-t`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <img 
                  src="/assets/verinizer-logo.svg" 
                  alt="Verinizer" 
                  className="w-6 h-6"
                />
                <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  © 2025 Verinizer. All rights reserved.
                </span>
              </div>
              
              <div className="flex items-center space-x-6">
                <a 
                  href="https://discord.gg/eDBmRg7Vns" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'} transition-colors`}
                >
                  Discord
                </a>
                <button
                  onClick={onBack}
                  className={`${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'} transition-colors`}
                >
                  Return to Scanner
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}