import { useState, useEffect } from 'react';

interface UsageData {
  fileScans: number;
  urlScans: number;
  resetDate: string;
}

interface UsageLimits {
  fileScans: number;
  urlScans: number;
}

const FREE_PLAN_LIMITS: UsageLimits = {
  fileScans: 500,
  urlScans: 100,
};

// Get the first day of next month
const getNextResetDate = (): string => {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return nextMonth.toISOString();
};

// Get the first day of current month
const getCurrentMonthStart = (): string => {
  const now = new Date();
  const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  return currentMonthStart.toISOString();
};

export function useUsageLimits() {
  const [usageData, setUsageData] = useState<UsageData>({
    fileScans: 0,
    urlScans: 0,
    resetDate: getNextResetDate(),
  });

  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [limitType, setLimitType] = useState<'file' | 'url'>('file');

  // Load usage data from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('verinizer-usage');
    if (stored) {
      try {
        const parsedData = JSON.parse(stored);
        
        // Check if we need to reset (new month started)
        const resetDate = new Date(parsedData.resetDate);
        const now = new Date();
        
        if (now >= resetDate) {
          // Reset usage for new month
          const newUsageData = {
            fileScans: 0,
            urlScans: 0,
            resetDate: getNextResetDate(),
          };
          setUsageData(newUsageData);
          localStorage.setItem('verinizer-usage', JSON.stringify(newUsageData));
        } else {
          setUsageData(parsedData);
        }
      } catch (error) {
        console.error('Failed to parse usage data:', error);
        // Initialize with default values
        const defaultData = {
          fileScans: 0,
          urlScans: 0,
          resetDate: getNextResetDate(),
        };
        setUsageData(defaultData);
        localStorage.setItem('verinizer-usage', JSON.stringify(defaultData));
      }
    } else {
      // First time - initialize usage data
      const initialData = {
        fileScans: 0,
        urlScans: 0,
        resetDate: getNextResetDate(),
      };
      setUsageData(initialData);
      localStorage.setItem('verinizer-usage', JSON.stringify(initialData));
    }
  }, []);

  // Save usage data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('verinizer-usage', JSON.stringify(usageData));
  }, [usageData]);

  const checkFileLimit = (): boolean => {
    return usageData.fileScans >= FREE_PLAN_LIMITS.fileScans;
  };

  const checkUrlLimit = (): boolean => {
    return usageData.urlScans >= FREE_PLAN_LIMITS.urlScans;
  };

  const incrementFileScans = (count: number = 1): boolean => {
    if (checkFileLimit()) {
      setLimitType('file');
      setShowUpgradeModal(true);
      return false; // Scan blocked
    }

    const newCount = usageData.fileScans + count;
    const newUsageData = {
      ...usageData,
      fileScans: newCount,
    };
    
    setUsageData(newUsageData);
    
    // Check if this increment put us at or over the limit
    if (newCount >= FREE_PLAN_LIMITS.fileScans) {
      setLimitType('file');
      setShowUpgradeModal(true);
    }
    
    return true; // Scan allowed
  };

  const incrementUrlScans = (count: number = 1): boolean => {
    if (checkUrlLimit()) {
      setLimitType('url');
      setShowUpgradeModal(true);
      return false; // Scan blocked
    }

    const newCount = usageData.urlScans + count;
    const newUsageData = {
      ...usageData,
      urlScans: newCount,
    };
    
    setUsageData(newUsageData);
    
    // Check if this increment put us at or over the limit
    if (newCount >= FREE_PLAN_LIMITS.urlScans) {
      setLimitType('url');
      setShowUpgradeModal(true);
    }
    
    return true; // Scan allowed
  };

  const getRemainingScans = (): { fileScans: number; urlScans: number } => {
    return {
      fileScans: Math.max(0, FREE_PLAN_LIMITS.fileScans - usageData.fileScans),
      urlScans: Math.max(0, FREE_PLAN_LIMITS.urlScans - usageData.urlScans),
    };
  };

  const getUsagePercentage = (): { fileScans: number; urlScans: number } => {
    return {
      fileScans: (usageData.fileScans / FREE_PLAN_LIMITS.fileScans) * 100,
      urlScans: (usageData.urlScans / FREE_PLAN_LIMITS.urlScans) * 100,
    };
  };

  const getDaysUntilReset = (): number => {
    const resetDate = new Date(usageData.resetDate);
    const now = new Date();
    const diffTime = resetDate.getTime() - now.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const closeUpgradeModal = () => {
    setShowUpgradeModal(false);
  };

  return {
    usageData,
    limits: FREE_PLAN_LIMITS,
    checkFileLimit,
    checkUrlLimit,
    incrementFileScans,
    incrementUrlScans,
    getRemainingScans,
    getUsagePercentage,
    getDaysUntilReset,
    showUpgradeModal,
    limitType,
    closeUpgradeModal,
  };
}