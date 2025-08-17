// VirusTotal API configuration
export const VIRUSTOTAL_API_KEY = 'your_virustotal_api_key_here'; // Replace with actual API key
export const VIRUSTOTAL_BASE_URL = 'https://www.virustotal.com/vtapi/v2';

// Mock antivirus engines for simulation
export const MOCK_ANTIVIRUS_ENGINES = [
  'Microsoft Defender', 'Kaspersky', 'Bitdefender', 'Norton', 'Avast', 
  'AVG', 'Trend Micro', 'F-Secure', 'ESET', 'McAfee', 'Sophos', 
  'ClamAV', 'Malwarebytes', 'Panda', 'Quick Heal', 'K7 AntiVirus',
  'Avira', 'DrWeb', 'Jiangmin', 'Antiy-AVL'
];

// Mock URL scanning engines
export const MOCK_URL_ENGINES = [
  'Microsoft', 'Kaspersky', 'Bitdefender', 'Norton', 
  'Avast', 'Sophos', 'ESET', 'McAfee'
];

// Threat names for simulation
export const MOCK_THREAT_NAMES = [
  'Trojan.Generic.KD', 'PUP.Optional.Bundle', 'Malware.Generic', 
  'Win32.Malware', 'Trojan.Downloader'
];

export const MOCK_URL_THREATS = [
  'Malicious site', 'Phishing', 'Malware distribution'
];

// Local storage keys
export const STORAGE_KEYS = {
  THEME: 'verinizer-theme',
  AUTH: 'verinizer-auth',
  EMAIL: 'verinizer-email',
  USERNAME: 'verinizer-username',
  SCAN_HISTORY: 'verinizer-scan-history'
} as const;

// Scan configuration
export const SCAN_CONFIG = {
  QUICK_SCAN_INCREMENT: 3,
  FULL_SCAN_INCREMENT: 1,
  PROGRESS_INTERVAL: 150,
  COMPLETION_DELAY: 1000,
  URL_SCAN_DELAY: 2000,
  HISTORY_LIMIT: 10
} as const;