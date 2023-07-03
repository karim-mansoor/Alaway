import React from 'react';
import Stars from './Stars';
import { Avatar } from 'material-ui';

import cls from './Review.css'

const Review = (props) => {
  let avatar;
  let qualification = props.rv.attributes.qualification;
  let comment = props.rv.attributes.comment;
  let firstName = props.rv.attributes.my_reviews.data.attributes.owner_first_name;
  let lastName = props.rv.attributes.my_reviews.data.attributes.owner_last_name;
  if (props.rv.attributes.my_reviews.data.attributes.owner_avatar.url == null) {
    avatar = <Avatar>{firstName.charAt(0).toUpperCase()} {lastName.charAt(0).toUpperCase()}</Avatar>
  }else{
    avatar = <Avatar alt="Remy Sharp" src={props.rv.attributes.my_reviews.data.attributes.owner_avatar.url} />
  }
  return (
    <div className={cls.centradoComment}>
      <div className={cls.Avatar}>
        {avatar}
      </div>
      <div className={cls.Conten}>
        <p>{firstName} {lastName}</p>
        <Stars qualification={qualification} />
        <p>{comment}</p>  
      </div>
    </div>
  );
}

export default Review;