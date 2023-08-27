import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppThemeProvider } from 'providers/index';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AppThemeProvider>
  </React.StrictMode>
);
