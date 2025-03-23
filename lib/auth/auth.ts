'use server';

import { AxiosError } from 'axios';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { api } from '../api';
import { Customer } from '../prestaShop/types';

import { clearAuthToken, getAuthToken, setAuthToken } from './cookies';
import { loginSchema } from './schema';

export const login = async (email: string, password: string) => {
  const validationResult = loginSchema.safeParse({ email, password });

  if (!validationResult.success) {
    throw new AxiosError(validationResult.error.errors[0].message, '400');
  }

  const customers = await api.customers.getAll({
    filter: { email: [email] },
  });

  const user: Customer | undefined =
    customers?.length > 0 ? customers[0] : undefined;

  if (user) {
    const isValid = await bcrypt.compare(password, user.passwd);

    if (isValid) {
      // Generate JWT token
      const token = jwt.sign({ id: user.id }, 'your_secret_key', {
        expiresIn: '1h',
      });

      await setAuthToken(token);

      return user;
    }
  }
  // If no user found or password is invalid
  throw new AxiosError('Bad Credentials', '400');
};

export const register = async (email: string, password: string) => {
  if (email.length === 0 || password.length === 0) {
    throw new AxiosError('Bad Request', '400');
  }
};

export const logout = async () => {
  await clearAuthToken();
};

export const getCurrentUser = async () => {
  const token = await getAuthToken();

  if (!token) {
    return null;
  }

  const decoded = jwt.verify(token, 'your_secret_key');

  return decoded;
};
