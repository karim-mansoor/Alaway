import React, { Component } from 'react';
import Review from './Review';

// Css
import cls from './Reviews.css';

class Reviews extends Component {
  render() {
    let reviews;
    if(this.props.userAttributes){
      reviews = this.props.userAttributes.rewiews.data.map( rv => {
        return(
          <Review
            key={rv.id}
            owner={rv.attributes}
            qualification={rv.attributes.qualification}
          />
        )
      })
    }
    return (
      <div className={cls.Div}>
        <h3 className={cls.CardTitle}><span>Comentarios</span></h3>
        {reviews}
      </div>
    );
  }
}

export default Reviews;