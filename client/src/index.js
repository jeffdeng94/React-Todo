import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ changed
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ new

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// service worker (optional)
serviceWorker.unregister();
