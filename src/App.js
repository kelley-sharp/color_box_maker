import React, { Component } from 'react';
import './App.css';
import BoxList from './BoxList';
import BoxListForm from './BoxListForm';

const initialBoxes = [
  {
    backgroundColor: 'rgb(0,0,0)',
    width: '50px',
    height: '50px'
  },
  {
    backgroundColor: 'rgb(255,255,255)',
    width: '100px',
    height: '100px'
  },
  {
    backgroundColor: 'rgb(100,200,50)',
    width: '70px',
    height: '40px'
  },
  {
    backgroundColor: 'rgb(200,50,100)',
    width: '50px',
    height: '1000px'
  }
];

class App extends Component {
  state = {
    boxes: initialBoxes
  };

  createBox = evt => {
    evt.preventDefault();
    const newBox = {
      backgroundColor: evt.target.backgroundColor.value,
      width: evt.target.width.value + 'px',
      height: evt.target.height.value + 'px'
    };
    this.setState({
      boxes: this.state.boxes.concat([newBox])
    });
  };

  render() {
    return (
      <div>
        <BoxListForm createBox={this.createBox} />
        <BoxList boxes={this.state.boxes} />
      </div>
    );
  }
}

export default App;
