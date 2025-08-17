interface RealTimeProtectionPageProps {
  isDarkMode: boolean;
}

export function RealTimeProtectionPage({ isDarkMode }: RealTimeProtectionPageProps) {
  const protectionFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Instant Threat Detection",
      description: "Real-time analysis of files and URLs as they are uploaded or accessed, providing immediate feedback on potential security threats.",
      benefits: ["Immediate Results", "Zero Delay Processing", "Live Threat Updates"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Continuous Monitoring",
      description: "Always-on protection that continuously monitors your scanning activities and maintains up-to-date threat intelligence databases.",
      benefits: ["24/7 Monitoring", "Auto-Updates", "Background Protection"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM5 12V7a5 5 0 1110 0v5l-5 5-5-5z" />
        </svg>
      ),
      title: "Smart Notifications",
      description: "Intelligent notification system that alerts you immediately when threats are detected, with customizable alert preferences.",
      benefits: ["Desktop Notifications", "Threat Alerts", "Custom Preferences"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      title: "Threat Intelligence Hub",
      description: "Access to global threat intelligence networks providing real-time updates on emerging threats and attack patterns.",
      benefits: ["Global Intelligence", "Emerging Threats", "Pattern Recognition"]
    }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "File Upload or URL Entry",
      description: "User uploads files or enters URLs for scanning"
    },
    {
      step: "2",
      title: "Immediate Processing",
      description: "Verinizer instantly begins analysis using multiple engines"
    },
    {
      step: "3",
      title: "Real-time Analysis",
      description: "Simultaneous scanning across 20+ antivirus engines"
    },
    {
      step: "4",
      title: "Instant Results",
      description: "Immediate threat detection results with detailed reporting"
    },
    {
      step: "5",
      title: "Continuous Protection",
      description: "Ongoing monitoring and threat intelligence updates"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode 
            ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
          }`}>
            Real-time Protection
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Instant malware detection and continuous security monitoring that provides immediate protection against emerging threats and malicious content.
          </p>
        </div>

        {/* Protection Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {protectionFeatures.map((feature, index) => (
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
              <div className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${isDarkMode 
                      ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                      : 'bg-gradient-to-r from-cyan-600 to-green-600'
                    }`}></div>
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Real-time Workflow */}
        <div className={`p-8 rounded-2xl border mb-16 ${isDarkMode 
          ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
          : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
        } backdrop-blur-sm`}>
          <h2 className={`text-2xl font-bold mb-8 text-center ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
            Real-time Protection Workflow
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 font-bold text-white bg-gradient-to-r from-cyan-500 to-green-500`}>
                  {step.step}
                </div>
                <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  {step.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {step.description}
                </p>
                {index < workflowSteps.length - 1 && (
                  <div className={`hidden md:block absolute top-6 left-full w-full h-0.5 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-500/50 to-green-500/50' 
                    : 'bg-gradient-to-r from-cyan-500/30 to-green-500/30'
                  } transform -translate-y-6`} style={{ left: 'calc(100% + 0.75rem)', width: 'calc(100% - 1.5rem)' }}>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className={`p-8 text-center rounded-2xl border ${isDarkMode 
            ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
            : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
          } backdrop-blur-sm`}>
            <div className={`text-4xl font-bold mb-2 ${isDarkMode 
              ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
            }`}>
              &lt;1s
            </div>
            <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              Detection Speed
            </h3>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Average time to detect threats in real-time scanning
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
              99.9%
            </div>
            <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              Uptime
            </h3>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Continuous protection availability
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
              24/7
            </div>
            <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              Monitoring
            </h3>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Continuous threat intelligence updates
            </p>
          </div>
        </div>

        {/* Integration Information */}
        <div className={`p-8 rounded-2xl border ${isDarkMode 
          ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
          : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
        } backdrop-blur-sm`}>
          <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
            Real-time Protection Integration
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                How It Works
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Files are analyzed instantly upon upload using advanced hashing algorithms
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Multiple antivirus engines process scans simultaneously for faster results
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Real-time threat intelligence updates ensure detection of latest threats
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Workflow Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Integrate Verinizer into your existing security workflow seamlessly
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Use as a verification step before downloading or executing files
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400' 
                    : 'bg-gradient-to-r from-cyan-600 to-green-600'
                  }`}></div>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Perfect for incident response and threat hunting activities
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