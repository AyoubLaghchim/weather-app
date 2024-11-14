import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import AppProduit from './Components/TP4/AppProduit';
import reportWebVitals from './reportWebVitals';
import AppMeteo from './Meteo/AppMeteo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppMeteo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
