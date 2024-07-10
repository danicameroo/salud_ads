import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hydrateRoot   } from "react-dom/client";



const container = document.getElementById('root');
if (container.hasChildNodes()) {
    hydrateRoot(container, <App />);
} else {
    const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
}

reportWebVitals();