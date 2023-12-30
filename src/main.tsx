import React from 'react'
import ReactDOM from 'react-dom/client'
import { PRISMANE_COLORS, PrismaneProvider } from '@prismane/core'
import '@fontsource/poppins/100.css'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/900.css'
import App from './App.tsx'
import './index.css'

const theme = {
  mode: 'light',
  colors: {
    primary: { ...PRISMANE_COLORS.orange },
    base: { ...PRISMANE_COLORS.slate }
  },
  spacing: '5px'
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrismaneProvider theme={theme}>
      <App />
    </PrismaneProvider>
  </React.StrictMode>
)
