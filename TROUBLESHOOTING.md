# 🔧 Varenizer Troubleshooting Guide

## Fixed Issues (2024-12-19)

The following issues have been resolved:

### ✅ PostCSS Config Error Fixed
**Error**: "module is not defined in ES module scope"
**Fix**: Updated `postcss.config.js` and `tailwind.config.js` to use ES module syntax

### ✅ Missing Figma Asset Fixed
**Error**: "Failed to resolve import figma:asset/..."
**Fix**: Replaced with Unsplash security logo image

### ✅ Blank White Page Fixed
**Fix**: Resolved import and configuration errors

## 🚀 How to Run Varenizer Now

### Quick Start (Recommended)
```bash
npm install
npm run dev
```

### Using Scripts
- **Windows**: Double-click `run-varenizer.bat`
- **Mac/Linux**: Run `./run-varenizer.sh`
- **PowerShell**: Run `./run-varenizer.ps1`

### Standalone Version
- Open `standalone.html` directly in any browser (no setup required)

## 🐛 Common Issues & Solutions

### 1. "npm not recognized" or "command not found"
**Problem**: Node.js is not installed
**Solution**: 
1. Download Node.js from https://nodejs.org/
2. Install and restart your terminal/command prompt
3. Verify with `node --version`

### 2. Port Already in Use
**Problem**: "Port 3000 is already in use"
**Solution**: 
- Vite automatically finds another port (3001, 3002, etc.)
- Or manually specify: `npm run dev -- --port 3001`

### 3. Permission Denied (Mac/Linux)
**Problem**: Can't run shell scripts
**Solution**: 
```bash
chmod +x run-varenizer.sh
./run-varenizer.sh
```

### 4. Module Resolution Errors
**Problem**: Import errors or module not found
**Solution**: 
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### 5. Build Errors
**Problem**: TypeScript or build errors
**Solution**: 
```bash
# Clean build
npm run build
# If errors persist
npx tsc --noEmit
```

### 6. Browser Doesn't Open Automatically
**Problem**: Development server starts but browser doesn't open
**Solution**: 
- Manually go to http://localhost:3000
- Or use: `npm run dev -- --open`

### 7. Styling Issues
**Problem**: CSS not loading or Tailwind classes not working
**Solution**: 
1. Check if `styles/globals.css` exists
2. Verify Tailwind config is correct
3. Clear browser cache (Ctrl+F5)

## 🔍 Advanced Debugging

### Check Your Setup
```bash
# Verify Node.js version (should be 18+)
node --version

# Verify npm version
npm --version

# Check if all dependencies are installed
npm list --depth=0

# Verify TypeScript compilation
npx tsc --noEmit
```

### Development Server Options
```bash
# Run with specific port
npm run dev -- --port 3001

# Run with host binding (access from other devices)
npm run dev -- --host 0.0.0.0

# Run with debug information
npm run dev -- --debug

# Clear Vite cache
npx vite --clearScreen false
```

### Environment Specific Issues

#### Windows
- Use PowerShell or Command Prompt as Administrator if needed
- Ensure Windows Defender isn't blocking Node.js

#### Mac
- May need to install Xcode Command Line Tools: `xcode-select --install`
- Use Terminal or iTerm2

#### Linux
- Ensure you have build-essential installed: `sudo apt-get install build-essential`
- Check if snap or flatpak Node.js needs additional permissions

## 📱 Browser Compatibility

**Supported Browsers:**
- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅

**Not Supported:**
- Internet Explorer ❌
- Chrome < 90 ❌

## 🚨 Emergency Recovery

If nothing works, try this complete reset:

```bash
# 1. Delete everything and start fresh
rm -rf node_modules package-lock.json dist .vite

# 2. Clear npm cache
npm cache clean --force

# 3. Reinstall everything
npm install

# 4. Try running again
npm run dev
```

## 📞 Getting Help

If you're still having issues:

1. **Check Console**: Open browser developer tools (F12) and look for error messages
2. **Check Terminal**: Look for error messages in the terminal where you ran npm run dev
3. **Use Standalone**: Try `standalone.html` as a fallback - it works without any setup
4. **System Info**: Note your OS, Node.js version, and browser version

## ✅ Success Indicators

You know Varenizer is working when:
- Terminal shows "VITE ready in XXXms"
- Browser opens to http://localhost:3000
- You see the Varenizer logo and interface
- No error messages in browser console
- File drag & drop works

---

**Last Updated**: 2024-12-19  
**Version**: Web Application (no Tauri dependencies)