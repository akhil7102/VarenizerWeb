@echo off
echo ================================
echo    Varenizer Virus Scanner
echo ================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo.
    echo Please download and install Node.js from:
    echo https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo Node.js detected. Starting Varenizer...
echo.

REM Check if dependencies are installed
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    if errorlevel 1 (
        echo ERROR: Failed to install dependencies!
        echo Please check your internet connection and try again.
        pause
        exit /b 1
    )
    echo.
)

echo Starting development server...
echo.
echo Varenizer will open in your browser automatically.
echo If it doesn't open, go to: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server when you're done.
echo.

npm run dev
if errorlevel 1 (
    echo.
    echo ERROR: Failed to start the development server!
    echo Please check the error messages above.
    echo.
)

pause