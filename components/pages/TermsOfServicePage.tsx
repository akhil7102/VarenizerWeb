interface TermsOfServicePageProps {
  isDarkMode: boolean;
}

export function TermsOfServicePage({ isDarkMode }: TermsOfServicePageProps) {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode 
            ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
          }`}>
            Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                By accessing or using Verinizer ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, you may not access or use our Service. These Terms constitute a legally binding agreement between you and Verinizer.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                2. Description of Service
              </h2>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Verinizer is a web-based security scanning platform that:
              </p>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Analyzes files and URLs for potential security threats</li>
                <li>Provides threat intelligence from multiple antivirus engines</li>
                <li>Offers scan history and result tracking</li>
                <li>Maintains user preferences and settings</li>
                <li>Delivers real-time security analysis</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                3. User Responsibilities
              </h2>
              
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                3.1 Acceptable Use
              </h3>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>You agree to:</p>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Use the Service only for legitimate security analysis purposes</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect rate limits and usage restrictions</li>
                <li>Maintain the security of your account credentials</li>
                <li>Provide accurate information when creating an account</li>
              </ul>

              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                3.2 Prohibited Activities
              </h3>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>You agree NOT to:</p>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Submit malicious files with intent to harm the Service</li>
                <li>Attempt to bypass security measures or rate limits</li>
                <li>Use the Service for illegal or unauthorized purposes</li>
                <li>Share your account credentials with unauthorized parties</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Interfere with other users' access to the Service</li>
                <li>Submit copyrighted or proprietary materials without authorization</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                4. Account Terms
              </h2>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>You are responsible for maintaining account security</li>
                <li>You must provide accurate and current information</li>
                <li>One person may not maintain multiple accounts</li>
                <li>Account sharing is prohibited</li>
                <li>We reserve the right to suspend accounts for Terms violations</li>
                <li>Account deletion will result in permanent data loss</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                5. Service Availability and Performance
              </h2>
              
              <div className={`p-4 rounded-lg mb-4 ${isDarkMode 
                ? 'bg-yellow-500/10 border border-yellow-500/30' 
                : 'bg-yellow-500/5 border border-yellow-500/30'
              }`}>
                <p className={`${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} font-medium`}>
                  ⚠️ Service Disclaimer: Verinizer is provided "as-is" without warranties of any kind.
                </p>
              </div>

              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>We strive for 99% uptime but do not guarantee continuous availability</li>
                <li>Maintenance windows may temporarily interrupt service</li>
                <li>Third-party dependencies (like VirusTotal) may affect functionality</li>
                <li>Scan results are provided for informational purposes only</li>
                <li>False positives and false negatives may occur</li>
                <li>We do not guarantee detection of all threats</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                6. Intellectual Property Rights
              </h2>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Verinizer and its content are protected by copyright and trademark laws</li>
                <li>You retain ownership of files you submit for scanning</li>
                <li>We retain rights to scan results and aggregated data</li>
                <li>You may not reproduce, distribute, or create derivative works</li>
                <li>User-generated content remains your property with license to us for service provision</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                7. Privacy and Data Protection
              </h2>
              <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Your privacy is important to us. Our data handling practices are detailed in our Privacy Policy, which forms part of these Terms. Key points include:
              </p>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Files are processed client-side and never uploaded to our servers</li>
                <li>Only file hashes and URLs are transmitted for analysis</li>
                <li>Scan results are stored locally on your device</li>
                <li>Account information is encrypted and securely stored</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                8. Limitation of Liability
              </h2>
              <div className={`p-4 rounded-lg mb-4 ${isDarkMode 
                ? 'bg-red-500/10 border border-red-500/30' 
                : 'bg-red-500/5 border border-red-500/30'
              }`}>
                <p className={`${isDarkMode ? 'text-red-400' : 'text-red-600'} font-medium`}>
                  🚨 Important Legal Notice
                </p>
              </div>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Verinizer is not liable for damages arising from service use</li>
                <li>We do not guarantee 100% threat detection accuracy</li>
                <li>Users are responsible for their own cybersecurity decisions</li>
                <li>Maximum liability is limited to amounts paid for premium services</li>
                <li>We are not responsible for third-party service failures</li>
                <li>Force majeure events excuse performance obligations</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                9. Indemnification
              </h2>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                You agree to indemnify and hold harmless Verinizer, its affiliates, officers, agents, and employees from any claims, demands, losses, liabilities, and expenses (including attorneys' fees) arising from your use of the Service, violation of these Terms, or infringement of any rights of another party.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                10. Termination
              </h2>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>Either party may terminate service at any time</li>
                <li>We may suspend accounts for Terms violations</li>
                <li>Termination does not affect accrued rights or obligations</li>
                <li>Data deletion occurs within 30 days of account termination</li>
                <li>Sections 6-12 survive termination of these Terms</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                11. Changes to Terms
              </h2>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Material changes will be communicated via email or service notification. Continued use of the Service constitutes acceptance of modified Terms.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                12. Governing Law and Disputes
              </h2>
              <ul className={`list-disc ml-6 mb-4 space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <li>These Terms are governed by the laws of [Jurisdiction]</li>
                <li>Disputes will be resolved through binding arbitration</li>
                <li>Class action lawsuits are waived</li>
                <li>Venue for any legal proceedings is [Location]</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                13. Contact Information
              </h2>
              <div className={`p-4 rounded-lg ${isDarkMode 
                ? 'bg-cyan-500/10 border border-cyan-500/30' 
                : 'bg-cyan-500/5 border border-cyan-500/30'
              }`}>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  For questions about these Terms of Service, please contact us:
                </p>
                <ul className={`mt-2 space-y-1 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  <li>Email: legal@verinizer.com</li>
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