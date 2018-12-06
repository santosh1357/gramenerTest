/*jshint esversion: 6 */
/*jshint ignore:start */

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: null,
      boxes: [],
    }
  }
 handleAdd(){
    const count = this.state.count + 1 ;
    let boxStyle;
    if(count %2 === 0 && count%5 === 0){
      boxStyle={backgroundColor: 'black', borderTopColor: 'orange'};
    } else if(count %2 !== 0 && count%5 === 0){
      boxStyle={backgroundColor: 'blue', borderTopColor: 'orange'};
    } else if(count %2 === 0){
       boxStyle={backgroundColor: 'black'}
    } else if(count %2 !== 0){
       boxStyle={backgroundColor: 'blue'}
    }
    const box = <div style= {boxStyle} className='box' key={count} id={count}>{count}</div>;
    console.log(count)
    this.setState({
      count: count,
      boxes: this.state.boxes.concat(box),
    })
  }

  handleRemove(){
    if(this.state.count < 1){
      this.setState({
        count: null
      })
      return;
    }
    const count = this.state.count === 1?null:this.state.count -1 ;
    const boxes = this.state.boxes;
    boxes.splice(-1);
    this.setState({
      count: count,
      boxes: boxes
    })  
  }

  render() {
    let fs = 12 + this.state.count + 'px';
 
    return (
      <div className="App">
        <button 
            className="add"
            onClick={() => this.handleAdd()}
        >
          Add Box
        </button>
        <button 
            className="remove"
            onClick={() => this.handleRemove()}
        >
          Remove Box
        </button>
        {this.state.count && (
          <div className='body'>
              <div className='boxes'>
                {this.state.boxes}
              </div>
              <div className="totalCount">
                <p style = {{fontSize: fs}} className="countMsg"> Total Box : {this.state.count}</p>
              </div>
          </div>      
       )}
        {!this.state.count && (
          <div className="boxes">
            <p  className='message'>No Boxes, Click on buttons to create boxes</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
