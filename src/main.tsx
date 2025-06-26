import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';  // ← importa aquí
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
