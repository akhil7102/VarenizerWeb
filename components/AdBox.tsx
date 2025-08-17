interface AdBoxProps {
  isDarkMode: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  position?: 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
}

export function AdBox({ isDarkMode, size = 'medium', className = '', position }: AdBoxProps) {
  // Updated sizes with 4% increase and 4:3 aspect ratio
  const sizeClasses = {
    small: 'w-[275px] h-[206px] text-sm',      // ~4% increase from w-64, 4:3 ratio (275px x 206px)
    medium: 'w-[333px] h-[250px] text-base',   // ~4% increase from w-80, 4:3 ratio (333px x 250px) 
    large: 'w-[416px] h-[312px] text-lg'      // ~4% increase from w-96, 4:3 ratio (416px x 312px)
  };

  // Google AdSense placeholder for left-top position
  if (position === 'left-top') {
    return (
      <div 
        className={`
          ${sizeClasses[size]}
          ${isDarkMode 
            ? 'bg-gradient-to-br from-slate-800/70 via-slate-900/80 to-slate-800/70 border-emerald-500/40 text-slate-300' 
            : 'bg-gradient-to-br from-emerald-50/90 via-white/95 to-emerald-50/90 border-emerald-400/60 text-slate-700'
          } 
          border-2 rounded-2xl flex flex-col items-center justify-start p-4 
          transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden
          ${className}
        `}
      >
        <div className="text-center mb-3">
          <div className={`font-bold mb-1 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
            📊 Google AdSense Ad
          </div>
          <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Developer Placeholder
          </div>
        </div>
        
        <div className={`w-full ${isDarkMode ? 'bg-slate-900/60 border-slate-600/40' : 'bg-slate-100/80 border-slate-300/50'} border rounded-lg p-2 overflow-hidden`}>
          <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mb-1 font-medium`}>
            AdSense Code:
          </div>
          <div className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-500'} font-mono leading-tight overflow-hidden text-ellipsis`}>
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">
              &lt;script async src="https://pagead2...
            </div>
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">
              &lt;ins class="adsbygoogle"
            </div>
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">
              data-ad-client="ca-pub-4065084..."
            </div>
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">
              data-ad-slot="8318802044"&gt;
            </div>
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">
              &lt;script&gt;(adsbygoogle || [])...
            </div>
          </div>
        </div>
        
        <div className={`text-xs mt-2 text-center ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
          Replace with actual AdSense implementation
        </div>
      </div>
    );
  }

  // Render placeholder for other positions
  return (
    <div 
      className={`
        ${sizeClasses[size]}
        ${isDarkMode 
          ? 'bg-slate-800/50 border-slate-600/50 text-slate-400' 
          : 'bg-slate-100/80 border-slate-300/60 text-slate-600'
        } 
        border-2 border-dashed rounded-2xl flex flex-col items-center justify-center 
        transition-all duration-300 hover:scale-105 cursor-pointer
        ${className}
      `}
    >
      <div className="text-center p-4">
        <div className={`font-bold mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
          📢 Advertisement
        </div>
        <div className="font-medium">
          Place your ad here
        </div>
        <div className={`text-sm mt-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
          $1 per month
        </div>
        <div className={`text-xs mt-2 ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>
          Contact us for more info
        </div>
      </div>
    </div>
  );
}