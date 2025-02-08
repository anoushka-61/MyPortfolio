import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/styles.scss'; 
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router 
     future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}
    >
      <div className="App">
        <Navbar />
        <Routes>
          {/* Only one route, because we're handling scrolling via react-scroll */}
          <Route exact path="/" element={
            <>
              <Home />
              <Skills />
              <Experience />
              <Education />
              <Contact/>
              <Footer/>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
