import React from 'react';
import ReactDOM, { Container } from 'react-dom/client';

import App from './App.tsx';

const root = ReactDOM.createRoot(document.querySelector("#root") as Container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)