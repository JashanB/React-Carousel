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
  // const carouselSlide = document.querySelector('.carousel-slide');
  // const carouselImages = document.querySelectorAll('.carousel-slide img');
  useEffect(()=> {
    setTransformAmount(state => state * counter);
  }, [counter]);
  const styles = {
    transform: `translateX(${transformAmount}px)`
  }
  
  // carouselSlide.getElementsByClassName.transform = 'translate'
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
      <button>Prev</button>
      <button>Next</button>
      </div>
    </div>
  );
}

export default App;
