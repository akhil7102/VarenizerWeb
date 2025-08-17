#!/bin/bash

echo "================================"
echo "    Varenizer Virus Scanner"
echo "================================"
echo

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo
    echo "Please download and install Node.js from:"
    echo "https://nodejs.org/"
    echo
    exit 1
fi

echo "Node.js detected. Starting Varenizer..."
echo

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    echo
fi

echo "Starting development server..."
echo
echo "Varenizer will open in your browser automatically."
echo "If it doesn't open, go to: http://localhost:3000"
echo
echo "Press Ctrl+C to stop the server when you're done."
echo

npm run dev