import React from 'react';
import { createRoot } from 'react-dom/client';
import WebApp from '@twa-dev/sdk';
import App from './App';
import './styles/global.css';

// Initialize Telegram WebApp
WebApp.ready();

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 