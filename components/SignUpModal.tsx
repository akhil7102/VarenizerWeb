import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { UserPlus, Eye, EyeOff } from "lucide-react";
// Using a placeholder logo - replace with actual Varenizer logo
const varenizerLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Ccircle cx='64' cy='64' r='56' fill='%2306b6d4' opacity='0.2'/%3E%3Ccircle cx='64' cy='64' r='40' fill='%2322c55e' opacity='0.3'/%3E%3Ccircle cx='64' cy='64' r='24' fill='%23a855f7' opacity='0.4'/%3E%3Ctext x='64' y='74' text-anchor='middle' fill='%23ffffff' font-family='Arial, sans-serif' font-size='20' font-weight='bold'%3EV%3C/text%3E%3C/svg%3E";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignUp: (email: string, password: string, name: string) => void;
  onSwitchToSignIn: () => void;
  isDarkMode: boolean;
}

export function SignUpModal({ isOpen, onClose, onSignUp, onSwitchToSignIn, isDarkMode }: SignUpModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }
    
    if (!email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    onSignUp(email, password, name);
    setLoading(false);
    
    // Reset form
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
  };

  const handleClose = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[450px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 shadow-2xl backdrop-blur-xl max-h-[90vh] overflow-y-auto">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-purple-500/5 to-cyan-500/5 rounded-lg"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent rounded-lg"></div>
        
        <div className="relative z-10">
          <DialogHeader>
            <div className="flex flex-col items-center mb-6">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-xl opacity-40 scale-150"></div>
                <img 
                  src={varenizerLogo} 
                  alt="Varenizer" 
                  className="w-20 h-20 relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
            <DialogTitle className="flex items-center justify-center gap-3 text-slate-100 text-xl">
              <UserPlus className="w-6 h-6 text-green-400" />
              Sign Up for Varenizer
            </DialogTitle>
            <DialogDescription className="text-slate-400 text-center text-base">
              Create your account to access advanced security features
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-5 mt-8">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-200 font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                className={`bg-gradient-to-r from-slate-800/60 to-slate-700/60 border-slate-600/50 text-slate-100 placeholder:text-slate-500 focus:border-green-500/70 focus:ring-green-500/20 transition-all duration-200 h-11 text-base backdrop-blur-sm ${errors.name ? 'border-red-500/70' : ''}`}
              />
              {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
            </div>
            
            <div className="space-y-2">
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
                className={`bg-gradient-to-r from-slate-800/60 to-slate-700/60 border-slate-600/50 text-slate-100 placeholder:text-slate-500 focus:border-green-500/70 focus:ring-green-500/20 transition-all duration-200 h-11 text-base backdrop-blur-sm ${errors.email ? 'border-red-500/70' : ''}`}
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-200 font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  required
                  className={`bg-gradient-to-r from-slate-800/60 to-slate-700/60 border-slate-600/50 text-slate-100 placeholder:text-slate-500 focus:border-green-500/70 focus:ring-green-500/20 transition-all duration-200 h-11 text-base pr-12 backdrop-blur-sm ${errors.password ? 'border-red-500/70' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-slate-200 font-medium">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                  className={`bg-gradient-to-r from-slate-800/60 to-slate-700/60 border-slate-600/50 text-slate-100 placeholder:text-slate-500 focus:border-green-500/70 focus:ring-green-500/20 transition-all duration-200 h-11 text-base pr-12 backdrop-blur-sm ${errors.confirmPassword ? 'border-red-500/70' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-400 text-sm">{errors.confirmPassword}</p>}
            </div>
            
            <div className="flex flex-col gap-4 pt-6">
              <Button
                type="submit"
                disabled={loading || !name || !email || !password || !confirmPassword}
                className="w-full h-12 bg-gradient-to-r from-green-600 via-emerald-600 to-cyan-600 hover:from-green-500 hover:via-emerald-500 hover:to-cyan-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none text-base font-medium rounded-xl"
              >
                {loading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Creating Account...
                  </div>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5 mr-3" />
                    Sign Up
                  </>
                )}
              </Button>
              
              <div className="text-center text-slate-400">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={onSwitchToSignIn}
                  className="text-green-400 hover:text-green-300 underline transition-colors font-medium"
                >
                  Sign in here
                </button>
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}