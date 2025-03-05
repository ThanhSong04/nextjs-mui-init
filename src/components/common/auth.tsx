'use client';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

export interface AuthProps {
  children: ReactNode;
}

export default function Auth({ children }: AuthProps) {
  const router = useRouter();
  const { profile, isFirstLoading } = useAuth();

  useEffect(() => {
    // if (!isFirstLoading && !profile) router.push('/login');
  }, [router, profile, isFirstLoading]);

  // if (!profile) return <>Loading ...</>;
  return <>{children}</>;
}
