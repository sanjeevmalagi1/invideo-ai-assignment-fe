import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { PrimeReactProvider } from 'primereact/api';

import App from './App.tsx'

import "primereact/resources/themes/bootstrap4-light-purple/theme.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
)
