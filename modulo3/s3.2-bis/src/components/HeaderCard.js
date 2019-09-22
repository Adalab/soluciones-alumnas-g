import React from 'react';

class HeaderCard extends React.Component {
  render () {
    return(
      <header className="App-header">
       <img src={this.props.imgSrc} alt="kyary user profile" className="card__avatar"/>
      <div className="card__info">
        <h1 className="card__info-user-name">
          {this.props.userName}
        </h1>
        <p className="card__info-date">
         {this.props.date}
        </p>
      </div>
    </header>
    )
  }
}

export default HeaderCard;