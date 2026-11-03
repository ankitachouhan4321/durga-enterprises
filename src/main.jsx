import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {BrowserRouter} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";


import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
)
