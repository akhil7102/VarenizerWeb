interface PrivacyPolicyPageProps {
  isDarkMode: boolean;
}

export function PrivacyPolicyPage({ isDarkMode }: PrivacyPolicyPageProps) {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode 
            ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
          }`}>
            Privacy Policy
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
                1. Introduction
              </h2>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Verinizer ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our security scanning service. By using Verinizer, you consent to the practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                2. Information We Collect
              </h2>
              
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                2.1 File and URL Data
              </h3>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>File hashes (SHA-256) for security analysis</li>
                <li>URLs submitted for scanning</li>
                <li>File metadata (name, size, type) for display purposes only</li>
                <li>Scan results and detection information</li>
              </ul>

              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                2.2 Account Information
              </h3>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Email address (when you create an account)</li>
                <li>Username and display preferences</li>
                <li>Account settings and scan history</li>
              </ul>

              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                2.3 Technical Information
              </h3>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Browser type and version</li>
                <li>Operating system information</li>
                <li>IP address (for security and rate limiting)</li>
                <li>Usage patterns and feature interactions</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                3. How We Use Your Information
              </h2>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Provide and maintain our security scanning services</li>
                <li>Process file and URL scans using VirusTotal API</li>
                <li>Maintain your scan history and preferences</li>
                <li>Improve our service quality and user experience</li>
                <li>Communicate important service updates or security alerts</li>
                <li>Prevent fraud, abuse, and unauthorized access</li>
                <li>Comply with legal obligations and protect user rights</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                4. Data Storage and Security
              </h2>
              
              <div className={`p-4 rounded-lg mb-4 ${isDarkMode 
                ? 'bg-green-500/10 border border-green-500/30' 
                : 'bg-green-500/5 border border-green-500/30'
              }`}>
                <p className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} font-medium`}>
                  🔒 Privacy First: Your files never leave your device. All scanning is performed client-side.
                </p>
              </div>

              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Files are processed entirely within your browser</li>
                <li>Only file hashes are transmitted to external scanning services</li>
                <li>Scan results are stored locally on your device</li>
                <li>Account information is encrypted in transit and at rest</li>
                <li>We implement industry-standard security measures</li>
                <li>Regular security audits and vulnerability assessments</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                5. Third-Party Services
              </h2>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Verinizer integrates with VirusTotal for malware detection. When you scan files or URLs:
              </p>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>File hashes (not the actual files) are sent to VirusTotal</li>
                <li>URLs are submitted to VirusTotal for analysis</li>
                <li>We receive detection results from multiple antivirus engines</li>
                <li>Please review VirusTotal's privacy policy for their data practices</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                6. Cookies and Local Storage
              </h2>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                We use browser local storage to:
              </p>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Store your theme preferences (dark/light mode)</li>
                <li>Maintain your scan history locally</li>
                <li>Remember your authentication status</li>
                <li>Cache scan results for quick access</li>
              </ul>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                For detailed information about our cookie usage, please see our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                7. Your Rights and Choices
              </h2>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Access and review your account information</li>
                <li>Update or correct your personal data</li>
                <li>Delete your account and associated data</li>
                <li>Export your scan history data</li>
                <li>Opt-out of non-essential communications</li>
                <li>Clear local storage data through your browser</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                8. Data Retention
              </h2>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Scan history: Stored locally until manually cleared</li>
                <li>Account information: Retained while your account is active</li>
                <li>Technical logs: Automatically deleted after 30 days</li>
                <li>Deleted accounts: All associated data removed within 30 days</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                9. International Users
              </h2>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Verinizer is designed to comply with international privacy laws including GDPR, CCPA, and other applicable regulations. If you are located outside the United States, please note that your information may be transferred to and processed in countries with different privacy laws.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                10. Updates to This Policy
              </h2>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify users of significant changes through our service or via email. Your continued use of Verinizer after such modifications constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                11. Contact Information
              </h2>
              <div className={`p-4 rounded-lg ${isDarkMode 
                ? 'bg-cyan-500/10 border border-cyan-500/30' 
                : 'bg-cyan-500/5 border border-cyan-500/30'
              }`}>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  For privacy-related questions, concerns, or requests, please contact us at:
                </p>
                <ul className={`mt-2 space-y-1 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  <li>Email: privacy@verinizer.com</li>
                  <li>Discord: <a href="https://discord.gg/eDBmRg7Vns" className="underline hover:no-underline">https://discord.gg/eDBmRg7Vns</a></li>
                  <li>Response Time: Within 72 hours</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}