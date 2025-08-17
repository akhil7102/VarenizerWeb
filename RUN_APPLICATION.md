# How to Run Varenizer Web Application

## The Problem
You're getting CORS errors because you're trying to open `index.html` directly in Chrome instead of running the application through a development server. This is a React/Vite application that requires a proper development environment.

## Solution: Run the Development Server

### Prerequisites
Make sure you have Node.js installed on your system:
- Download from: https://nodejs.org/
- Recommended version: Node.js 18 or higher

### Step 1: Install Dependencies
Open a terminal/command prompt in your project folder and run:
```bash
npm install
```

### Step 2: Start the Development Server
After dependencies are installed, run:
```bash
npm run dev
```

### Step 3: Open in Browser
The application will automatically open in your browser at:
```
http://localhost:3000
```

If it doesn't open automatically, manually navigate to `http://localhost:3000` in your browser.

## Alternative Commands

### Build for Production
To create a production build:
```bash
npm run build
```

### Preview Production Build
To preview the production build locally:
```bash
npm run preview
```

## Troubleshooting

### Port 3000 Already in Use
If port 3000 is busy, Vite will automatically find the next available port (3001, 3002, etc.).

### Clear Cache
If you encounter issues, try clearing the cache:
```bash
rm -rf node_modules
npm install
```

### Missing Files
Some favicon and manifest files are referenced but missing. These won't prevent the app from running but may show 404 errors in console. The app will work perfectly without them.

## Important Notes
- **Never open `index.html` directly** - Always use `npm run dev`
- The application requires a development server to handle module imports and asset loading
- All modern React applications work this way - they need to be "served" not "opened"

## Quick Start Summary
1. `npm install`
2. `npm run dev`
3. Open http://localhost:3000
4. Your Varenizer application is now running! 🎉