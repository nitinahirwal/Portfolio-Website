import React from 'react';
import './App.css';
import Header from "./components/header/header"
import Home from "./components/home/Home";
import About from './components/about/About';
import Skills from './components/skill/Skills';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scroll from './components/scroll/Scroll';



function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
        </main>
        <Footer />
        <scroll />
    </div>
  );
}

export default App;
