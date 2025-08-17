# Varenizer - Advanced File Security & Malware Detection

A modern web-based virus scanner application built with React, TypeScript, and Tailwind CSS.

## Features

- **File Upload & Drag-Drop**: Easy file selection with drag and drop interface
- **Scan Types**: Quick scan and full scan options
- **Real-time Progress**: Live scanning progress with visual feedback
- **Detailed Results**: Comprehensive scan results with antivirus engine comparisons
- **Dark/Light Theme**: Toggle between dark and light themes
- **User Authentication**: Sign in/up functionality with local storage
- **Responsive Design**: Works on desktop and mobile devices

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone or download the project
2. Delete any existing node_modules and package-lock.json:
   ```bash
   rm -rf node_modules package-lock.json
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

### Troubleshooting

If you encounter dependency conflicts:
1. Clear npm cache: `npm cache clean --force`
2. Delete node_modules: `rm -rf node_modules`
3. Delete package-lock.json: `rm package-lock.json`
4. Reinstall: `npm install`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Project Structure

```
├── src/
│   ├── main.tsx          # Application entry point
│   └── assets/           # Static assets
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   └── ...              # Feature components
├── styles/
│   └── globals.css      # Global styles and Tailwind configuration
├── App.tsx              # Main application component
└── index.html           # HTML template
```

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Icons

## Features in Detail

### File Scanning
- Upload files via button click or drag-and-drop
- Choose between Quick Scan (faster) or Full Scan (comprehensive)
- Real-time progress tracking with visual indicators
- Mock antivirus engine results simulation

### Scan Results
- Detailed file analysis with threat detection
- Multiple antivirus engine comparisons
- Interactive filtering by detection confidence
- Export functionality for scan reports

### User Interface
- Modern, professional design with neon accent colors
- Dark/Light theme switching with system preference detection
- Responsive layout for all device sizes
- Smooth animations and transitions

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Components

1. Create component files in the `components/` directory
2. Use TypeScript for type safety
3. Follow the existing design patterns and styling
4. Import and use in `App.tsx` or other components

## Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for demonstration purposes. All rights reserved.