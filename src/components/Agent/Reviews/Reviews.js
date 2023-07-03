import React from 'react';

import Stars from '../../Client/Jobs/JobShow/Stars';

import cls from './Review.css';

const reviewsAgent = (props) => {
  let name = null;
  let owner = null;
  let avatar = null;
  let qualification = null;
  let comment = null;
  if (props.review) {
    if (props.review == undefined) {
      owner = props.review.owner;
      name = props.review.owner.data.attributes.first_name;
      avatar = props.review.owner.data.attributes.avatar.url === null ? (
        <div className={cls.AvatarInitials}>
          {props.review.owner.data.attributes.first_name.charAt(0).toUpperCase()}{props.review.owner.data.attributes.last_name.charAt(0).toUpperCase()}
        </div>
      ) : (
        <div className={cls.AvatarInitials} style={{backgroundImage: `url(${props.review.owner.data.attributes.avatar.url})`}}>
        </div>
      );
    }else{
      owner = props.review.my_reviews.data.attributes;
      name = (`${props.review.my_reviews.data.attributes.owner_first_name} ${props.review.my_reviews.data.attributes.owner_last_name}`).replace(/\b\w/g, l => l.toUpperCase());
      avatar = props.review.my_reviews.data.attributes.owner_avatar.url === null ? (
        <div className={cls.AvatarInitials}>
          {props.review.my_reviews.data.attributes.owner_first_name.charAt(0).toUpperCase()}{props.review.my_reviews.data.attributes.owner_last_name.charAt(0).toUpperCase()}
        </div>
      ) : (
        <div className={cls.AvatarInitials} style={{backgroundImage: `url(${props.review.my_reviews.data.attributes.owner_avatar.url})`}}>
        </div>
      );
    }
    qualification = props.review.qualification;
    comment = props.review.comment;
  }
  return (
    <div className={cls.Review}>
      <div className={cls.ReviewHeader}>
        <div className={cls.ReviewAvatar}>
          <div className={cls.ReviewAvatarCircle}>
            {avatar}
          </div>
        </div>
        <div className={cls.ReviewName}>
          <p>{name}</p>
          <div>
            <Stars agentRewiewsAverage={qualification}/>
          </div>
        </div>
      </div>
      <div className={cls.ReviewDetails}>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default reviewsAgent;