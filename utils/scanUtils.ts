import { MOCK_ANTIVIRUS_ENGINES, MOCK_THREAT_NAMES, MOCK_URL_ENGINES, MOCK_URL_THREATS, SCAN_CONFIG } from './constants';

export interface ScanResult {
  name: string;
  size: number;
  status: 'clean' | 'threat' | 'suspicious';
  threats: string[];
  hash: string;
  antivirusResults: AntivirusResult[];
  detectionRatio: string;
}

export interface AntivirusResult {
  engine: string;
  detected: boolean;
  result: string;
}

export interface CompleteScanResult {
  totalFiles: number;
  cleanFiles: number;
  threatsFound: number;
  suspiciousFiles: number;
  scanDuration: string;
  scanType: 'quick' | 'full' | null;
  files: ScanResult[];
}

export interface UrlScanResult {
  url: string;
  totalEngines: number;
  detections: number;
  status: 'clean' | 'suspicious' | 'malicious';
  scanDate: string;
  engines: AntivirusResult[];
}

export const generateScanResults = async (files: File[], scanType: 'quick' | 'full' | null): Promise<CompleteScanResult> => {
  const filesWithResults = await Promise.all(files.map(async (file) => {
    // Generate random hash
    const hash = `sha256:${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
    
    const antivirusResults = MOCK_ANTIVIRUS_ENGINES.map(engine => {
      const isInfected = Math.random() > 0.85;
      const isSuspicious = !isInfected && Math.random() > 0.95;
      
      if (isInfected) {
        return {
          engine,
          detected: true,
          result: MOCK_THREAT_NAMES[Math.floor(Math.random() * MOCK_THREAT_NAMES.length)]
        };
      } else if (isSuspicious) {
        return {
          engine,
          detected: true,
          result: 'Potentially Unwanted Program'
        };
      } else {
        return {
          engine,
          detected: false,
          result: 'Clean'
        };
      }
    });

    const detectionCount = antivirusResults.filter(r => r.detected).length;
    const threatsDetected = antivirusResults.filter(r => r.detected && !r.result.includes('Potentially')).length;
    const pupsDetected = antivirusResults.filter(r => r.detected && r.result.includes('Potentially')).length;

    let status: 'clean' | 'threat' | 'suspicious';
    let threats: string[] = [];

    if (threatsDetected >= 3) {
      status = 'threat';
      threats = [...new Set(antivirusResults.filter(r => r.detected && !r.result.includes('Potentially')).map(r => r.result))];
    } else if (detectionCount >= 2 || pupsDetected >= 2) {
      status = 'suspicious';
      threats = pupsDetected > 0 ? ['Potentially Unwanted Program'] : [];
    } else {
      status = 'clean';
    }

    return {
      name: file.name,
      size: file.size,
      status,
      threats,
      hash,
      antivirusResults,
      detectionRatio: `${detectionCount}/${antivirusResults.length}`
    };
  }));

  const threatsFound = filesWithResults.filter(f => f.status === 'threat').length;
  const suspiciousFiles = filesWithResults.filter(f => f.status === 'suspicious').length;
  const cleanFiles = filesWithResults.filter(f => f.status === 'clean').length;

  return {
    totalFiles: files.length,
    cleanFiles,
    threatsFound,
    suspiciousFiles,
    scanDuration: scanType === 'quick' ? '2m 34s' : '8m 42s',
    scanType: scanType,
    files: filesWithResults
  };
};

export const scanUrlWithVirusTotal = async (url: string): Promise<UrlScanResult> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, SCAN_CONFIG.URL_SCAN_DELAY));
  
  const results = MOCK_URL_ENGINES.map(engine => ({
    engine,
    detected: Math.random() > 0.8,
    result: Math.random() > 0.8 ? MOCK_URL_THREATS[Math.floor(Math.random() * MOCK_URL_THREATS.length)] : 'Clean'
  }));

  const detectionCount = results.filter(r => r.detected).length;
  
  return {
    url,
    totalEngines: MOCK_URL_ENGINES.length,
    detections: detectionCount,
    status: detectionCount >= 2 ? 'malicious' : detectionCount >= 1 ? 'suspicious' : 'clean',
    scanDate: new Date().toISOString(),
    engines: results
  };
};

export const extractUsername = (email: string): string => {
  return email.split('@')[0];
};

export const showScanCompletionNotification = (results: CompleteScanResult): void => {
  if (Notification.permission === 'granted') {
    new Notification("Verinizer Scan Complete", {
      body: `Scanned ${results.totalFiles} files. Found ${results.threatsFound} threats.`,
      icon: "/favicon-32x32.png"
    });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission();
  }
};