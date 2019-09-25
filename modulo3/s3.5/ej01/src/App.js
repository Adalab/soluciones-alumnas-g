import React from 'react';
import './App.css';
import ItemList from './ItemList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ItemList/>
      </div>
    );
  }
}

export default App;
