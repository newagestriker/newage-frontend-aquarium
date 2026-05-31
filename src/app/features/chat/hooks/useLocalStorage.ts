import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook to sync a value with localStorage.
 *
 * @param key - The localStorage key to read/write.
 * @param initialValue - The fallback value when nothing is stored yet.
 */
export default function useLocalStorage<T>(key: string, initialValue: T) {
  // Read from localStorage on mount (server-safe)
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // Write to localStorage whenever the value changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch {
      console.error(`Failed to save "${key}" to localStorage:`, e);
    }
  }, [key, storedValue]);

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    setStoredValue((prev) =>
      typeof value === 'function'
        ? (value as (val: T) => T)(prev)
        : value
    );
  }, []);

  return [storedValue, setValue] as const;
}
