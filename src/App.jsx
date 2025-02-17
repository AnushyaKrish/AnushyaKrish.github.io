import { useState } from 'react'
import './App.css'
import { GetInTouch } from './components/GetInTouch'
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';
import { Profile } from './components/Profile';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';

function App() {

  return (
    <>
      <div className="overflow-hidden">
        <HeroSection />
        <Profile />
        <Experience />
        <Projects />
        <Skills/>
        <Education />
        <GetInTouch />
        <Footer />
      </div>
    </>
  )
}

export default App
