import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'
import {StateProvider} from './context/IndexContext'
import {ThemeProvider} from '@material-tailwind/react'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <StateProvider>
       <BrowserRouter>
          <App />
       </BrowserRouter>
      </StateProvider>
    </ThemeProvider>
  </React.StrictMode>
);
