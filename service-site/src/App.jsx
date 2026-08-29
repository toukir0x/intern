import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Hero from './components/Hero'



// import Service from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Services from './components/Services'

// import ServicesPage from "./pages/ServicesPage";
// import ServiceDetails from "./pages/ServiceDetails";
// import NotFound from "./pages/NotFound";

// // import React from "react";
// import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      {/* <Routes>
        <Route path="/" element={<ServicesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App
