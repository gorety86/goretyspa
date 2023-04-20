import React from 'react'
import image from './JPEG_bird.webp';
import './App.css';

function App() {

    return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="JPEG_bird.webg" alt="bird"/>
        <p>
          Beautiful Birds
        </p>
        <a
          className="App-link"
          href="http://digitalcommunications.wp.st-andrews.ac.uk/files/2019/04/JPEG_compression_Example.jpg"
          target=""
          rel=""
        >
          <button onClick={event => console.log(event)}>Click Me</button>
          learn React
        </a>
      </header>
      </div>
  );
}

export default App;
