import React, { Component } from 'react';

import Youtube from './Youtube';
import './App.css';
const data = require('../songs.json'); //this json file contains the information for each song


class App extends Component {
  state = {
    songs: [
      {}
    ],
    current: {},
  };

  componentDidMount() {
    //populate array of song titles and video ids to state
    const songs = data.items.map(item => {
      return {
        title: item.snippet.title,
        id: item.contentDetails.videoId,
      };
    });

    this.setState({
      songs,
      current: songs[Math.floor(Math.random() * songs.length)],
    });
  }

  //next click handler
  clickNext() {
    this.setState({
      current: this.state.songs[Math.floor(Math.random() * this.state.songs.length)]
    })
  }


  render() {
    return (
      <div>
        <header className="Header">        
        <img src={require("../logo.png")} className="Header__Img"/>
        </header>          
        <h2 id="Song-title">{this.state.current.title}</h2>
        <Youtube id={this.state.current.id} next={this.clickNext.bind(this)}/>
        <footer className="Footer">
          <div className="Social">
            <a href='https://www.facebook.com/Tubular-Music-2094381257512633/'><img src={require('../fb.png')} id="fb"/></a>
            <a href='https://twitter.com/TubularMusic'><img src={require('../twitter.png')} id="twitter"/></a>
            <a href='https://www.instagram.com/tubular80s/'><img src={require('../ig.png')} id="ig"/></a>
          </div>
        </footer>          
        <img src={require('../next.png')} className="Controls" id="Next" onClick={() => this.clickNext()}/>
      </div>
    );
  }
}

export default App;


 