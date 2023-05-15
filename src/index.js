import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkmodeProvider } from './context/DarkmodeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkmodeProvider>
      <App />
    </DarkmodeProvider>  
  </React.StrictMode>
);


reportWebVitals();
