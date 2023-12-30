import { QueryClientProvider } from '@tanstack/react-query'
import { enableReactComponents } from '@legendapp/state/config/enableReactComponents'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { queryClient, router } from './pages/Routes'

enableReactComponents()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
