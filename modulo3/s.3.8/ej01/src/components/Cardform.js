import React from 'react';

class Cardform extends React.Component {
    render() {
        return(
        <div className="containers">
        <p className="container__name">{this.props.name}</p>
        <p className="container__description">{this.props.description}</p>
        <p className="container__language">{this.props.language}</p>
        </div>
         );
    }      
}

export default Cardform;