import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const context = canvas!.getContext('2d')
    //Our first draw
    context!.fillStyle = 'cornflowerblue'
    context!.fillRect(0, 0, context!.canvas.width, context!.canvas.height)
  }, [])


  return (
    <>
      <canvas id='canvas' width={1000} height={700} ref={ref} ></canvas>
    </>
  );
}

export default App;
