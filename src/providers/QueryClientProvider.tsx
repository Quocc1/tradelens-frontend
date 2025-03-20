'use client';

import {
  QueryClientProvider as Provider,
  QueryClient,
} from '@tanstack/react-query';
import React, { useState } from 'react';

export const QueryClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [queryClient] = useState(() => new QueryClient());
  return <Provider client={queryClient}>{children}</Provider>;
};
