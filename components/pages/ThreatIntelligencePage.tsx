interface ThreatIntelligencePageProps {
  isDarkMode: boolean;
}

export function ThreatIntelligencePage({ isDarkMode }: ThreatIntelligencePageProps) {
  const intelligenceFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      title: "Global Threat Network",
      description: "Access to worldwide threat intelligence networks providing real-time data on emerging malware, attack patterns, and security vulnerabilities from multiple sources.",
      coverage: ["150+ Countries", "Real-time Updates", "24/7 Monitoring"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Multi-Engine Analysis",
      description: "Comprehensive threat analysis using 20+ leading antivirus engines, providing diverse perspectives and reducing false positives through consensus-based detection.",
      coverage: ["20+ AV Engines", "Consensus Analysis", "Low False Positives"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      title: "Behavioral Analytics",
      description: "Advanced behavioral analysis and pattern recognition to identify suspicious activities and potential zero-day threats that traditional signatures might miss.",
      coverage: ["Pattern Recognition", "Zero-day Detection", "Behavioral Analysis"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Threat Classification",
      description: "Intelligent threat categorization system that classifies malware types, risk levels, and provides detailed information about each detected threat.",
      coverage: ["Risk Assessment", "Malware Types", "Detailed Reports"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Trend Analysis",
      description: "Comprehensive trend analysis and threat landscape monitoring to identify emerging attack vectors and provide proactive security intelligence.",
      coverage: ["Threat Trends", "Attack Vectors", "Proactive Intelligence"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "IOC Database",
      description: "Extensive Indicators of Compromise (IOC) database containing file hashes, URLs, IP addresses, and domains associated with known threats.",
      coverage: ["File Hashes", "Malicious URLs", "IP Addresses"]
    }
  ];

  const threatTypes = [
    { name: "Trojans", percentage: 35, color: "from-red-500 to-red-600" },
    { name: "Adware/PUP", percentage: 25, color: "from-yellow-500 to-yellow-600" },
    { name: "Worms", percentage: 15, color: "from-orange-500 to-orange-600" },
    { name: "Ransomware", percentage: 12, color: "from-purple-500 to-purple-600" },
    { name: "Rootkits", percentage: 8, color: "from-blue-500 to-blue-600" },
    { name: "Others", percentage: 5, color: "from-gray-500 to-gray-600" }
  ];

  const engines = [
    "Microsoft Defender", "Kaspersky", "Bitdefender", "Norton", "Avast", "AVG",
    "Trend Micro", "F-Secure", "ESET", "McAfee", "Sophos", "ClamAV",
    "Malwarebytes", "Panda", "Quick Heal", "K7 AntiVirus", "Avira", "DrWeb",
    "Jiangmin", "Antiy-AVL"
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
            Threat Intelligence
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Advanced threat intelligence aggregation from multiple sources providing comprehensive security analysis and real-time protection against emerging cyber threats.
          </p>
        </div>

        {/* Intelligence Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {intelligenceFeatures.map((feature, index) => (
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
                {feature.coverage.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${isDarkMode 
                      ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                      : 'bg-gradient-to-r from-cyan-600 to-green-600'
                    }`}></div>
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Threat Landscape */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Threat Distribution */}
          <div className={`p-8 rounded-2xl border ${isDarkMode 
            ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
            : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
          } backdrop-blur-sm`}>
            <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              Global Threat Distribution
            </h2>
            <div className="space-y-6">
              {threatTypes.map((threat, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {threat.name}
                    </span>
                    <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {threat.percentage}%
                    </span>
                  </div>
                  <div className={`w-full h-3 rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${threat.color}`}
                      style={{ width: `${threat.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Antivirus Engines */}
          <div className={`p-8 rounded-2xl border ${isDarkMode 
            ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
            : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
          } backdrop-blur-sm`}>
            <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              Integrated Antivirus Engines
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {engines.map((engine, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg text-sm font-medium text-center transition-all duration-200 hover:scale-105 ${isDarkMode 
                    ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/70 border border-slate-600/30' 
                    : 'bg-slate-50/80 text-slate-700 hover:bg-white/80 border border-slate-200/40'
                  }`}
                >
                  {engine}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Intelligence Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className={`p-8 text-center rounded-2xl border ${isDarkMode 
            ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
            : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
          } backdrop-blur-sm`}>
            <div className={`text-4xl font-bold mb-2 ${isDarkMode 
              ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
            }`}>
              1B+
            </div>
            <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              File Hashes
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Known malware signatures
            </p>
          </div>
          <div className={`p-8 text-center rounded-2xl border ${isDarkMode 
            ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
            : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
          } backdrop-blur-sm`}>
            <div className={`text-4xl font-bold mb-2 ${isDarkMode 
              ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
            }`}>
              50K+
            </div>
            <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              Daily Updates
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              New threat indicators
            </p>
          </div>
          <div className={`p-8 text-center rounded-2xl border ${isDarkMode 
            ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
            : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
          } backdrop-blur-sm`}>
            <div className={`text-4xl font-bold mb-2 ${isDarkMode 
              ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
            }`}>
              20+
            </div>
            <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              AV Engines
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Integrated security vendors
            </p>
          </div>
          <div className={`p-8 text-center rounded-2xl border ${isDarkMode 
            ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
            : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
          } backdrop-blur-sm`}>
            <div className={`text-4xl font-bold mb-2 ${isDarkMode 
              ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
            }`}>
              99.2%
            </div>
            <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              Accuracy
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Detection accuracy rate
            </p>
          </div>
        </div>

        {/* Intelligence Sources */}
        <div className={`p-8 rounded-2xl border ${isDarkMode 
          ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
          : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
        } backdrop-blur-sm`}>
          <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
            Intelligence Sources & Integration
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Commercial Sources
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Leading antivirus vendors and security companies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Threat intelligence platforms and feeds
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Government and law enforcement databases
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Community Sources
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Security research communities and honeypots
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Open source intelligence (OSINT) feeds
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Collaborative threat sharing platforms
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Real-time Feeds
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Live malware analysis and sandboxing results
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Dynamic analysis and behavioral detection
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Machine learning and AI-powered threat detection
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