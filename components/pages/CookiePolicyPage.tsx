interface CookiePolicyPageProps {
  isDarkMode: boolean;
}

export function CookiePolicyPage({ isDarkMode }: CookiePolicyPageProps) {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode 
            ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
          }`}>
            Cookie Policy
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
                1. What Are Cookies?
              </h2>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Cookies are small text files stored on your device when you visit websites. They help websites remember your preferences, settings, and activity to provide a better user experience. Verinizer primarily uses browser local storage rather than traditional cookies to maintain your data locally.
              </p>
              
              <div className={`p-4 rounded-lg ${isDarkMode 
                ? 'bg-green-500/10 border border-green-500/30' 
                : 'bg-green-500/5 border border-green-500/30'
              }`}>
                <p className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} font-medium`}>
                  🔒 Privacy First: Verinizer stores data locally on your device, not on external servers.
                </p>
              </div>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                2. Types of Data Storage We Use
              </h2>
              
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                2.1 Local Storage
              </h3>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                We primarily use browser local storage to store data directly on your device:
              </p>
              <div className="overflow-x-auto">
                <table className={`w-full border-collapse ${isDarkMode ? 'border-slate-700' : 'border-slate-300'}`}>
                  <thead>
                    <tr className={`${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-100/50'}`}>
                      <th className={`border p-3 text-left ${isDarkMode ? 'border-slate-700 text-slate-300' : 'border-slate-300 text-slate-700'}`}>Storage Key</th>
                      <th className={`border p-3 text-left ${isDarkMode ? 'border-slate-700 text-slate-300' : 'border-slate-300 text-slate-700'}`}>Purpose</th>
                      <th className={`border p-3 text-left ${isDarkMode ? 'border-slate-700 text-slate-300' : 'border-slate-300 text-slate-700'}`}>Data Type</th>
                      <th className={`border p-3 text-left ${isDarkMode ? 'border-slate-700 text-slate-300' : 'border-slate-300 text-slate-700'}`}>Expiration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>verinizer-theme</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>Dark/Light mode preference</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>Boolean</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>Persistent</td>
                    </tr>
                    <tr>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>verinizer-auth</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>Authentication status</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>Boolean</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>Session</td>
                    </tr>
                    <tr>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>verinizer-scan-history</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>Scan results and history</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>JSON Array</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>Until cleared</td>
                    </tr>
                    <tr>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>verinizer-email</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>User email address</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>String</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>Until logout</td>
                    </tr>
                    <tr>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>verinizer-username</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>Display username</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>String</td>
                      <td className={`border p-3 ${isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-300 text-slate-600'}`}>Until logout</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className={`text-xl font-semibold mb-3 mt-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                2.2 Session Storage
              </h3>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Temporary data that is cleared when you close your browser tab:
              </p>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Current scan progress and status</li>
                <li>Temporary file upload information</li>
                <li>Active modal states</li>
                <li>Navigation history within the application</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                3. Third-Party Cookies
              </h2>
              
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                3.1 VirusTotal Integration
              </h3>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                When using our scanning features, we interact with the VirusTotal API:
              </p>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>VirusTotal may set their own cookies during API requests</li>
                <li>These cookies are governed by VirusTotal's privacy policy</li>
                <li>We do not control or access VirusTotal's cookies</li>
                <li>Only file hashes and URLs are sent to VirusTotal, never full files</li>
              </ul>

              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                3.2 Analytics and Performance
              </h3>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Currently, Verinizer does not use third-party analytics services. All usage data remains on your device. If we implement analytics in the future, we will:
              </p>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Update this Cookie Policy</li>
                <li>Provide opt-out mechanisms</li>
                <li>Use privacy-focused analytics solutions</li>
                <li>Anonymize all collected data</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                4. Cookie Categories
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`p-4 rounded-lg border ${isDarkMode 
                  ? 'bg-green-500/10 border-green-500/30' 
                  : 'bg-green-500/5 border-green-500/30'
                }`}>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                    Essential Storage
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Required for basic application functionality. Cannot be disabled.
                  </p>
                  <ul className={`mt-2 text-sm space-y-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• Authentication status</li>
                    <li>• User preferences</li>
                    <li>• Security tokens</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg border ${isDarkMode 
                  ? 'bg-blue-500/10 border-blue-500/30' 
                  : 'bg-blue-500/5 border-blue-500/30'
                }`}>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    Functional Storage
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Enhances user experience with personalized features.
                  </p>
                  <ul className={`mt-2 text-sm space-y-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• Theme preferences</li>
                    <li>• Scan history</li>
                    <li>• Display settings</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg border ${isDarkMode 
                  ? 'bg-purple-500/10 border-purple-500/30' 
                  : 'bg-purple-500/5 border-purple-500/30'
                }`}>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                    Performance Storage
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Improves application speed and efficiency.
                  </p>
                  <ul className={`mt-2 text-sm space-y-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• Cached scan results</li>
                    <li>• API response cache</li>
                    <li>• Resource preloading</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg border ${isDarkMode 
                  ? 'bg-gray-500/10 border-gray-500/30' 
                  : 'bg-gray-500/5 border-gray-500/30'
                }`}>
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Analytics Storage
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Currently not used. Future implementation will be optional.
                  </p>
                  <ul className={`mt-2 text-sm space-y-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>• Usage statistics</li>
                    <li>• Feature usage data</li>
                    <li>• Performance metrics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                5. Managing Your Data
              </h2>
              
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                5.1 Browser Controls
              </h3>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                You can manage local storage data through your browser:
              </p>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Site Settings → View permissions and data stored → verinizer.com</li>
                <li><strong>Firefox:</strong> Privacy & Security → Cookies and Site Data → Manage Data → Search for verinizer.com</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data → Search for verinizer.com</li>
                <li><strong>Edge:</strong> Settings → Cookies and Site Permissions → See all cookies and site data → Search for verinizer.com</li>
              </ul>

              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                5.2 In-App Controls
              </h3>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Clear scan history through the application interface</li>
                <li>Change theme preferences in settings</li>
                <li>Sign out to clear authentication data</li>
                <li>Delete account to remove all associated data</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                6. Data Retention
              </h2>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Theme preferences: Until manually changed or browser data cleared</li>
                <li>Authentication data: Until logout or account deletion</li>
                <li>Scan history: Until manually cleared by user</li>
                <li>Session data: Cleared when browser tab is closed</li>
                <li>Cache data: Cleared automatically after 7 days of inactivity</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                7. Updates to This Policy
              </h2>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                We may update this Cookie Policy to reflect changes in our practices or legal requirements. Significant changes will be communicated through:
              </p>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>In-app notifications</li>
                <li>Email notifications (if you have an account)</li>
                <li>Updated "Last modified" date at the top of this policy</li>
                <li>Discord announcements for major changes</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                8. Contact Information
              </h2>
              <div className={`p-4 rounded-lg ${isDarkMode 
                ? 'bg-cyan-500/10 border border-cyan-500/30' 
                : 'bg-cyan-500/5 border border-cyan-500/30'
              }`}>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  For questions about our Cookie Policy or data practices:
                </p>
                <ul className={`mt-2 space-y-1 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  <li>Email: cookies@verinizer.com</li>
                  <li>Discord: <a href="https://discord.gg/eDBmRg7Vns" className="underline hover:no-underline">https://discord.gg/eDBmRg7Vns</a></li>
                  <li>Response Time: Within 48 hours</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}