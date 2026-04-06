"use client";

import { fetchRates } from "@/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

export const queryClient = new QueryClient();

export function QueryProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefetch = () =>
      queryClient.prefetchQuery({
        queryKey: ["rates"],
        queryFn: fetchRates,
      });

    if ("requestIdleCallback" in window) {
      requestIdleCallback(prefetch);
    } else {
      setTimeout(prefetch, 2000);
    }
  }, []);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
