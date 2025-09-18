import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const MakeupShopApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <RouterProvider router={appRouter} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
