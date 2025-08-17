interface SystemRequirementsPageProps {
  isDarkMode: boolean;
}

export function SystemRequirementsPage({ isDarkMode }: SystemRequirementsPageProps) {
  const browsers = [
    { name: "Chrome", version: "90+", supported: true },
    { name: "Firefox", version: "88+", supported: true },
    { name: "Edge", version: "90+", supported: true },
    { name: "Safari", version: "14+", supported: true },
    { name: "Opera", version: "76+", supported: true },
    { name: "IE", version: "Any", supported: false }
  ];

  const platforms = [
    {
      name: "Windows",
      icon: "🪟",
      min: { os: "Windows 10", ram: "4 GB", storage: "100 MB", network: "Required" },
      rec: { os: "Windows 11", ram: "8 GB", storage: "500 MB", network: "High-speed" }
    },
    {
      name: "macOS",
      icon: "🍎",
      min: { os: "macOS 10.15", ram: "4 GB", storage: "100 MB", network: "Required" },
      rec: { os: "macOS 12+", ram: "8 GB", storage: "500 MB", network: "High-speed" }
    },
    {
      name: "Linux",
      icon: "🐧",
      min: { os: "Ubuntu 18.04", ram: "4 GB", storage: "100 MB", network: "Required" },
      rec: { os: "Ubuntu 20.04+", ram: "8 GB", storage: "500 MB", network: "High-speed" }
    }
  ];

  return (
    <div className="flex-1 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${isDarkMode 
            ? 'bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30' 
            : 'bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/30'
          }`}>
            <svg className={`w-10 h-10 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode 
            ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
          }`}>
            System Requirements
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Verinizer is designed to work seamlessly across all modern browsers and operating systems with minimal system requirements.
          </p>
        </div>

        {/* Browser Compatibility */}
        <div className={`p-8 rounded-2xl border mb-16 ${isDarkMode 
          ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
          : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
        } backdrop-blur-sm`}>
          <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
            Browser Compatibility
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {browsers.map((browser, index) => (
              <div key={index} className={`p-6 rounded-xl border ${
                browser.supported
                  ? isDarkMode ? 'bg-green-500/10 border-green-500/30' : 'bg-green-500/5 border-green-500/30'
                  : isDarkMode ? 'bg-red-500/10 border-red-500/30' : 'bg-red-500/5 border-red-500/30'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {browser.name}
                  </h3>
                  <span className={`text-2xl ${
                    browser.supported ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {browser.supported ? '✅' : '❌'}
                  </span>
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {browser.supported ? `Version ${browser.version}` : 'Not supported'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Requirements */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <div key={index} className={`p-8 rounded-2xl border ${isDarkMode 
              ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
              : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
            } backdrop-blur-sm`}>
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  {platform.name}
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className={`font-medium mb-3 text-green-500`}>Minimum Requirements</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>OS:</span>
                      <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{platform.min.os}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>RAM:</span>
                      <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{platform.min.ram}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Storage:</span>
                      <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{platform.min.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Network:</span>
                      <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{platform.min.network}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className={`font-medium mb-3 text-cyan-500`}>Recommended</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>OS:</span>
                      <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{platform.rec.os}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>RAM:</span>
                      <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{platform.rec.ram}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Storage:</span>
                      <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{platform.rec.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Network:</span>
                      <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{platform.rec.network}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Notes */}
        <div className={`p-8 rounded-2xl border ${isDarkMode 
          ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
          : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
        } backdrop-blur-sm`}>
          <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
            Important Notes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Network Requirements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Internet connection required for VirusTotal API access
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Bandwidth usage: ~10KB per file scan, ~2KB per URL scan
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Performance
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    No server-side processing - all scanning is client-side
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Files never leave your device - complete privacy protection
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}