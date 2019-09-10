import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '0:0:0'

    };
    setInterval(()=>{this.upDateClock()}, 1000);
  }

  upDateClock(){
    const newDate = new Date ();
    const hour = newDate.getHours();
    const minutes = newDate.getMinutes();
    const seconds = newDate.getSeconds();
    const actualTime = hour + ':' + minutes + ':' + seconds;
    this.setState({
      time: actualTime
    })
  }

  render() {
    return (
      <p>{this.state.time}</p>
    )
  }
}



export default App;
