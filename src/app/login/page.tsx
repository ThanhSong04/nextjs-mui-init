'use client';
import axiosClient from '@/api/axios-client';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/use-auth';

export default function LoginPage() {
  const router = useRouter();
  const { login, logout } = useAuth({
    revalidateOnMount: false,
  });

  const handleLogin = async () => {
    try {
      await login({
        username: 'pensive-lewin',
        password: '5msw4$#scXW0',
      });
      router.push('/');
    } catch (err) {
      console.log('err:', err);
    }
  };

  const handleGetResult = async () => {
    await axiosClient.get('inference/result');
  };

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      console.log('error:', error);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleGetResult}>Get result</button>
      <button onClick={() => router.push('/')}>home</button>
    </div>
  );
}
