import React, { Component } from 'react';
import API from '../api';

class Youtube extends Component {
  state = {
    duration: ''
  }
  componentDidUpdate() {
    fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API}&id=${this.props.id}&part=contentDetails`)
    .then((response) => response.json())
    .then((responseJson) => { 
      const durationISO = responseJson.items[0].contentDetails.duration.split('');
      const minSec = durationISO.slice(2,durationISO.length-1).join('').split('M');
      let durationMillis = (minSec[0]*60000) + (minSec[1]*1000);
      setTimeout(this.props.next, durationMillis);
    }).catch(err => console.log(err.message));
  }

  render() {
    return(
    <div className='Container'>
      <iframe title="video" id='Video'
      src={`https://www.youtube.com/embed/${this.props.id}?autoplay=1&controls=1&loop=1&rel=0&showinfo=0&autohide=1&wmode=transparent&hd=1`} volume='0'>
      </iframe>
    </div>
    )
  }
}

export default Youtube;