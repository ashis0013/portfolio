import React from 'react';
import { Home } from './components/Home';
import { Mailbar } from './components/Mailbar';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Mailbar/>
    </>
  )
}

export default App;
