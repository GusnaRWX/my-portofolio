import React from 'react';
import './scss/main.scss'
import Nav from './components/core/Nav';
import Paralax from './components/_shared/Paralax';

function App() {
  return (
    <>
      <section className='parallax-wrapper'>
        <Paralax baseVelocity={-5}><p>HI</p> <p style={{ color: '#80489C' }}>Everyone</p></Paralax>
        <Paralax baseVelocity={5}><p>My Name</p> <p style={{ color: '#3E6D9C' }}>Gusna</p></Paralax>
      </section>
      <div>
        <Nav />
      </div>
    </>
  );
}

export default App;
