import { useState, useRef } from "react";
import { Upload, FileText, Shield } from "lucide-react";
import { Button } from "./ui/button";
// Using a placeholder logo - replace with actual Varenizer logo
const varenizerLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Ccircle cx='64' cy='64' r='56' fill='%2306b6d4' opacity='0.2'/%3E%3Ccircle cx='64' cy='64' r='40' fill='%2322c55e' opacity='0.3'/%3E%3Ccircle cx='64' cy='64' r='24' fill='%23a855f7' opacity='0.4'/%3E%3Ctext x='64' y='74' text-anchor='middle' fill='%23ffffff' font-family='Arial, sans-serif' font-size='20' font-weight='bold'%3EV%3C/text%3E%3C/svg%3E";

interface DragDropAreaProps {
  onFileDrop: (files: File[]) => void;
  isDarkMode: boolean;
  isTauriApp?: boolean;
}

export function DragDropArea({ onFileDrop, isDarkMode, isTauriApp }: DragDropAreaProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      onFileDrop(files);
    }
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      onFileDrop(files);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative w-full h-96 rounded-3xl border-2 border-dashed transition-all duration-500 cursor-pointer group
          ${isDragOver 
            ? 'border-cyan-400 scale-105 shadow-2xl shadow-cyan-500/25' 
            : 'border-slate-600/50 hover:border-slate-500/70'
          }
          bg-gradient-to-br from-slate-900/40 via-slate-800/40 to-slate-900/40 
          hover:from-slate-800/60 hover:via-slate-700/60 hover:to-slate-800/60
          backdrop-blur-xl overflow-hidden
        `}
        onClick={handleFileSelect}
      >
        {/* Animated Background Effects */}
        {isDragOver && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-green-500/10 animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent animate-pulse" />
          </>
        )}
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-32 h-32 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl opacity-60 animate-pulse delay-1000"></div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
          {/* Icon/Logo */}
          <div className={`
            w-24 h-24 rounded-full mb-8 flex items-center justify-center transition-all duration-500 relative
            ${isDragOver 
              ? 'scale-110 shadow-2xl shadow-cyan-500/30' 
              : 'group-hover:scale-105'
            }
          `}>
            {/* Background glow */}
            <div className={`
              absolute inset-0 rounded-full transition-all duration-500
              ${isDragOver 
                ? 'bg-gradient-to-r from-cyan-500/30 to-green-500/30 blur-md scale-150' 
                : 'bg-gradient-to-r from-slate-700/30 to-slate-600/30 group-hover:from-slate-600/40 group-hover:to-slate-500/40'
              }
            `}></div>
            
            {isDragOver ? (
              <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center">
                <img 
                  src={varenizerLogo} 
                  alt="Varenizer" 
                  className="w-10 h-10 filter brightness-0 invert animate-pulse"
                />
              </div>
            ) : (
              <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-600 group-hover:from-slate-600 group-hover:to-slate-500 rounded-full flex items-center justify-center transition-all duration-300">
                <Upload className="w-8 h-8 text-slate-300 group-hover:text-white transition-colors duration-300" />
              </div>
            )}
          </div>

          {/* Text */}
          <div className="space-y-3 mb-8">
            <h3 className={`text-2xl font-semibold transition-all duration-300 ${
              isDragOver 
                ? 'text-white bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent' 
                : 'text-slate-200 group-hover:text-white'
            }`}>
              {isDragOver ? 'Drop files to scan' : 'Drag & drop files here'}
            </h3>
            <p className={`text-lg transition-colors duration-300 ${
              isDragOver 
                ? 'text-cyan-200' 
                : 'text-slate-400 group-hover:text-slate-300'
            }`}>
              {isDragOver 
                ? 'Release to upload files for security scanning' 
                : 'Upload files to check for malware and security threats'
              }
            </p>
          </div>

          {/* Browse Button */}
          {!isDragOver && (
            <Button 
              className="bg-gradient-to-r from-cyan-600 via-purple-600 to-green-600 hover:from-cyan-500 hover:via-purple-500 hover:to-green-500 text-white border-0 px-8 py-4 text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30 rounded-xl font-medium"
              size="lg"
            >
              <FileText className="w-5 h-5 mr-3" />
              Browse Files
            </Button>
          )}

          {/* Supported formats */}
          <div className="mt-8 text-sm text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-800/30 to-slate-700/30 rounded-full border border-slate-600/20 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-cyan-400" />
              Supports all file types • Max 100MB per file
            </div>
          </div>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
          accept="*/*"
        />
      </div>
    </div>
  );
}