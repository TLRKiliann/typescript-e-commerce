import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import { Container } from 'react-bootstrap';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import { Store } from './Pages/Store';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Subscribe } from './Pages/Subscribe';
import { ShoppingCartProvider } from "./context/ShoppingCartContext";


const App:React.FC = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/subscribe' element={<Subscribe />} />
          </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
