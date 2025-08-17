interface FeaturesPageProps {
  isDarkMode: boolean;
}

export function FeaturesPage({ isDarkMode }: FeaturesPageProps) {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Multi-Engine Detection",
      description: "Leverages 20+ leading antivirus engines including Microsoft Defender, Kaspersky, Bitdefender, Norton, and more for comprehensive threat detection.",
      highlights: ["20+ Antivirus Engines", "Real-time Results", "Cross-Platform Coverage"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: "File & URL Scanning",
      description: "Comprehensive scanning for both files and URLs with support for all file types and web addresses, providing detailed threat analysis.",
      highlights: ["Drag & Drop Upload", "Batch File Processing", "URL Analysis"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast Scans",
      description: "Quick scan mode for rapid results in under 3 minutes, or comprehensive full scans for thorough analysis with detailed reporting.",
      highlights: ["Quick Scan (< 3 min)", "Full Scan Mode", "Instant Results"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Hash Lookup & Analysis",
      description: "Advanced hash-based detection using SHA-256 fingerprinting to identify known threats and maintain comprehensive malware databases.",
      highlights: ["SHA-256 Hashing", "Database Matching", "Threat Intelligence"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Detailed Reporting",
      description: "Comprehensive scan reports with detection ratios, threat classifications, and per-engine results for complete visibility.",
      highlights: ["Detection Ratios", "Threat Classification", "Engine-by-Engine Results"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Scan History & Tracking",
      description: "Automatic history tracking of all scans with the ability to rescan files and URLs, maintaining a complete audit trail.",
      highlights: ["Automatic History", "Rescan Capability", "Audit Trail"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      title: "Browser-Based Security",
      description: "Fully client-side application with no data leaving your device, ensuring complete privacy while providing enterprise-grade security.",
      highlights: ["Client-Side Processing", "Privacy Protected", "No Data Upload"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      title: "Dark & Light Themes",
      description: "Beautiful, professional interface with full dark and light theme support, customizable to your preference for optimal usability.",
      highlights: ["Dark Mode", "Light Mode", "Professional UI"]
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode 
            ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
          }`}>
            Verinizer Features
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Comprehensive malware detection and security analysis powered by industry-leading antivirus engines and advanced threat intelligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 group ${isDarkMode 
                ? 'bg-slate-900/70 border-slate-700/50 hover:border-cyan-500/50 shadow-2xl' 
                : 'bg-white/90 border-slate-200/60 hover:border-cyan-500/50 shadow-xl shadow-slate-200/50'
              } backdrop-blur-sm`}
            >
              <div className={`mb-6 transition-colors duration-300 ${isDarkMode 
                ? 'text-cyan-400 group-hover:text-green-400' 
                : 'text-cyan-600 group-hover:text-green-600'
              }`}>
                {feature.icon}
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                {feature.title}
              </h3>
              <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {feature.description}
              </p>
              <div className="space-y-2">
                {feature.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${isDarkMode 
                      ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                      : 'bg-gradient-to-r from-cyan-600 to-green-600'
                    }`}></div>
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className={`p-8 rounded-2xl border ${isDarkMode 
          ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
          : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
        } backdrop-blur-sm`}>
          <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${isDarkMode 
                ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
              }`}>
                20+
              </div>
              <p className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Antivirus Engines
              </p>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${isDarkMode 
                ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
              }`}>
                &lt;3min
              </div>
              <p className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Quick Scan Time
              </p>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${isDarkMode 
                ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
              }`}>
                100%
              </div>
              <p className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Client-Side Security
              </p>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold mb-2 ${isDarkMode 
                ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
              }`}>
                ∞
              </div>
              <p className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                File Type Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}