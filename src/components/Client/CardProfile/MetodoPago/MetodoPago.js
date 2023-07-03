import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component
import Card from './Card';

// Css
import cls from './MetodoPago.css';

// Actions
import * as actions from '../../../../store/actions';

class MetodoPago extends Component {
  componentDidMount() {
    this.props.onListCard(localStorage.getItem('token'));
  };
  render() {
    let cards;
    if(this.props.listCard || undefined){
      if(this.props.listCard.length > 0){
      }else{
        if(this.props.listCard.data || undefined){
          cards = this.props.listCard.data.map( cl => {
            return(
              <Card
                key={cl.id}
                id={cl.id}
                cardType={cl.attributes.card_type}
                expiryMonth={cl.attributes.expiry_month}
                expiryYear={cl.attributes.expiry_year}
                holderName={cl.attributes.holder_name}
                number={cl.attributes.number}
                status={cl.attributes.status}
                deleteCard={this.props.onDeleteCard}
              />
            )
          })
        }
      }
    }else{
      cards = "No tienes tarjetas en este momento"
    }
    return (
      <div className={cls.Div}>
        <h3 className={cls.CardTitle}><span>Metodos de pago</span></h3>
        {cards}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onListCard: (token) => dispatch(actions.listCard(token)),
  onDeleteCard: (token, id) => dispatch(actions.deleteCard(token, id)),
});

const mapStateToProps = state => ({
  listCard: state.listCard.listCard,
});

export default connect(mapStateToProps, mapDispatchToProps) (MetodoPago);