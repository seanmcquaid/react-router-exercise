import React, { Component } from 'react';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar'

var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

class App extends Component {
  render() {
    return (
      <div>
        <BootstrapNavBar />
        <div className="container main">
          <h1>Main App</h1>
        </div>
      </div>
    );
  }
}

export default App;
