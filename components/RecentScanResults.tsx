import { Badge } from "./ui/badge";
import { Clock, FileText, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

interface ScanResult {
  id: number;
  name: string;
  status: 'clean' | 'suspicious' | 'malicious';
  time: string;
  filesScanned: number;
}

interface RecentScanResultsProps {
  results: ScanResult[];
}

export function RecentScanResults({ results }: RecentScanResultsProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'clean':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'suspicious':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'malicious':
        return <XCircle className="w-4 h-4 text-red-400" />;
      default:
        return <FileText className="w-4 h-4 text-slate-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'clean':
        return (
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/20">
            Clean
          </Badge>
        );
      case 'suspicious':
        return (
          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/20">
            Suspicious
          </Badge>
        );
      case 'malicious':
        return (
          <Badge className="bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/20">
            Malicious
          </Badge>
        );
      default:
        return (
          <Badge variant="outline" className="text-slate-400 border-slate-600">
            Unknown
          </Badge>
        );
    }
  };

  return (
    <div className="h-full">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-100 mb-2">Recent Scans</h2>
        <p className="text-sm text-slate-400">Latest scan results and history</p>
      </div>

      <div className="space-y-4">
        {results.map((result) => (
          <div
            key={result.id}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                {getStatusIcon(result.status)}
                <h3 className="font-medium text-slate-100 text-sm">{result.name}</h3>
              </div>
              {getStatusBadge(result.status)}
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3 h-3" />
                <span>{result.time}</span>
              </div>
              
              <div className="flex items-center gap-2 text-slate-400">
                <FileText className="w-3 h-3" />
                <span>{result.filesScanned.toLocaleString()} files scanned</span>
              </div>
            </div>

            {result.status === 'suspicious' && (
              <div className="mt-3 pt-3 border-t border-slate-700">
                <div className="text-xs text-yellow-400">
                  2 potentially unwanted programs detected
                </div>
              </div>
            )}

            {result.status === 'malicious' && (
              <div className="mt-3 pt-3 border-t border-slate-700">
                <div className="text-xs text-red-400">
                  5 threats detected and quarantined
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6">
        <button className="w-full text-sm text-cyan-400 hover:text-cyan-300 transition-colors py-2">
          View All Scan History →
        </button>
      </div>
    </div>
  );
}