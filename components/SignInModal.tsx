import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { LogIn, Eye, EyeOff } from "lucide-react";
// Using a placeholder logo - replace with actual Varenizer logo
const varenizerLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Ccircle cx='64' cy='64' r='56' fill='%2306b6d4' opacity='0.2'/%3E%3Ccircle cx='64' cy='64' r='40' fill='%2322c55e' opacity='0.3'/%3E%3Ccircle cx='64' cy='64' r='24' fill='%23a855f7' opacity='0.4'/%3E%3Ctext x='64' y='74' text-anchor='middle' fill='%23ffffff' font-family='Arial, sans-serif' font-size='20' font-weight='bold'%3EV%3C/text%3E%3C/svg%3E";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: (email: string, password: string) => void;
  onSwitchToSignUp: () => void;
  isDarkMode: boolean;
}

export function SignInModal({ isOpen, onClose, onSignIn, onSwitchToSignUp, isDarkMode }: SignInModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    onSignIn(email, password);
    setLoading(false);
    
    // Reset form
    setEmail('');
    setPassword('');
  };

  const handleClose = () => {
    setEmail('');
    setPassword('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[450px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 shadow-2xl backdrop-blur-xl">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-green-500/5 rounded-lg"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent rounded-lg"></div>
        
        <div className="relative z-10">
          <DialogHeader>
            <div className="flex flex-col items-center mb-6">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full blur-xl opacity-40 scale-150"></div>
                <img 
                  src={varenizerLogo} 
                  alt="Varenizer" 
                  className="w-20 h-20 relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
            <DialogTitle className="flex items-center justify-center gap-3 text-slate-100 text-xl">
              <LogIn className="w-6 h-6 text-cyan-400" />
              Sign In to Varenizer
            </DialogTitle>
            <DialogDescription className="text-slate-400 text-center text-base">
              Access your account to save scan results and preferences
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-slate-200 font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 border-slate-600/50 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500/70 focus:ring-cyan-500/20 transition-all duration-200 h-12 text-base backdrop-blur-sm"
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="password" className="text-slate-200 font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 border-slate-600/50 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500/70 focus:ring-cyan-500/20 transition-all duration-200 h-12 text-base pr-12 backdrop-blur-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 pt-6">
              <Button
                type="submit"
                disabled={loading || !email || !password}
                className="w-full h-12 bg-gradient-to-r from-cyan-600 via-purple-600 to-green-600 hover:from-cyan-500 hover:via-purple-500 hover:to-green-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none text-base font-medium rounded-xl"
              >
                {loading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Signing In...
                  </div>
                ) : (
                  <>
                    <LogIn className="w-5 h-5 mr-3" />
                    Sign In
                  </>
                )}
              </Button>
              
              <div className="text-center text-slate-400">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={onSwitchToSignUp}
                  className="text-cyan-400 hover:text-cyan-300 underline transition-colors font-medium"
                >
                  Sign up here
                </button>
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}