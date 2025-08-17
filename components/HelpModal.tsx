import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { HelpCircle, MessageCircle, Instagram, Mail, ExternalLink } from "lucide-react";

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export function HelpModal({ isOpen, onClose, isDarkMode }: HelpModalProps) {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Discord Community",
      description: "Join our Discord server for real-time support and community discussions",
      link: "https://discord.gg/eDBmRg7Vns",
      color: "text-indigo-400",
      bgColor: "from-indigo-600/20 to-indigo-500/20",
      hoverColor: "hover:from-indigo-600/30 hover:to-indigo-500/30",
      borderColor: "border-indigo-500/30"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Follow us for updates, tips, and security news",
      link: "https://www.instagram.com/babxstudios",
      color: "text-pink-400",
      bgColor: "from-pink-600/20 to-pink-500/20",
      hoverColor: "hover:from-pink-600/30 hover:to-pink-500/30",
      borderColor: "border-pink-500/30"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email for technical support and inquiries",
      link: "mailto:babxstudios@gmail.com",
      color: "text-green-400",
      bgColor: "from-green-600/20 to-green-500/20",
      hoverColor: "hover:from-green-600/30 hover:to-green-500/30",
      borderColor: "border-green-500/30"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 shadow-2xl backdrop-blur-xl">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-lg"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent rounded-lg"></div>
        
        <div className="relative z-10">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center gap-3 text-slate-100 text-xl">
              <HelpCircle className="w-6 h-6 text-blue-400" />
              Help & Support
            </DialogTitle>
            <DialogDescription className="text-slate-400 text-center text-base">
              Get help with Verinizer or connect with our community
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-8">
            {supportOptions.map((option, index) => (
              <a
                key={index}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  block p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group
                  bg-gradient-to-r ${option.bgColor} ${option.hoverColor}
                  border-slate-700/50 ${option.borderColor} hover:${option.borderColor}
                  backdrop-blur-sm
                `}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${option.bgColor} group-hover:scale-110 transition-transform duration-300 border ${option.borderColor}`}>
                    <option.icon className={`w-7 h-7 ${option.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-200 text-lg">
                        {option.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:scale-110 group-hover:text-slate-300 transition-all duration-300" />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-slate-800/40 via-slate-700/40 to-slate-800/40 border border-slate-600/30 backdrop-blur-sm">
            <h4 className="font-semibold mb-3 text-slate-200 text-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              Quick Tips
            </h4>
            <ul className="text-slate-400 space-y-2">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                Use Quick Scan for fast malware detection
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                Full Scan provides comprehensive system analysis
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                Drag & drop files for instant security checking
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                Check scan results for detailed threat information
              </li>
            </ul>
          </div>
          
          <div className="flex justify-end pt-6">
            <Button
              onClick={onClose}
              className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-slate-200 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl px-8 py-3 rounded-xl font-medium"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}