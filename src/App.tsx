import React, { useEffect, useRef } from 'react';
import { About } from './About';
import './App.scss';
import { Projects } from './Projects';

function App() {
  let textPosition = 1;
  var speed = 200;
  const roles = ['ProGrAMmer', 'HUmaN-Mom', 'Wife', 'LeaRNer', 'Silly-GoOsE', 'EmPoWerEr']
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const typewriter = (index: number, reverse?: boolean) => {
      ref.current!.innerHTML = roles[index].substring(0, textPosition);

      if (reverse) {
        if (textPosition-- > 2) {
          setTimeout(() => typewriter(index, true), speed)
          textPosition--
        } else {
          setTimeout(() => typewriter(index + 1), speed)
          textPosition = 1
        }
      } else {
        if (textPosition++ < roles[index].length) {

          setTimeout(() => typewriter(index), speed);
        } else {
          setTimeout(() => typewriter(index, true), 3000)
        }
      }


      if (index === roles.length - 1) {
        ref.current!.className = 'final-text'
        ref.current!.innerHTML = 'Programmer | Human-Mom | Wife | Learner | Silly Goose | Empowerer';
      }


    }

    typewriter(0)
  }, [])

  return (
    <>
      <section className='title__container'>
        <svg className='svg' width='700' viewBox="0 -10 250 35">
          <text fontSize={'2em'} x="0" y="20" fontFamily='Neonderthaw' >Welcome,<tspan fill={'orange'} fontFamily='Staatliches'>I'm Jasmine <tspan fontFamily='Avenir Next' fill='limegreen'></tspan></tspan></text>
        </svg>
        <span className='type-text' ref={ref}></span>
      </section>
      <About />
      <Projects />
    </>
  );
}

export default App;
