import { authApi } from '@/api/auth-api';
import { LoginPayload } from '@/models/auth';
import useSWR, { SWRConfiguration } from 'swr';

export function useAuth(options?: Partial<SWRConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('inference/result', {
    dedupingInterval: 60 * 60 * 1000, // 1hr
    revalidateOnFocus: false,
    ...options,
  });

  const isFirstLoading = profile === undefined && error === undefined;

  async function login(payload: LoginPayload) {
    await authApi.login(payload);
    await mutate();
  }

  async function logout() {
    await authApi.logout();
    mutate(null, false);
  }

  return {
    profile,
    error,
    isFirstLoading,
    login,
    logout,
  };
}
