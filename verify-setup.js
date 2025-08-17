#!/usr/bin/env node

// Varenizer Setup Verification Script
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execAsync = promisify(exec);

console.log('🔍 Varenizer Setup Verification');
console.log('================================\n');

const checks = [];

// Check Node.js version
async function checkNodejs() {
    try {
        const { stdout } = await execAsync('node --version');
        const version = stdout.trim();
        const majorVersion = parseInt(version.slice(1).split('.')[0]);
        
        if (majorVersion >= 18) {
            checks.push({ name: 'Node.js Version', status: 'pass', details: version });
        } else {
            checks.push({ name: 'Node.js Version', status: 'warn', details: `${version} (recommend 18+)` });
        }
    } catch (error) {
        checks.push({ name: 'Node.js', status: 'fail', details: 'Not installed' });
    }
}

// Check npm
async function checkNpm() {
    try {
        const { stdout } = await execAsync('npm --version');
        checks.push({ name: 'npm', status: 'pass', details: stdout.trim() });
    } catch (error) {
        checks.push({ name: 'npm', status: 'fail', details: 'Not available' });
    }
}

// Check if dependencies are installed
function checkDependencies() {
    const nodeModulesPath = './node_modules';
    if (fs.existsSync(nodeModulesPath)) {
        const packageCount = fs.readdirSync(nodeModulesPath).length;
        checks.push({ name: 'Dependencies', status: 'pass', details: `${packageCount} packages installed` });
    } else {
        checks.push({ name: 'Dependencies', status: 'warn', details: 'Run npm install' });
    }
}

// Check essential files
function checkFiles() {
    const essentialFiles = [
        'package.json',
        'vite.config.ts',
        'App.tsx',
        'index.html',
        'postcss.config.js',
        'tailwind.config.js'
    ];

    const missing = [];
    const present = [];

    essentialFiles.forEach(file => {
        if (fs.existsSync(file)) {
            present.push(file);
        } else {
            missing.push(file);
        }
    });

    if (missing.length === 0) {
        checks.push({ name: 'Essential Files', status: 'pass', details: `All ${present.length} files present` });
    } else {
        checks.push({ name: 'Essential Files', status: 'fail', details: `Missing: ${missing.join(', ')}` });
    }
}

// Check TypeScript compilation
async function checkTypeScript() {
    try {
        await execAsync('npx tsc --noEmit --skipLibCheck');
        checks.push({ name: 'TypeScript', status: 'pass', details: 'No compilation errors' });
    } catch (error) {
        const errorLines = error.stdout ? error.stdout.split('\n').length - 1 : 0;
        checks.push({ name: 'TypeScript', status: 'warn', details: `${errorLines} compilation issues` });
    }
}

// Check if port 3000 is available
async function checkPort() {
    try {
        const { stdout } = await execAsync('netstat -an | grep :3000 || true', { shell: true });
        if (stdout.trim()) {
            checks.push({ name: 'Port 3000', status: 'warn', details: 'In use (Vite will use another port)' });
        } else {
            checks.push({ name: 'Port 3000', status: 'pass', details: 'Available' });
        }
    } catch (error) {
        checks.push({ name: 'Port 3000', status: 'pass', details: 'Check skipped' });
    }
}

// Run all checks
async function runAllChecks() {
    console.log('Running checks...\n');
    
    await checkNodejs();
    await checkNpm();
    checkDependencies();
    checkFiles();
    await checkTypeScript();
    await checkPort();

    // Display results
    console.log('Results:');
    console.log('--------');
    
    checks.forEach(check => {
        const icon = check.status === 'pass' ? '✅' : check.status === 'warn' ? '⚠️' : '❌';
        console.log(`${icon} ${check.name}: ${check.details}`);
    });

    // Summary
    const passed = checks.filter(c => c.status === 'pass').length;
    const warned = checks.filter(c => c.status === 'warn').length;
    const failed = checks.filter(c => c.status === 'fail').length;

    console.log('\nSummary:');
    console.log(`--------`);
    console.log(`✅ Passed: ${passed}`);
    console.log(`⚠️  Warnings: ${warned}`);
    console.log(`❌ Failed: ${failed}`);

    if (failed === 0) {
        console.log('\n🎉 Your Varenizer setup looks good!');
        console.log('Run: npm run dev');
    } else {
        console.log('\n🔧 Please fix the failed checks above.');
        console.log('See TROUBLESHOOTING.md for help.');
    }
}

runAllChecks().catch(console.error);