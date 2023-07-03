import React from 'react';
// import { Link } from 'react-router-dom';

// Components
import {
  Grid,
} from 'material-ui';
import Check from '../../../../../assets/check.png';

import cls from './Thanks.css';

const thanks = (props) => {
  return (
    <div className={cls.BookingForm}>
      <Grid container>
        <form className={cls.Form}>
          <div className={cls.ContentWrapper}>
            <div className={cls.ServiceSection}>
              <Grid container>
                <div className={cls.Row}>
                  <div>
                    <h3 className={cls.SubHeaderText}>
                      <span className={cls.Capitalize}>{localStorage.getItem('first_name')}</span>
                    </h3>
                  </div>
                </div>
                <div className={cls.RowCenter}>
                  <img src={Check} alt="" />
                </div>
                <div className={cls.Row}>
                  <div className={cls.PaddingTop}>
                    <h3 className={cls.SubHeaderText}>
                      <span>Tu servicio se ha programado correctamente</span>
                    </h3>
                  </div>
                </div>
                <div className={cls.Row}>
                  <div className={cls.LinkWrapper}>
                    <a href="/cliente/trabajos">
                      Volver a los trabajoss
                    </a>
                  </div>
                </div>
              </Grid>
            </div>  
          </div>
        </form>
      </Grid>
    </div>
  );
};

export default thanks;