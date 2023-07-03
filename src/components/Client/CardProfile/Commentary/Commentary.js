import React, { Component } from 'react';

// Component
import Review from './Review';

// Css
import cls from './Commentary.css';

class Commentary extends Component {
  render() {
    let rewiew;
    if(this.props.rewiewsData == undefined){
      console.log('quedo undefined')
    }else{
      if(this.props.rewiewsData.rewiews.data.length > 0){
        rewiew = this.props.rewiewsData.rewiews.data.map( rv => {
          return (
            <Review
              key={rv.id}
              rv={rv}
            />
          )
        })
      }else{
        rewiew = "Sin comentarios"
      }
    }
    return (
      <div className={cls.Div}>
        <h3 className={cls.CardTitle}><span>Comentarios</span></h3>
          {rewiew}
      </div>
    );
  }
}

export default Commentary;