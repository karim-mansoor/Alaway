import React from 'react';

// Css
import cls from './Card.css';

import imgCreditCardAlia from '../../../../assets/creditCard/ic_alia.svg';
import imgCreditCardAlkosto from '../../../../assets/creditCard/ic_alkosto.png';
import imgCreditCardAmex from '../../../../assets/creditCard/ic_amex.svg';
import imgCreditCardCredisensa from '../../../../assets/creditCard/ic_credisensa.png';
import imgCreditCardDiners from '../../../../assets/creditCard/ic_diners.svg';
import imgCreditCardDiscover from '../../../../assets/creditCard/ic_discover.svg';
import imgCreditCardElo from '../../../../assets/creditCard/ic_elo.png';
import imgCreditCardExito from '../../../../assets/creditCard/ic_exito.png';
import imgCreditCardMasterCard from '../../../../assets/creditCard/ic_mastercard.svg';
import imgCreditCardVisa from '../../../../assets/creditCard/ic_visa.svg';

const Card = (props) => {
  let cardType = null;
  if(props.cardType === "vi") {
    cardType = imgCreditCardVisa
  }else if (props.cardType == 'mc') {
    cardType = imgCreditCardMasterCard
  }else if (props.cardType == 'ax') {
    cardType = imgCreditCardAmex
  }else if (props.cardType == 'di') {
    cardType = imgCreditCardDiners
  }else if (props.cardType == 'dc') {
    cardType = imgCreditCardDiscover
  }else if (props.cardType == 'el') {
    cardType = imgCreditCardElo
  }else if (props.cardType == 'cs') {
    cardType = imgCreditCardCredisensa
  }else if (props.cardType == 'so') {
    cardType = imgCreditCardAlia
  }else if (props.cardType == 'ex') {
    cardType = imgCreditCardExito
  }else if (props.cardType == 'ak') {
    cardType = imgCreditCardAlkosto
  }
  return (
    <div className={cls.formContainer}>
      <div className={cls.text_info}>
        <label className={cls.textCardSelect}>
          <span><img src={cardType}/></span>
          <p className={cls.card_label}> Numero de tarjeta XXXX-XXXX-XXXX-{props.number}</p>
          <p className={cls.card_label}> Fecha de expiración: {props.expiryMonth}/{props.expiryYear}</p>
          <p className={cls.card_label}> Nombre: {props.holderName}</p>
        </label>
      </div>
      <div className={cls.buttonDeleteCard}>
        <a
          className={cls.lickDelete}
          onClick={() => props.deleteCard(localStorage.getItem('token'), props.id)} 
        >- Eliminar tarjeta</a>
      </div>
    </div>
  );
}

export default (Card);