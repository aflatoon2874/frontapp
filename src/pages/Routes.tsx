import { QueryClient } from '@tanstack/react-query'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import HomePage from './HomePage'
import ErrorPage from './ErrorPage'
import { action as loginAction } from '../lib/actions/login'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      structuralSharing: false,
      retry: 2
    }
  }
})

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'login',
        element: <HomePage />,
        action: loginAction(queryClient)
      }
    ]
  }
])
