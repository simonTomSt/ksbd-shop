'use client';

import { Customer } from '@/lib/shop-api/graphql/schema';
import React, { createContext, ReactNode, useContext } from 'react';

interface AuthContextType {
  currentCustomer: Customer | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
  currentCustomer?: Customer | null;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children, currentCustomer = null }) => {
  return <AuthContext.Provider value={{ currentCustomer }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
