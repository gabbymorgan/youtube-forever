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
        <footer className="Footer">
          <div className="Social">
            <a href='https://www.facebook.com/Tubular-Music-2094381257512633/'><img src={require('../fb.png')} id="fb"/></a>
            <a href='https://twitter.com/TubularMusic'><img src={require('../twitter.png')} id="twitter"/></a>
            <a href='https://www.instagram.com/tubular80s/'><img src={require('../ig.png')} id="ig"/></a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;


 