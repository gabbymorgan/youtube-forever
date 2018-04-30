import React, { Component } from 'react';
import Img from 'react-image';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="Header">
          <Img src={require("../logo.png")} className="Header__Img"/>
        </header>
      <div className='Container'>
        <iframe title="video" id='Video'
        src="https://www.youtube.com/embed/videoseries?list=PLLNToNPi40EgcXJjnrmAtFWEIAWftZGWr&autoplay=1&controls=0&loop=1&rel=0&showinfo=0&autohide=1&wmode=transparent&hd=1">
        </iframe>
      </div>
      <footer className="Footer">
      </footer>
      </div>
    );
  }
}

export default App;


 