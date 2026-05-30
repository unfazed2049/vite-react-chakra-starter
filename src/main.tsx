import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { Provider } from '@/lib/components/ui/provider';
import { Layout } from '@/lib/layout';
import Page404 from '@/lib/pages/404';
import Home from '@/lib/pages/home';
import { queryClient } from '@/lib/services/constants';

// fonts
import '@fontsource-variable/plus-jakarta-sans';

// Create a new router instance
const router = createBrowserRouter([
  {
    // Root layout route
    Component: () => (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  // 404 catch-all
  {
    path: '*',
    Component: Page404,
  },
]);

// Render the app
const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </StrictMode>
  );
}
