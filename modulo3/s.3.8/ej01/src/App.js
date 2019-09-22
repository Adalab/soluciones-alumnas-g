import React from 'react';
import './App.css';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      description:'',
      language:''
    };
    this.handleInfo = this.handleInfo.bind(this);
    // this.handleDescription = this.handleDescription.bind(this);
    // this.handleLanguage = this.handleLanguage.bind(this);
  }

  handleInfo(event){
    const getName = event.currentTarget.name;
    this.setState({[getName]:event.currentTarget.value});
  }

  // handleName(event) {
  //   this.setState({ name: event.target.value});
  // }

  // handleDescription(event) {
  //   this.setState({ description: event.target.value});
  // }

  // handleLanguage(event) {
  //   this.setState({ language: event.target.value});
  // }

  render() {
    return (
      <div className="App">
        <Form 
        name={this.state.name}
        description={this.state.description}
        language={this.state.language}
        handleInfo={this.handleInfo}
        // handleDescription={this.handleDescription}
        // handleLanguage={this.handleLanguage}
        />
       
      </div>
    );
  }
}

export default App;
