import './App.css';
import lake from './lake.jpg';
import green from './green.jpg';
import mountain from './mountain.jpg';
import sky from './sky.jpg';
import beach from './beach.jpg';

function App() {
  return (
    <div className="App">
      <div className='carousel-container'>
        <div className="carousel-slide">
          <img alt="" src ={lake}></img>
          <img alt="" src ={green}></img>
          <img alt="" src ={mountain}></img>
          <img alt="" src ={sky}></img>
          <img alt="" src ={beach}></img>
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
