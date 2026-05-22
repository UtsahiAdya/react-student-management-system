 
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import {ThemeProvider } from "./context/ThemeContext";
import AuthProvider from "./context/AuthContext";
import App from './App'

import './index.css'
import CounterProvider from './context/CounterContext';


ReactDOM.createRoot(
  document.getElementById('root')
).render(

  <React.StrictMode>
<ThemeProvider>
<AuthProvider>
  <CounterProvider>
    <App />
    </CounterProvider>
    </AuthProvider>  
</ThemeProvider>
  </React.StrictMode>

)