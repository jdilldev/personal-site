import React from 'react';
import { About } from './About';
import './App.scss';
import { Projects } from './Projects';

function App() {
  const roles = ['programmer', 'human-mom', 'wife', 'learner', 'silly', 'empowerer', 'TBD']
  return (
    <>
      <section className='title__container'>
        <svg width='700' viewBox="0 -10 240 35">
          <text fontSize={'2em'} x="0" y="20" fontFamily='Neonderthaw' >Welcome,<tspan fill={'orange'} fontFamily='Staatliches'>I'm Jasmine</tspan></text>
        </svg>
        <h2 className={'typing-demo'} style={{ fontFamily: 'Major Mono Display' }}>Programmer.</h2>
      </section>
      <About />
      <Projects />
    </>
  );
}

export default App;
