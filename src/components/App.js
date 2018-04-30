import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className='Container'>
        <iframe title="video" className='Video'
        src="https://www.youtube.com/embed/videoseries?list=PLLNToNPi40EgcXJjnrmAtFWEIAWftZGWr&autoplay=1&controls=0&loop=1&rel=0&showinfo=0&autohide=1&wmode=transparent&hd=1">
        </iframe>
      </div>
      </div>
    );
  }
}

export default App;


 