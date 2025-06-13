'use client';

import { HeroUIProvider } from '@heroui/react';
import { ToastProvider } from '@heroui/toast';
import React from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ToastProvider
        placement={'top-right'}
        maxVisibleToasts={3}
        toastOffset={50}
        toastProps={{
          shouldShowTimeoutProgress: true,
          variant: 'flat',
          timeout: 3000,
          classNames: {
            closeButton:
              'opacity-100 absolute right-4 top-1/2 -translate-y-1/2',
          },
          closeIcon: (
            <svg
              fill='none'
              height='32'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              width='32'
            >
              <path d='M18 6 6 18' />
              <path d='m6 6 12 12' />
            </svg>
          ),
        }}
      />
      {children}
    </HeroUIProvider>
  );
}
