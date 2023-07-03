import React from 'react';

// Components
import {
  Grid,
  Typography,
} from 'material-ui';

// Css
import cls from './ServiceImage.css';

const serviceImage = props => {
  return (
    <div className={cls.ServiceImage} style={{background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)),url(${props.image})`}}>
      <h1 className={cls.ServiceTitle}>
        {props.title}
      </h1>
    </div>
  )
}

export default serviceImage;