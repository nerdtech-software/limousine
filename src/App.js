import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

// Import your components
import Carcards from './components/Carcards';
import Navbar from './components/Navbar';
import Adminpanel from './components/Adminpanel';
import Homepage from './components/Homepage';
import Addcars from './components/Addcars';
import BookList from './components/BookList';
import Edithomeimage from './components/Edithomeimage';
import BookNow from './components/BookNow';
import Footer from './components/Footer';
import Vehicle from './components/Vehicle';
import Services from './components/Services';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false,     // Whether animation should happen only once while scrolling down
    });
  }, []); // Runs only once when the component is mounted

  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cars" element={<Carcards />} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/contactus" element={<Contact/>} />
          <Route path="/admin" element={<Adminpanel />} />
          <Route path="/admin/add-cars" element={<Addcars />} />
          <Route path="/admin/booklist" element={<BookList />} />
          <Route path="/admin/edithomeimage" element={<Edithomeimage />} />
          <Route path="/booknow" element={<BookNow />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/services" element={<Services/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
