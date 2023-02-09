import React from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Mailbar } from './components/Mailbar';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Mailbar/>
      <About/>
      <Contact/>
    </>
  )
}

export default App;
