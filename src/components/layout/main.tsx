'use client';

import axiosClient from '@/api/axios-client';
import { routerDict } from '@/common/constants';
import { LayoutProps } from '@/models';
import { usePathname } from 'next/navigation';
import { SWRConfig } from 'swr';
import Auth from '../common/auth';

export function MainLayout({ children }: LayoutProps) {
  const pathname = usePathname();

  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClient.get(url),
        shouldRetryOnError: false,
      }}
    >
      {pathname === routerDict.login ? children : <Auth>{children}</Auth>}
    </SWRConfig>
  );
}
