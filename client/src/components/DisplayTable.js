import React, { Component } from 'react';
import './SideBar.css';

class App extends Component {

  render() {
    return (
      <div>
        {JSON.stringify(this.props.data)}
      </div>
    );
  }
}

export default App;