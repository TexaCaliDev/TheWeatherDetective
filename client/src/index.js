import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './styles/index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/home" element={<Home />} />
  </Routes>
</BrowserRouter>
);


