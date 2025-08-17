interface FooterProps {
  isDarkMode: boolean;
  onNavigate: (page: string) => void;
}

export function Footer({ isDarkMode, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { id: 'privacy-policy', label: 'Privacy Policy' },
    { id: 'terms-of-service', label: 'Terms of Service' },
    { id: 'eula', label: 'EULA' },
    { id: 'cookie-policy', label: 'Cookie Policy' },
    { id: 'security-disclosure', label: 'Security Disclosure' }
  ];

  const productLinks = [
    { id: 'features', label: 'Features' },
    { id: 'real-time-protection', label: 'Real-time Protection' },
    { id: 'threat-intelligence', label: 'Threat Intelligence' },
    { id: 'system-requirements', label: 'System Requirements' },
    { id: 'pricing', label: 'Pricing' }
  ];

  const supportLinks = [
    { url: 'https://discord.gg/eDBmRg7Vns', label: 'Discord Support', external: true },
    { url: 'https://discord.gg/eDBmRg7Vns', label: 'Community', external: true },
    { url: 'https://discord.gg/eDBmRg7Vns', label: 'Documentation', external: true },
    { url: 'https://discord.gg/eDBmRg7Vns', label: 'Help Center', external: true }
  ];

  const handleLinkClick = (linkId: string) => {
    console.log('Footer link clicked:', linkId); // Debug log
    onNavigate(linkId);
  };

  return (
    <footer className={`mt-auto ${isDarkMode 
      ? 'bg-slate-900/80 border-slate-700/50' 
      : 'bg-white/80 border-slate-200/60'
    } backdrop-blur-sm border-t`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <span className={`text-xl font-bold ${isDarkMode 
                ? 'bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent'
              }`}>
                Verinizer
              </span>
            </div>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Advanced File & URL Security Scanner powered by 20+ leading antivirus engines. 
              Protect your digital assets with comprehensive threat analysis.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.youtube.com/@babxstudios" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-slate-400 hover:text-red-400' : 'text-slate-600 hover:text-red-600'} transition-colors`}
                title="YouTube Channel"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://discord.gg/eDBmRg7Vns" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-600 hover:text-indigo-600'} transition-colors`}
                title="Join our Discord"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/babxstudios" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-slate-400 hover:text-pink-400' : 'text-slate-600 hover:text-pink-600'} transition-colors`}
                title="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              Product
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-sm transition-colors hover:underline ${isDarkMode 
                      ? 'text-slate-400 hover:text-cyan-400' 
                      : 'text-slate-600 hover:text-cyan-600'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm transition-colors hover:underline ${isDarkMode 
                      ? 'text-slate-400 hover:text-cyan-400' 
                      : 'text-slate-600 hover:text-cyan-600'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-sm transition-colors hover:underline ${isDarkMode 
                      ? 'text-slate-400 hover:text-cyan-400' 
                      : 'text-slate-600 hover:text-cyan-600'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t ${isDarkMode ? 'border-slate-700/50' : 'border-slate-200/60'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              © {currentYear} Verinizer. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className={`flex items-center space-x-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm">All systems operational</span>
              </div>
              
              <div className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                Made by babxstudios
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}