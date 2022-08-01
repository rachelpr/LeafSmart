import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import About from './components/About'
import Contact from "./components/Contact";
import LogIn from "./components/LogIn";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="LogIn" element={<LogIn />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
