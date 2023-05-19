// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Components
import { MainRoutes } from './Routes';

import './index.css';
import { Header } from './components/Header/intex';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>,
);
