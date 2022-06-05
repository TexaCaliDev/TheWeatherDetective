import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {BrowserRouter} from 'react-router-dom'
import Routings from './components/Routings'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<BrowserRouter>
  <Routings />
</BrowserRouter>
);


