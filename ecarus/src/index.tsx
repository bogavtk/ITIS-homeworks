import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import { App } from './App';
import { AuthProvider } from './context/AuthProvider';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);

