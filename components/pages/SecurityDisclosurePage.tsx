interface SecurityDisclosurePageProps {
  isDarkMode: boolean;
}

export function SecurityDisclosurePage({ isDarkMode }: SecurityDisclosurePageProps) {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${isDarkMode 
            ? 'bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30' 
            : 'bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/30'
          }`}>
            <svg className={`w-8 h-8 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode 
            ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
          }`}>
            Security Disclosure Policy
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Responsible Vulnerability Reporting
          </p>
        </div>

        {/* Content */}
        <div className={`prose max-w-none ${isDarkMode ? 'prose-invert' : 'prose-slate'}`}>
          <div className={`p-8 rounded-2xl border ${isDarkMode 
            ? 'bg-slate-900/70 border-slate-700/50 shadow-2xl' 
            : 'bg-white/90 border-slate-200/60 shadow-xl shadow-slate-200/50'
          } backdrop-blur-sm space-y-8`}>
            
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                1. Our Commitment to Security
              </h2>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Verinizer is committed to ensuring the security and privacy of our users. We appreciate the efforts of security researchers and the broader cybersecurity community in helping us identify and address potential security vulnerabilities. This policy outlines our process for receiving, investigating, and addressing security reports.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                2. Scope of This Policy
              </h2>
              
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                2.1 In-Scope Assets
              </h3>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Verinizer web application (*.verinizer.com)</li>
                <li>API endpoints and services</li>
                <li>Infrastructure supporting the Verinizer platform</li>
                <li>Mobile applications (when available)</li>
                <li>Browser extensions (when available)</li>
              </ul>

              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                2.2 Out-of-Scope
              </h3>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Third-party services (VirusTotal, cloud providers)</li>
                <li>Social media pages and marketing websites</li>
                <li>Physical security of offices or data centers</li>
                <li>Vulnerabilities requiring physical access to user devices</li>
                <li>Social engineering attacks against employees</li>
                <li>Denial of service (DoS) attacks</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                3. Vulnerability Categories
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`p-4 rounded-lg border ${isDarkMode 
                  ? 'bg-red-500/10 border-red-500/30' 
                  : 'bg-red-500/5 border-red-500/30'
                }`}>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
                    🔴 Critical Severity
                  </h3>
                  <ul className={`text-sm space-y-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• Remote code execution</li>
                    <li>• SQL injection</li>
                    <li>• Authentication bypass</li>
                    <li>• Privilege escalation</li>
                    <li>• Data exfiltration vulnerabilities</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg border ${isDarkMode 
                  ? 'bg-orange-500/10 border-orange-500/30' 
                  : 'bg-orange-500/5 border-orange-500/30'
                }`}>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                    🟠 High Severity
                  </h3>
                  <ul className={`text-sm space-y-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• Cross-site scripting (XSS)</li>
                    <li>• Cross-site request forgery (CSRF)</li>
                    <li>• Server-side request forgery (SSRF)</li>
                    <li>• Insecure direct object references</li>
                    <li>• Broken access control</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg border ${isDarkMode 
                  ? 'bg-yellow-500/10 border-yellow-500/30' 
                  : 'bg-yellow-500/5 border-yellow-500/30'
                }`}>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                    🟡 Medium Severity
                  </h3>
                  <ul className={`text-sm space-y-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• Information disclosure</li>
                    <li>• Subdomain takeover</li>
                    <li>• Business logic flaws</li>
                    <li>• Rate limiting bypasses</li>
                    <li>• Security misconfigurations</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg border ${isDarkMode 
                  ? 'bg-green-500/10 border-green-500/30' 
                  : 'bg-green-500/5 border-green-500/30'
                }`}>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                    🟢 Low Severity
                  </h3>
                  <ul className={`text-sm space-y-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• Missing security headers</li>
                    <li>• Cookie security issues</li>
                    <li>• Content security policy bypasses</li>
                    <li>• Open redirects</li>
                    <li>• Version disclosure</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                4. How to Report a Vulnerability
              </h2>
              
              <div className={`p-4 rounded-lg mb-4 ${isDarkMode 
                ? 'bg-cyan-500/10 border border-cyan-500/30' 
                : 'bg-cyan-500/5 border border-cyan-500/30'
              }`}>
                <p className={`${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'} font-medium`}>
                  📧 Report vulnerabilities to: security@verinizer.com
                </p>
              </div>

              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                4.1 Required Information
              </h3>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Please include the following information in your report:
              </p>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Detailed description of the vulnerability</li>
                <li>Steps to reproduce the issue</li>
                <li>Proof of concept (screenshots, videos, or code)</li>
                <li>Potential impact and exploitation scenarios</li>
                <li>Suggested remediation steps (if known)</li>
                <li>Your contact information for follow-up</li>
                <li>Timeline for any planned public disclosure</li>
              </ul>

              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                4.2 Encryption and Secure Communication
              </h3>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                For sensitive reports, you may encrypt your communication:
              </p>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>PGP Key: [PGP key fingerprint would be provided]</li>
                <li>Signal: Available upon request</li>
                <li>Secure file sharing: We can provide secure upload links</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                5. Our Response Process
              </h2>
              
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 font-bold text-white bg-gradient-to-r from-cyan-500 to-green-500`}>
                    1
                  </div>
                  <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Acknowledgment
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Within 24 hours
                  </p>
                </div>
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 font-bold text-white bg-gradient-to-r from-cyan-500 to-green-500`}>
                    2
                  </div>
                  <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Initial Assessment
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Within 72 hours
                  </p>
                </div>
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 font-bold text-white bg-gradient-to-r from-cyan-500 to-green-500`}>
                    3
                  </div>
                  <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Investigation
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    1-2 weeks
                  </p>
                </div>
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 font-bold text-white bg-gradient-to-r from-cyan-500 to-green-500`}>
                    4
                  </div>
                  <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Resolution
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Varies by severity
                  </p>
                </div>
              </div>

              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                5.1 Response Timeframes
              </h3>
              <div className="overflow-x-auto">
                <table className={`w-full border-collapse ${isDarkMode ? 'border-slate-700' : 'border-slate-300'}`}>
                  <thead>
                    <tr className={`${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-100/50'}`}>
                      <th className={`border p-3 text-left ${isDarkMode ? 'border-slate-700 text-slate-300' : 'border-slate-300 text-slate-700'}`}>Severity</th>
                      <th className={`border p-3 text-left ${isDarkMode ? 'border-slate-700 text-slate-300' : 'border-slate-300 text-slate-700'}`}>First Response</th>
                      <th className={`border p-3 text-left ${isDarkMode ? 'border-slate-700 text-slate-300' : 'border-slate-300 text-slate-700'}`}>Resolution Target</th>
                      <th className={`border p-3 text-left ${isDarkMode ? 'border-slate-700 text-slate-300' : 'border-slate-300 text-slate-700'}`}>Disclosure Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-red-400' : 'border-slate-300 text-red-600'}`}>Critical</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>12 hours</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>72 hours</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>30 days</td>
                    </tr>
                    <tr>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-orange-400' : 'border-slate-300 text-orange-600'}`}>High</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>24 hours</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>7 days</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>60 days</td>
                    </tr>
                    <tr>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-yellow-400' : 'border-slate-300 text-yellow-600'}`}>Medium</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>48 hours</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>14 days</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>90 days</td>
                    </tr>
                    <tr>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-green-400' : 'border-slate-300 text-green-600'}`}>Low</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>72 hours</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>30 days</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>120 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                6. Responsible Disclosure Guidelines
              </h2>
              
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                6.1 Do's
              </h3>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Provide reasonable time for us to investigate and fix issues</li>
                <li>Avoid privacy violations and data destruction</li>
                <li>Use only test accounts for verification</li>
                <li>Report vulnerabilities as soon as possible</li>
                <li>Act in good faith and follow this disclosure policy</li>
                <li>Provide clear, detailed reports with reproduction steps</li>
              </ul>

              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                6.2 Don'ts
              </h3>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Access or modify other users' data</li>
                <li>Perform attacks that could harm service availability</li>
                <li>Publicly disclose vulnerabilities before we've had time to fix them</li>
                <li>Demand compensation or threaten public disclosure</li>
                <li>Use social engineering against employees</li>
                <li>Test on production systems with real user data</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                7. Recognition and Rewards
              </h2>
              
              <div className={`p-4 rounded-lg mb-4 ${isDarkMode 
                ? 'bg-green-500/10 border border-green-500/30' 
                : 'bg-green-500/5 border border-green-500/30'
              }`}>
                <p className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} font-medium`}>
                  🏆 We appreciate security researchers and provide recognition for valid reports
                </p>
              </div>

              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                7.1 Hall of Fame
              </h3>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Public acknowledgment on our security page</li>
                <li>Recognition in our Discord community</li>
                <li>Special "Security Researcher" badge/role</li>
                <li>Annual security researcher appreciation post</li>
              </ul>

              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                7.2 Swag and Rewards
              </h3>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Verinizer branded merchandise for valid reports</li>
                <li>Free premium subscriptions for significant findings</li>
                <li>Possible monetary rewards for critical vulnerabilities (under review)</li>
                <li>Conference speaking opportunities and collaboration</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                8. Legal Protection
              </h2>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                We commit to the following for security researchers acting in good faith:
              </p>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>We will not pursue legal action for research conducted under this policy</li>
                <li>We will not report researchers to law enforcement</li>
                <li>We will work with researchers to understand and resolve issues</li>
                <li>We will provide safe harbor for good faith security research</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                9. Contact Information
              </h2>
              <div className={`p-4 rounded-lg ${isDarkMode 
                ? 'bg-cyan-500/10 border border-cyan-500/30' 
                : 'bg-cyan-500/5 border border-cyan-500/30'
              }`}>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Security Team Contact Information:
                </p>
                <ul className={`mt-2 space-y-1 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  <li>📧 Primary: security@verinizer.com</li>
                  <li>🔒 Encrypted: security-pgp@verinizer.com</li>
                  <li>💬 Discord: <a href="https://discord.gg/eDBmRg7Vns" className="underline hover:no-underline">https://discord.gg/eDBmRg7Vns</a></li>
                  <li>⏱️ Response Time: Within 24 hours for security reports</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}