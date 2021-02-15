import './App.css';
import lake from './lake.jpg';
import green from './green.jpg';
import mountain from './mountain.jpg';
import sky from './sky.jpg';
import beach from './beach.jpg';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(1);
  const [transformAmount, setTransformAmount] = useState(-1200);
  useEffect(()=> {
    console.log('triggered')
    setTransformAmount(state => -1200 * counter);
  }, [counter]);
  const styles = {
    transform: `translateX(${transformAmount}px)`,
    transistion: 'transform 0.4s ease-in-out'
  }
  
  function prevSlide() {
    setCounter(state => state - 1);
  }
  function nextSlide() {
    setCounter(state => state + 1);
  } 
  console.log(counter)
  console.log(transformAmount)
  return (
    <div className="App"> 
      <div className='carousel-container'>
        <div className="carousel-slide" style={styles}>
        <img id="last-clone"alt="" src ={beach}></img>
          <img alt="" src ={lake}></img>
          <img alt="" src ={sky}></img>
          <img alt="" src ={green}></img>
          <img alt="" src ={mountain}></img>
          <img alt="" src ={beach}></img>
          <img id="first-clone" alt="" src ={lake}></img>
        </div>
      </div>
      <div className="button-container">
      <button onClick={() => prevSlide()}>Prev</button>
      <button onClick={() => nextSlide()}>Next</button>
      </div>
    </div>
  );
}

export default App;
