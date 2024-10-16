import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/poppins';
import reportWebVitals from './reportWebVitals';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
