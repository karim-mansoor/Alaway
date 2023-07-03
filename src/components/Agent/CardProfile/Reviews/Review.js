import React from 'react';
import Stars from './Stars';
import { Avatar } from 'material-ui';

import cls from './Reviews.css'

const Review = (props) => {
  let avatar;
  let qualification = props.qualification;
  let comment = props.owner.comment;
  let firstName = props.owner.my_reviews.data.attributes.owner_first_name;
  let lastName = props.owner.my_reviews.data.attributes.owner_last_name;
  if (props.owner.my_reviews.data.attributes.owner_avatar.url == null) {
    avatar = <Avatar>{firstName.charAt(0).toUpperCase()} {lastName.charAt(0).toUpperCase()}</Avatar>
  }else{
    avatar = <Avatar alt="Remy Sharp" src={props.owner.my_reviews.data.attributes.owner_avatar.url} />
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