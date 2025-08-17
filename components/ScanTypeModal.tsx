import { X, Zap, Shield } from "lucide-react";

interface ScanTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScanType: (type: 'quick' | 'full') => void;
  isDarkMode: boolean;
  fileCount: number;
}

export function ScanTypeModal({ isOpen, onClose, onSelectScanType, isDarkMode, fileCount }: ScanTypeModalProps) {
  if (!isOpen) return null;

  const handleQuickScan = () => {
    onSelectScanType('quick');
  };

  const handleFullScan = () => {
    onSelectScanType('full');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur */}
      <div 
        className={`absolute inset-0 ${isDarkMode 
          ? 'bg-black/60' 
          : 'bg-black/40'
        } backdrop-blur-sm`}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative w-full max-w-md mx-4 ${isDarkMode 
        ? 'bg-slate-900/95 border-slate-700/50 text-slate-100' 
        : 'bg-white/95 border-slate-200/50 text-slate-900'
      } rounded-2xl border backdrop-blur-xl shadow-2xl overflow-hidden`}>
        
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-lg transition-all duration-200 hover:scale-110 ${isDarkMode 
            ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50' 
            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/50'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
              Choose Scan Type
            </h2>
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Select how you want to scan {fileCount} {fileCount === 1 ? 'file' : 'files'}
            </p>
          </div>

          {/* Scan Type Buttons */}
          <div className="space-y-4 mb-6">
            {/* Quick Scan Button */}
            <button
              onClick={handleQuickScan}
              className={`w-full p-4 rounded-xl transition-all duration-300 group hover:scale-[1.02] ${isDarkMode 
                ? 'bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 border-cyan-500/30 hover:border-cyan-400/50 hover:from-cyan-500/20 hover:to-cyan-600/20' 
                : 'bg-gradient-to-r from-cyan-500/5 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-400/40 hover:from-cyan-500/10 hover:to-cyan-600/10'
              } border backdrop-blur-sm`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${isDarkMode 
                  ? 'bg-cyan-500/20 text-cyan-400' 
                  : 'bg-cyan-500/10 text-cyan-600'
                }`}>
                  <Zap className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className={`font-semibold mb-1 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Quick Scan
                  </h3>
                  <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Fast scanning for common threats (2-3 minutes)
                  </p>
                </div>
                <div className={`w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150 ${isDarkMode 
                  ? 'bg-cyan-400' 
                  : 'bg-cyan-500'
                }`} />
              </div>
            </button>

            {/* Full Scan Button */}
            <button
              onClick={handleFullScan}
              className={`w-full p-4 rounded-xl transition-all duration-300 group hover:scale-[1.02] ${isDarkMode 
                ? 'bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/30 hover:border-green-400/50 hover:from-green-500/20 hover:to-green-600/20' 
                : 'bg-gradient-to-r from-green-500/5 to-green-600/5 border-green-500/20 hover:border-green-400/40 hover:from-green-500/10 hover:to-green-600/10'
              } border backdrop-blur-sm`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${isDarkMode 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-green-500/10 text-green-600'
                }`}>
                  <Shield className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className={`font-semibold mb-1 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Full Scan
                  </h3>
                  <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Comprehensive deep scan (8-12 minutes)
                  </p>
                </div>
                <div className={`w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150 ${isDarkMode 
                  ? 'bg-green-400' 
                  : 'bg-green-500'
                }`} />
              </div>
            </button>
          </div>

          {/* Cancel Button */}
          <button
            onClick={onClose}
            className={`w-full py-3 px-4 rounded-xl transition-all duration-200 hover:scale-[1.02] ${isDarkMode 
              ? 'bg-slate-800/50 border-slate-600/30 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500/50' 
              : 'bg-slate-100/50 border-slate-300/30 text-slate-600 hover:bg-slate-200/50 hover:border-slate-400/50'
            } border backdrop-blur-sm`}
          >
            Cancel
          </button>
        </div>

        {/* Animated border effect */}
        <div className={`absolute inset-0 rounded-2xl ${isDarkMode 
          ? 'bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-green-500/20' 
          : 'bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-green-500/10'
        } opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
      </div>
    </div>
  );
}