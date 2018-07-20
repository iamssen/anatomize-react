import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Test1 extends Component {
  render() {
    return (
      <div>
        ???
      </div>
    );
  }
}

class Test2 extends Component {
  state = {
    a: 1,
    b: 2,
  }
  
  render() {
    return (
      <div>
        {this.state.a}
        {this.state.b}
        {this.props.children}
        <button onClick={this.update}>update!!!</button>
      </div>
    );
  }
  
  update = () => {
    this.setState({
      a: this.state.a + 1,
      b: this.state.b - 1,
    })
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Test2>
          <Test1/>
        </Test2>
      </div>
    );
  }
}

export default App;
