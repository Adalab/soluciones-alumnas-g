import React from 'react';
import Likes from './Likes';
import Link from './Link';
const likesNum = 37;
const heart = likesNum > 35 ? 'red' : '';

class MainCard extends React.Component {
  render() {
    return (
      <main className="card__main">
        <p className="main__content">
       {this.props.description}
        </p>

        <div className="main__more-info">
          <Link/>
          <Likes 
            likesNumber={likesNum}
            heart={heart}
          /> 
        </div>
      </main>
    )
  }
}

export default MainCard;