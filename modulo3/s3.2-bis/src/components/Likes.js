import React from 'react';

class Likes extends React.Component {
  render(){
    return(
      <div className="likes">
        <span className="likes__number">{this.props.likesNumber}</span>
        <i className={`fas fa-heart ${this.props.heart}`}></i>
      </div>
    )
  }
}

export default Likes;