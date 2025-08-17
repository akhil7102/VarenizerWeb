interface EulaPageProps {
  isDarkMode: boolean;
}

export function EulaPage({ isDarkMode }: EulaPageProps) {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode 
            ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
          }`}>
            End User License Agreement (EULA)
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Last updated: January 15, 2025
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
                1. License Grant
              </h2>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Subject to your compliance with this End User License Agreement ("EULA"), Verinizer grants you a limited, non-exclusive, non-transferable, revocable license to:
              </p>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Access and use the Verinizer web application</li>
                <li>Scan files and URLs for security analysis</li>
                <li>Store scan results locally on your device</li>
                <li>Export scan data for personal or business use</li>
                <li>Create an account and customize preferences</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                2. License Restrictions
              </h2>
              
              <div className={`p-4 rounded-lg mb-4 ${isDarkMode 
                ? 'bg-red-500/10 border border-red-500/30' 
                : 'bg-red-500/5 border border-red-500/30'
              }`}>
                <p className={`${isDarkMode ? 'text-red-400' : 'text-red-600'} font-medium`}>
                  ⚠️ You may NOT do any of the following:
                </p>
              </div>

              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Reverse engineer, decompile, or disassemble the software</li>
                <li>Remove, alter, or obscure any copyright or trademark notices</li>
                <li>Create derivative works based on Verinizer</li>
                <li>Rent, lease, lend, sell, or distribute the software</li>
                <li>Use the software for commercial purposes without authorization</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with security features or digital rights management</li>
                <li>Use the software to develop competing products</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                3. Software Ownership
              </h2>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Verinizer retains all rights, title, and interest in the software</li>
                <li>This EULA grants you usage rights, not ownership</li>
                <li>All intellectual property remains with Verinizer</li>
                <li>Third-party components are governed by their respective licenses</li>
                <li>User data and scan results remain your property</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                4. License Types
              </h2>
              
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                4.1 Free License
              </h3>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Limited to 500 file scans and 100 URL scans per month</li>
                <li>Access to all security engines and features</li>
                <li>Local scan history storage</li>
                <li>Email support</li>
              </ul>

              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                4.2 Pro License
              </h3>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Increased scan limits (5,000 files, 1,000 URLs per month)</li>
                <li>API access for integration</li>
                <li>Priority support</li>
                <li>Advanced reporting features</li>
                <li>Batch scanning capabilities</li>
              </ul>

              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                4.3 Enterprise License
              </h3>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Unlimited scanning capabilities</li>
                <li>White-label options</li>
                <li>Custom integrations</li>
                <li>Dedicated support</li>
                <li>SLA guarantees</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                5. Updates and Modifications
              </h2>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Verinizer may provide updates, patches, and new versions</li>
                <li>Updates may be installed automatically for security purposes</li>
                <li>New features may require acceptance of additional terms</li>
                <li>Older versions may become unsupported over time</li>
                <li>You may be required to update to continue using the service</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                6. Data and Privacy
              </h2>
              
              <div className={`p-4 rounded-lg mb-4 ${isDarkMode 
                ? 'bg-green-500/10 border border-green-500/30' 
                : 'bg-green-500/5 border border-green-500/30'
              }`}>
                <p className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} font-medium`}>
                  🔒 Privacy Protection: Your files never leave your device
                </p>
              </div>

              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>All file processing occurs client-side in your browser</li>
                <li>Only file hashes and URLs are transmitted for analysis</li>
                <li>Scan results are stored locally on your device</li>
                <li>Account information is encrypted and protected</li>
                <li>We comply with applicable privacy laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                7. Third-Party Components
              </h2>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Verinizer incorporates third-party components and services:
              </p>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>VirusTotal API for malware analysis</li>
                <li>Open source libraries with their respective licenses</li>
                <li>Third-party security engines and databases</li>
                <li>Cloud infrastructure services</li>
              </ul>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                These components are governed by their own license agreements and terms of service.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                8. Disclaimer of Warranties
              </h2>
              
              <div className={`p-4 rounded-lg mb-4 ${isDarkMode 
                ? 'bg-yellow-500/10 border border-yellow-500/30' 
                : 'bg-yellow-500/5 border border-yellow-500/30'
              }`}>
                <p className={`${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} font-medium`}>
                  ⚠️ Software is provided "AS IS" without warranties
                </p>
              </div>

              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>No warranty of merchantability or fitness for a particular purpose</li>
                <li>No guarantee of uninterrupted or error-free operation</li>
                <li>No warranty regarding security or threat detection accuracy</li>
                <li>No warranty of compatibility with all systems</li>
                <li>All risks of software use are assumed by the user</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                9. Limitation of Liability
              </h2>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Verinizer is not liable for any direct, indirect, or consequential damages</li>
                <li>Maximum liability is limited to the amount paid for the license</li>
                <li>No liability for data loss, security breaches, or business interruption</li>
                <li>Users are responsible for their own backup and security measures</li>
                <li>Some jurisdictions do not allow liability limitations</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                10. Termination
              </h2>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>License is effective until terminated by either party</li>
                <li>Automatic termination upon breach of EULA terms</li>
                <li>User may terminate by discontinuing software use</li>
                <li>Upon termination, all rights granted under this EULA cease</li>
                <li>Sections 2, 3, 8, 9, and 11 survive termination</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                11. Governing Law
              </h2>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                This EULA is governed by the laws of [Jurisdiction], without regard to conflict of law principles. Any disputes arising under this EULA shall be subject to the exclusive jurisdiction of the courts in [Location].
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                12. Contact Information
              </h2>
              <div className={`p-4 rounded-lg ${isDarkMode 
                ? 'bg-cyan-500/10 border border-cyan-500/30' 
                : 'bg-cyan-500/5 border border-cyan-500/30'
              }`}>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  For questions about this EULA, please contact us:
                </p>
                <ul className={`mt-2 space-y-1 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  <li>Email: licensing@verinizer.com</li>
                  <li>Discord: <a href="https://discord.gg/eDBmRg7Vns" className="underline hover:no-underline">https://discord.gg/eDBmRg7Vns</a></li>
                  <li>Response Time: Within 5 business days</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}