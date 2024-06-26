import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import App from './App';
import TableWithPagination from './Components/TableWithPagination/TableWithPagination';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
    <TableWithPagination />
  </React.StrictMode>
);

