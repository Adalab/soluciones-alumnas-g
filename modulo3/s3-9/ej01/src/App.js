import React from 'react';
import './App.scss';

const arr = [1,2,3,4,6,7,8,9,10,11,12];


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: arr,
      filternumber: '',
      pares: false
    };
    this.getUserNumber = this.getUserNumber.bind(this);
    this.getCheckboxStatus = this.getCheckboxStatus.bind(this);
  }

  getUserNumber(event) {
    let value = parseInt(event.currentTarget.value);
    if (value !== '') {
      value = parseInt(value);
    }
    this.setState({
      filternumber: value
    });
  }

  getCheckboxStatus(event) {
    const status = event.currentTarget.checked;
    console.log(status);
    this.setState({
      pares: status
    })
  }

  render() {
    return (
      <div className="app">
        <input type="number" onChange={this.getUserNumber} />
        <input type="checkbox" onClick={this.getCheckboxStatus} />
        <ul onClick={this.paco}>
          {this.state.arr
            .filter(item => {
              if (this.state.filternumber === '') {
                return true;
              } else {
                return this.state.filternumber <= item;
              }
            })
            .filter(item => {
              if (this.state.pares === false) {
                return true;
              } else {
                return item%2 === 0;
              }
            })
            .map(number => {
              return (
                <li key={number}>{number}</li>
              );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
