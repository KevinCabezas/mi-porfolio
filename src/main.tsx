import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/css/styles.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './service/theme.service.tsx'
import './config/i18n.js'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
