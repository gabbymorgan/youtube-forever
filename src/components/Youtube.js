import React, { Component } from 'react';
import Youtube from '@u-wave/react-youtube';

class Video extends Component {
  state = {
    volume: .6,
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
        volume = {this.state.volume}
        video = {this.props.id}
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
    const newVol = Number(this.state.volume) + .2;
    this.setState({
      volume: newVol.toString(),
    });
  }

  volumeDown() {
    const newVol = Number(this.state.volume) - .2;
    this.setState({
      volume: newVol.toString(),
    });
  }
}

export default Video;