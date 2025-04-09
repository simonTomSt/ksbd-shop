'use client';

import { Customer, isCustomer } from '@/lib/shop-api/graphql/schema';
import { useQuery } from '@tanstack/react-query';
import React, { createContext, ReactNode, useContext } from 'react';
import { initCurrentCustomerAction } from '../auth/api/initCurrentCustomerAction';

interface AuthContextType {
  currentCustomer: Customer | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
  token?: string | null;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children, token = null }) => {
  const { data } = useQuery({
    queryKey: ['getCurrentCustomer'],
    enabled: !!token,
    queryFn: initCurrentCustomerAction,
    retry: false,
  });
  const currentCustomer = data && isCustomer(data) ? data : null;

  return (
    <AuthContext.Provider
      value={{
        currentCustomer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
