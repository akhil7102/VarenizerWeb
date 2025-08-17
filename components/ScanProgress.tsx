import { Shield, Clock, File } from "lucide-react";

interface ScanProgressProps {
  progress: number;
  isScanning: boolean;
  scanType: 'quick' | 'full' | null;
  isDarkMode: boolean;
  uploadedFiles: File[];
}

export function ScanProgress({ progress, isScanning, scanType, isDarkMode, uploadedFiles }: ScanProgressProps) {
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="w-full max-w-2xl">
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/60 via-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 shadow-2xl">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-green-500/5 rounded-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent rounded-3xl"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          {/* Progress Circle */}
          <div className="relative mb-8">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-green-500/30 rounded-full blur-2xl scale-150 animate-pulse"></div>
            
            <svg className="w-64 h-64 transform -rotate-90 relative z-10" viewBox="0 0 256 256">
              {/* Background circle */}
              <circle
                cx="128"
                cy="128"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-slate-700/50"
              />
              
              {/* Progress circle with gradient */}
              <circle
                cx="128"
                cy="128"
                r={radius}
                stroke="url(#progressGradient)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: strokeDashoffset,
                  transition: 'stroke-dashoffset 0.3s ease',
                }}
                className="drop-shadow-lg"
              />
              
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-white mb-2">
                {Math.round(progress)}%
              </div>
              <div className="text-sm text-slate-300 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent font-medium">
                {isScanning ? 'Scanning...' : 'Ready'}
              </div>
            </div>
          </div>

          {/* Scan Information */}
          <div className="w-full space-y-4">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/30">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300 font-medium">
                  {scanType?.charAt(0).toUpperCase()}{scanType?.slice(1)} Scan
                </span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/30">
                <File className="w-5 h-5 text-green-400" />
                <span className="text-slate-300 font-medium">
                  {uploadedFiles.length} Files
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden border border-slate-600/30">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 transition-all duration-300 ease-out shadow-lg"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* File List Preview */}
            {uploadedFiles.length > 0 && (
              <div className="mt-6 p-4 bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-xl border border-slate-600/20">
                <h4 className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  Currently Scanning:
                </h4>
                <div className="space-y-2">
                  {uploadedFiles.slice(0, 3).map((file, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 bg-slate-800/30 rounded-lg">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-slate-300 truncate flex-1">{file.name}</span>
                      <span className="text-xs text-slate-500">
                        {(file.size / 1024 / 1024).toFixed(1)} MB
                      </span>
                    </div>
                  ))}
                  {uploadedFiles.length > 3 && (
                    <div className="text-xs text-slate-400 text-center pt-2">
                      +{uploadedFiles.length - 3} more files...
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}