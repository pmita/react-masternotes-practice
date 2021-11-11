import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//CONTEXT
import {ThemeProvider} from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
