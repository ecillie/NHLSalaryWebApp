import { createContext, useContext, useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';

interface AgeContextType {
  currentAge: number;
  incrementAge: () => void;
  decrementAge: () => void;
  setAge: (age: number) => void;
}

const AgeContext = createContext<AgeContextType | undefined>(undefined);

export const AgeProvider = ({ children }: PropsWithChildren) => {
  const [currentAge, setCurrentAge] = useState<number>(() => {
    // Try to get the age from localStorage, default to 18 if not found
    const savedAge = localStorage.getItem('currentAge');
    return savedAge ? parseInt(savedAge, 10) : 18;
  });

  useEffect(() => {
    // Save age to localStorage whenever it changes
    localStorage.setItem('currentAge', currentAge.toString());
  }, [currentAge]);

  const incrementAge = () => {
    setCurrentAge(prev => prev + 1);
  };

  const decrementAge = () => {
    setCurrentAge(prev => Math.max(18, prev - 1)); // Don't go below 18
  };

  const setAge = (age: number) => {
    setCurrentAge(Math.max(18, age)); // Don't allow age below 18
  };

  return (
    <AgeContext.Provider value={{ currentAge, incrementAge, decrementAge, setAge }}>
      {children}
    </AgeContext.Provider>
  );
};

export const useAge = () => {
  const context = useContext(AgeContext);
  if (context === undefined) {
    throw new Error('useAge must be used within an AgeProvider');
  }
  return context;
}; 