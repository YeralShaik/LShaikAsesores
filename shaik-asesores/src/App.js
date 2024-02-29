// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './componentes/Navbar';
import { Home } from './Pages/Home';
import { Nosotros } from './Pages/Us';

import { Blog } from './Pages/Blog';
import { Questions } from './Pages/Questions'
import { Footer } from './componentes/Footer';


import './App.css';



function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
   
        <Route path="/blog" element={<Blog />} />
        <Route path="/preguntas" element={<Questions />} />
      </Routes>
      <Footer/>
     </Router>
  );
}

export default App;