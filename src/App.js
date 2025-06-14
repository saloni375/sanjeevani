import React ,{ useEffect } from 'react';
import Navbar from './components/navbar';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap-icons/font/bootstrap-icons.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import HomePage from './components/HomePage';



const App = () => {

   
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true      
    });
  }, []);

  return (
 <div className="App" style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
  <>
    <Navbar />
    <div className="container-fluid p-0">
      <div className="container text-center">
        <HomePage />
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
  </>
</div>


  );
};



export default App;
