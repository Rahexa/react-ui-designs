import React from "react";
import ReactDOM from 'react-dom/client'; 
import './App.css' 
import Hero from "./components/Hero"
import Services from "./components/Services";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar /> 
      
      <Hero />
      
      <Services />
      
      <Footer />

  </React.StrictMode>
);