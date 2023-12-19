
import React, { createContext, useContext, useState } from 'react';

const FeatureComingSoonContext = createContext();

export const useFeatureComingSoonContext = () => {
  const context = useContext(FeatureComingSoonContext);
  if (!context) {
    throw new Error('useFeatureComingSoonContext must be used within a FeatureComingSoonProvider');
  }
  return context;
};

export const FeatureComingSoonProvider = ({ children }) => {
  const [isComingSoon, setComingSoon] = useState(true);

  const showFeatureComingSoon = () => {
    setComingSoon(true);
  };

  const hideFeatureComingSoon = () => {
    setComingSoon(false);
  };

  const value = {
    isComingSoon,
    showFeatureComingSoon,
    hideFeatureComingSoon,
  };

  return (
    <FeatureComingSoonContext.Provider value={value}>
      {children}
    </FeatureComingSoonContext.Provider>
  );
};
