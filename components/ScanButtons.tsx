import { Button } from "./ui/button";
import { Play, Square, Zap, Shield } from "lucide-react";

interface ScanButtonsProps {
  onStartScan: (type: 'quick' | 'full') => void;
  onStopScan: () => void;
  isScanning: boolean;
  scanType: 'quick' | 'full' | null;
  isDarkMode: boolean;
  hasFiles: boolean;
}

export function ScanButtons({ 
  onStartScan, 
  onStopScan, 
  isScanning, 
  scanType, 
  isDarkMode, 
  hasFiles 
}: ScanButtonsProps) {
  if (isScanning) {
    return (
      <div className="flex justify-center">
        <Button 
          onClick={onStopScan}
          size="lg"
          className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:via-red-400 hover:to-red-500 text-white px-12 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 rounded-xl border border-red-500/30"
        >
          <Square className="w-6 h-6 mr-3" />
          Stop Scan
        </Button>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-6">
      <Button
        onClick={() => onStartScan('quick')}
        disabled={!hasFiles}
        size="lg"
        className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 hover:from-cyan-500 hover:via-blue-500 hover:to-cyan-500 disabled:from-slate-700 disabled:via-slate-600 disabled:to-slate-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 disabled:hover:scale-100 disabled:hover:shadow-none rounded-xl border border-cyan-500/30 disabled:border-slate-600/30 group"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
            <Zap className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="font-semibold">Quick Scan</div>
            <div className="text-xs opacity-90">Fast malware detection</div>
          </div>
        </div>
      </Button>

      <Button
        onClick={() => onStartScan('full')}
        disabled={!hasFiles}
        size="lg"
        className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 hover:from-green-500 hover:via-emerald-500 hover:to-green-500 disabled:from-slate-700 disabled:via-slate-600 disabled:to-slate-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 disabled:hover:scale-100 disabled:hover:shadow-none rounded-xl border border-green-500/30 disabled:border-slate-600/30 group"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
            <Shield className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="font-semibold">Full Scan</div>
            <div className="text-xs opacity-90">Comprehensive analysis</div>
          </div>
        </div>
      </Button>
    </div>
  );
}