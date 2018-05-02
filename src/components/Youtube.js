import React, { Component } from 'react';
import API from '../api';
import Youtube from '@u-wave/react-youtube';

class Video extends Component {
  state = {
    volume: 75,
    video: {}
  }

  render() {
    return (
      <div>
      <div className="Container">
        <Youtube
        className = 'Video'
        height = '720'
        width = '1280'
        video = {this.props.id}
        onReady = {this.onReady.bind(this)}
        onEnd = {() => this.props.next()}
        autoPlay
        />
      </div>
        <img className="Controls" id="Up" src={require('../up.png')} onClick={this.volumeUp.bind(this)}/>
        <img className="Controls" id="Down" src={require('../down.png')} onClick={this.volumeDown.bind(this)}/>
      </div>
    )
  }

  volumeUp() {
    const newVol = this.state.volume + 5;
    this.setState({
      volume: newVol,
    });
    this.state.video.setVolume(this.state.volume.toString());
  }

  volumeDown() {
    const newVol = this.state.volume - 5;
    this.setState({
      volume: newVol,
    });
    this.state.video.setVolume(this.state.volume.toString());
  }

  onReady(event) {
    console.log(event);
    event.target.playVideo();
    event.target.setVolume('40');
    // access to player in all event handlers via event.target
    this.setState({
      video: event
    });
  }
}

export default Video;