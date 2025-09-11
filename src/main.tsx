import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MakeupShopApp } from './MakeupShopApp';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MakeupShopApp />
  </StrictMode>,
)
