import { LoginPayload } from '@/models/index';
import axiosClient from './axios-client';

const login = (payload: LoginPayload) => {
  return axiosClient.post('/login', payload);
};

const logout = () => {
  return axiosClient.post('/logout');
};

export const authApi = {
  login,
  logout,
};
