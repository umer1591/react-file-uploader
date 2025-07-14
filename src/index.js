import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Polaris style
import '@shopify/polaris/build/esm/styles.css';
import { AppProvider } from '@shopify/polaris';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider i18n={{}}>
    <App />
  </AppProvider>
);
