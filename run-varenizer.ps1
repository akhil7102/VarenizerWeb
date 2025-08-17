# Varenizer Launcher Script
Write-Host "================================" -ForegroundColor Cyan
Write-Host "    Varenizer Virus Scanner" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version 2>$null
    Write-Host "Node.js detected: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Node.js is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please download and install Node.js from:" -ForegroundColor Yellow
    Write-Host "https://nodejs.org/" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Starting Varenizer..." -ForegroundColor Green
Write-Host ""

# Check if dependencies are installed
if (!(Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

Write-Host "Starting development server..." -ForegroundColor Green
Write-Host ""
Write-Host "Varenizer will open in your browser automatically." -ForegroundColor Cyan
Write-Host "If it doesn't open, go to: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server when you're done." -ForegroundColor Yellow
Write-Host ""

npm run dev