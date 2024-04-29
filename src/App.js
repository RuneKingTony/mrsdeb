// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './Navigation/About';
import Businesses from './Navigation/Businesses';
import ServiceDetail from './Navigation/ServiceDetails'// Correct the import path
import { ServiceProvider } from './serviceContext';
import Contacts from './Navigation/Contacts';

function App() {
  return (
    <Router>
      <Navbar />
      <ServiceProvider> {/* Wrap with ServiceProvider */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="businesses" element={<Businesses />} /> {/* Remove services prop */}
          {/* Adjust the route to render ServiceDetail */}
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </ServiceProvider>
      <Footer />
    </Router>
  );
}

export default App;
