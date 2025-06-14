import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import router
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ Wrap App with Router */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
