import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
const data = require('../songs.json')


class App extends Component {
  state = {
    songs: [
      {}
    ],
    current: {}
  };

  componentDidMount() {
    // axios
    //   .get('/youtube/v3/playlistItems', {
    //     'maxResults': '50',
    //     'part': 'snippet,contentDetails',
    //     'playlistId': 'PLLNToNPi40EgcXJjnrmAtFWEIAWftZGWr'
    //   }).then(response => {
    //     const songs = response.data.map(song => {
    //       return song.resourseId.songId;
    //     });
    //     this.setState({
    //       songs,
    //     })
    //   }).catch(err => console.log(err));
    const songs = data.items.map(item => {
      return {
        title: item.snippet.title,
        id: item.contentDetails.videoId
      };
    });

    this.setState({
      songs,
      current: songs[Math.floor(Math.random() * songs.length)]
    })
  }

  render() {
    return (
      <div>
        <header className="Header">
        </header>          
        <h2 id="Song-title">{this.state.current.title}</h2>
        <img src={require("../logo.png")} className="Header__Img"/>
        <div className='Container'>
          <iframe title="video" id='Video'
          src={`https://www.youtube.com/embed/${this.state.current.id}?autoplay=1&controls=1&loop=1&rel=0&showinfo=0&autohide=1&wmode=transparent&hd=1`}>
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


 