import { Wifi, Shield, Clock, CheckCircle } from "lucide-react";

interface StatusBarProps {
  virusTotalConnected: boolean;
  lastUpdate: string;
  isDarkMode: boolean;
}

export function StatusBar({ virusTotalConnected, lastUpdate, isDarkMode }: StatusBarProps) {
  return (
    <div className="bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl border-t border-slate-700/50 p-4 shadow-2xl">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-8">
          {/* VirusTotal Status */}
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              virusTotalConnected 
                ? 'bg-gradient-to-r from-green-400 to-emerald-400 shadow-lg shadow-green-500/50 animate-pulse' 
                : 'bg-gradient-to-r from-red-400 to-red-500 shadow-lg shadow-red-500/50'
            }`} />
            <span className="text-slate-300 font-medium">
              VirusTotal: {virusTotalConnected ? 'Connected' : 'Disconnected'}
            </span>
          </div>

          {/* Last Update */}
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>Last Update: {lastUpdate}</span>
          </div>

          {/* Security Status */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-slate-300 font-medium">System Protected</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Version */}
          <div className="text-slate-400">
            <span className="text-slate-500">v</span>1.0.0
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full border border-green-500/30">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-green-300 font-medium text-xs">Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}