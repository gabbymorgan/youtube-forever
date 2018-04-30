import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="Header">
          <img src={require("../logo.png")} className="Header__Img"/>
        </header>
      <div className='Container'>
        <iframe title="video" id='Video'
        src="https://www.youtube.com/embed/videoseries?list=PLLNToNPi40EgcXJjnrmAtFWEIAWftZGWr&autoplay=1&controls=0&loop=1&rel=0&showinfo=0&autohide=1&wmode=transparent&hd=1">
        </iframe>
      </div>
      <header className="Footer">
      </header>
      </div>
    );
  }
}

export default App;


 