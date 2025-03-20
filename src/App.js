import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <AboutMe />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;

