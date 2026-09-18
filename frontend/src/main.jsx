import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx";
import Home from './components/Home.jsx'
import Aboutus from './components/Aboutus.jsx'
import APITestor from './components/APITestor.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
   <Aboutus/>
    <Home/> */}
<APITestor/>
  </StrictMode>,
)
