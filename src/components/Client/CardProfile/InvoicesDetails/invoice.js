import React, { Component } from 'react';

import cls from './invoice.css';


class Invoice extends Component {

  render () {
    let socialReason = this.props.data.social_reason;
    let identificationType = null;
    let identification = this.props.data.identification;
    let address = this.props.data.address;
    let telephone = this.props.data.telephone;
    if(this.props.data.identification_type === "consumidor_final" ) {
      identificationType = "Consumidor final"
    }else if(this.props.data.identification_type === "cedula") {
      identificationType = "Cédula"
    }else if(this.props.data.identification_type === "ruc") {
      identificationType = "RUC"
    }else{
      identificationType = "Sin tipo de identificación"
    }
    return (
      <div className={cls.centradoComment}>
        <div className={cls.Conten}>
          <p>Razón social: {socialReason}</p>
          <p>Identificación: {identificationType} {identification}</p>
          <p>Dirección: {address}</p>
          <p>Teléfono: {telephone}</p>
        </div>
        <div className={cls.deleteButton}>
          <a className={cls.LinkDelete} onClick={() => this.props.deleteInvoice(this.props.id)} >Borrar</a>
        </div>
      </div>
    );
  }
}

export default Invoice;