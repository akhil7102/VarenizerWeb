import { useState, useRef } from "react";
import { VerinizerLogo } from "./VerinizerLogo";

interface TopNavigationProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
  onFileUpload: (files: File[]) => void;
  isAuthenticated: boolean;
  onShowSignIn: () => void;
  onShowSignUp: () => void;
  onSignOut: () => void;
  onShowHelp: () => void;
  userEmail: string;
  userName: string;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function TopNavigation({
  isDarkMode,
  onThemeToggle,
  onFileUpload,
  isAuthenticated,
  onShowSignIn,
  onShowSignUp,
  onSignOut,
  onShowHelp,
  userEmail,
  userName,
  currentPage,
  onNavigate
}: TopNavigationProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 0) {
      onFileUpload(files);
    }
    // Reset the input so the same file can be selected again
    event.target.value = '';
  };

  return (
    <nav className={`${isDarkMode 
      ? 'bg-slate-900/95 border-slate-700/50' 
      : 'bg-white/95 border-slate-200/60'
    } backdrop-blur-sm border-b sticky top-0 z-50 shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <VerinizerLogo size={32} />
            <span className={`text-xl font-bold ${isDarkMode 
              ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
            }`}>
              Verinizer
            </span>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* File Upload Button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${isDarkMode 
                ? 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50' 
                : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-100/50'
              }`}
              title="Upload Files"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${isDarkMode 
                ? 'text-slate-400 hover:text-yellow-400 hover:bg-slate-800/50' 
                : 'text-slate-600 hover:text-orange-600 hover:bg-slate-100/50'
              }`}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Help Button */}
            <button
              onClick={onShowHelp}
              className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${isDarkMode 
                ? 'text-slate-400 hover:text-green-400 hover:bg-slate-800/50' 
                : 'text-slate-600 hover:text-green-600 hover:bg-slate-100/50'
              }`}
              title="Help & Support"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            {/* Authentication */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${isDarkMode 
                    ? 'text-slate-200 hover:bg-slate-800/50 border border-slate-700/50' 
                    : 'text-slate-700 hover:bg-slate-100/50 border border-slate-200/60'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center">
                    <span className="text-white text-xs font-medium">
                      {userName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-medium hidden sm:inline">{userName}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showUserMenu && (
                  <div className={`absolute right-0 mt-2 w-56 ${isDarkMode 
                    ? 'bg-slate-800/95 border-slate-700/50' 
                    : 'bg-white/95 border-slate-200/60'
                  } backdrop-blur-sm border rounded-xl shadow-xl z-50`}>
                    <div className="p-3 border-b border-slate-700/50">
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                        {userName}
                      </p>
                      <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {userEmail}
                      </p>
                    </div>
                    <div className="p-2">
                      <button
                        onClick={() => {
                          onSignOut();
                          setShowUserMenu(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${isDarkMode 
                          ? 'text-slate-400 hover:text-red-400 hover:bg-red-500/10' 
                          : 'text-slate-600 hover:text-red-600 hover:bg-red-500/10'
                        }`}
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={onShowSignIn}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${isDarkMode 
                    ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50' 
                    : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100/50'
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={onShowSignUp}
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg hover:from-cyan-600 hover:to-green-600 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileInputChange}
        className="hidden"
        accept="*/*"
      />

      {/* Click outside to close user menu */}
      {showUserMenu && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </nav>
  );
}