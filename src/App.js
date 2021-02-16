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
  const [transition, setTransition] = useState("transform 0.4s ease-in-out");
  const indexArray = ["last-clone", "", "", "", "", "", "first-clone"];
  useEffect(() => {
    setTransformAmount(state => -1200 * counter);
  }, [counter]);
  const styles = {
    transform: `translateX(${transformAmount}px)`,
    transition: transition
  }

  function prevSlide() {
    if (counter <= 0) return;
    setCounter(state => state - 1);
    setTransition(state => "transform 0.4s ease-in-out");
  }
  function nextSlide() {
    if (counter >= indexArray.length - 1) return;
    setCounter(state => state + 1);
    setTransition(state => "transform 0.4s ease-in-out");
  }
  function handleTransitionEnd (event) {
    if (indexArray[counter] === 'last-clone' ) {
      setTransition(state => 'none');
      setCounter(state => indexArray.length - 2);
    } 
    if (indexArray[counter] === 'first-clone' ) {
      setTransition(state => 'none');
      setCounter(state => indexArray.length - counter);
    } 
  }
  console.log(counter)
  console.log(transformAmount)
  return (
    <div className="App">
      <div className='carousel-container'>
        <div className="carousel-slide" style={styles}  onTransitionEnd={(event) => handleTransitionEnd(event)}>
          <img id="last-clone" alt="" src={beach}></img>
          <img alt="" src={lake}></img>
          <img alt="" src={sky}></img>
          <img alt="" src={green}></img>
          <img alt="" src={mountain}></img>
          <img alt="" src={beach}></img>
          <img id="first-clone" alt="" src={lake}></img>
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
