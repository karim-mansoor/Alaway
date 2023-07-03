import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import Alert from 'react-s-alert';
import creditCardType from 'credit-card-type';

// Components
import {
  Grid,
} from 'material-ui';


import cls from './Payment.css';

import * as actions from '../../../../../store/actions';

//Credit card images
import imgCreditCardAlia from '../../../../../assets/creditCard/ic_alia.svg';
import imgCreditCardAlkosto from '../../../../../assets/creditCard/ic_alkosto.png';
import imgCreditCardAmex from '../../../../../assets/creditCard/ic_amex.svg';
import imgCreditCardCredisensa from '../../../../../assets/creditCard/ic_credisensa.png';
import imgCreditCardDiners from '../../../../../assets/creditCard/ic_diners.svg';
import imgCreditCardDiscover from '../../../../../assets/creditCard/ic_discover.svg';
import imgCreditCardElo from '../../../../../assets/creditCard/ic_elo.png';
import imgCreditCardExito from '../../../../../assets/creditCard/ic_exito.png';
import imgCreditCardMasterCard from '../../../../../assets/creditCard/ic_mastercard.svg';
import imgCreditCardVisa from '../../../../../assets/creditCard/ic_visa.svg';
import imgCompraSegura from '../../../../../assets/creditCard/compra_segura.png';

class Payment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardValidatorForm: {
        number_card: {
          elementType: 'number',
          label: 'Numero de tarjeta',
          value: '',
          validation: {
            required: true,
            isCredCard: true,
          },
          valid: false,
          touched: false,
          errorText: null,
        },
        first_name_card: {
          elementType: 'text',
          label: 'Contraseña',
          value: '',
          validation: {
            required: true,
            isAlphabetic: true,
          },
          valid: false,
          touched: false,
        },
        expiration_card_MM: {
          elementType: 'number',
          label: 'Mes de Expedición',
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
          errorText: null,
        },
        expiration_card_YY: {
          elementType: 'number',
          label: 'Año de Expedición',
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
          errorText: null,
        },
        cvc_card: {
          elementType: 'number',
          label: 'CVC',
          value: '',
          validation: {
            required: true,
            isCVC: true,
          },
          valid: false,
          touched: false,
          errorText: null,
        },
      },
      check: false,
      formIsValid: false,
      selectedOption: false,
      cardId: null,
      showCardForm: false,
    }

    this.handlecardChecked = this.handlecardChecked.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.showCardForm = this.showCardForm.bind(this);
  }

  componentDidMount() {
    this.props.onFetchUser(localStorage.getItem('token'));
    this.props.onListCard(localStorage.getItem('token'));
  };

  inputChangedHandler(value, rules) {
    let isValid = true;
    let errorText = null;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
      errorText = 'Requerido.';
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
      errorText = 'Debe ser solo numerico.';
    }

    if (rules.isCredCard) {
      isValid = this.validateCCNum(value) && isValid;
      errorText = 'No es un número de tarjeta válido';
    }

    if (rules.isExpirationDate) {
      isValid = this.validateCCExpiration(value) && isValid;
      errorText = 'No es una fecha de expiración validad.';
    }

    if (rules.isCVC) {
      const pattern = /^[0-9]{3,4}$/;
      isValid = pattern.test(value) && isValid;
      errorText = 'CVC Inválido.';
    }

    if (rules.isAlphabetic) {
      const pattern = /^[a-zA-Z ]{2,30}$/;
      isValid = pattern.test(value) && isValid;
      errorText = 'Nombre inválido';
    }

    return {
      isValid,
      errorText,
    };
  }

  handleCheckImput = () => {
    this.setState({
      check: !this.state.check,
    });
  }

  changeValidator = (event, controlName) => {
    const updatedControls = {
      ...this.state.cardValidatorForm,
      [controlName]: {
        ...this.state.cardValidatorForm[controlName],
        value: event.target.value,
        valid: this.inputChangedHandler(
          event.target.value,
          this.state.cardValidatorForm[controlName].validation,
        ).isValid,
        errorText: this.inputChangedHandler(
          event.target.value,
          this.state.cardValidatorForm[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      cardValidatorForm: updatedControls,
      formIsValid,
    });
  }

  validateCCNum = (ccnum) => {
    const ccCheckRegExp = /[^\d\s-]/;
    var isValid = !ccCheckRegExp.test(ccnum);
    var i;

    if (isValid) {
        var cardNumbersOnly = ccnum.replace(/[\s-]/g,"");
        var cardNumberLength = cardNumbersOnly.length;

        var arrCheckTypes = ['visa', 'mastercard', 'amex', 'discover', 'dinners', 'jcb'];
        for(i=0; i<arrCheckTypes.length; i++) {
            var lengthIsValid = false;
            var prefixIsValid = false;
            var prefixRegExp;

            switch (arrCheckTypes[i]) {
                case "mastercard":
                    lengthIsValid = (cardNumberLength === 16);
                    prefixRegExp = /^5[1-5]/;
                    break;

                case "visa":
                    lengthIsValid = (cardNumberLength === 16 || cardNumberLength === 13);
                    prefixRegExp = /^4/;
                    break;

                case "amex":
                    lengthIsValid = (cardNumberLength === 15);
                    prefixRegExp = /^3([47])/;
                    break;

                case "discover":
                    lengthIsValid = (cardNumberLength === 15 || cardNumberLength === 16);
                    prefixRegExp = /^(6011|5)/;
                    break;

                case "dinners":
                    lengthIsValid = (cardNumberLength === 14);
                    prefixRegExp = /^(300|301|302|303|304|305|36|38)/;
                    break;

                case "jcb":
                    lengthIsValid = (cardNumberLength === 15 || cardNumberLength === 16);
                    prefixRegExp = /^(2131|1800|35)/;
                    break;

                default:
                    prefixRegExp = /^$/;
            }

            prefixIsValid = prefixRegExp.test(cardNumbersOnly);
            isValid = prefixIsValid && lengthIsValid;

            // Check if we found a correct one
            if(isValid) {
                break;
            }
        }
    }

    if (!isValid) {
        return false;
    }

    // Remove all dashes for the checksum checks to eliminate negative numbers
    ccnum = ccnum.replace(/[\s-]/g,"");
    // Checksum ("Mod 10")
    // Add even digits in even length strings or odd digits in odd length strings.
    var checksum = 0;
    for (i = (2 - (ccnum.length % 2)); i <= ccnum.length; i += 2) {
        checksum += parseInt(ccnum.charAt(i - 1));
    }

    // Analyze odd digits in even length strings or even digits in odd length strings.
    for (i = (ccnum.length % 2) + 1; i < ccnum.length; i += 2) {
        var digit = parseInt(ccnum.charAt(i - 1)) * 2;
        if (digit < 10) {
            checksum += digit;
        } else {
            checksum += (digit - 9);
        }
    }

    return (checksum % 10) === 0;
  }

  validateCCExpiration = (expire) => {
    var result = true;
    if(!expire.match(/(0[1-9]|1[0-2])[/][0-9]{2}/)){
      result = false;
    } else {
      var d = new Date();
      var currentYear = d.getFullYear();
      var currentMonth = d.getMonth() + 1;
      var parts = expire.split('/');
      var year = parseInt(parts[1], 10) + 2000;
      var month = parseInt(parts[0], 10);
      if (year < currentYear || (year == currentYear && month < currentMonth)) {
        result = false;
      }
    }
    return result;
  }

  paymentHandle = (event) => {
    event.preventDefault();
    var saved_props = this.props;

    // const API_CODE = process.env.REACT_APP_PAYMENTEZ_CLIENT_CODE;
    // const API_KEY = process.env.REACT_APP_PAYMENTEZ_CLIENT_KEY;

    window.Paymentez.init('prod', 'NOC-EC-CLIENT', '4lHGnVGLzFdLJu43EyQtb3sMVkuKf6' );
    var form = $("#add-card-form");
    var submitButton = form.find("button");
    var submitInitialText = submitButton.text();

    var number = this.state.cardValidatorForm.number_card.value
    var holder_name = this.state.cardValidatorForm.first_name_card.value
    var expiry_month = parseInt(this.state.cardValidatorForm.expiration_card_MM.value)
    var expiry_year = parseInt(this.state.cardValidatorForm.expiration_card_YY.value)
    var cvc = this.state.cardValidatorForm.cvc_card.value
    var type = '';
    var card_types = creditCardType(number);
    
    type = card_types[0].niceType

    if (type == 'Visa') {
      type = 'vi'
    }else if (type == 'Mastercard') {
      type = 'mc'
    }else if (type == 'American Express') {
      type = 'ax'
    }else if (type == 'Diners' || type == 'Diners Club' ) {
      type = 'di'
    }else if (type == 'Discover') {
      type = 'dc'
    }else if (type == 'Elo') {
      type = 'el'
    }else if (type == 'Credisensa') {
      type = 'cs'
    }else if (type == 'Solidario') {
      type = 'so'
    }else if (type == 'Exito') {
      type = 'ex'
    }else if (type == 'Alkosto') {
      type = 'ak'
    }

    var cardToSave = {
                        "card": {
                          "number": number,
                          "holder_name": holder_name,
                          "expiry_month": expiry_month,
                          "expiry_year": expiry_year,
                          "cvc": cvc,
                          "type": type,
                        }
                      };
    var successHandler = function(cardResponse) {
        if(cardResponse.card.status === 'valid'){
          $('#messages').html('Card Successfully Added<br>'+
                        'status: ' + cardResponse.card.status + '<br>' +
                        "Card Token: " + cardResponse.card.token + "<br>" +
                        "transaction_reference: " + cardResponse.card.transaction_reference
                      );
                      var c_type = cardResponse.card.type
                      var c_number = cardResponse.card.number
                      var c_token = cardResponse.card.token
                      var c_status = cardResponse.card.status
                      var c_em = cardResponse.card.expiry_month
                      var c_ey = cardResponse.card.expiry_year
          saved_props.onPaymentAddCard(localStorage.getItem('token'),  holder_name, c_type, c_number, c_token, c_status, c_em, c_ey);
          saved_props.nextPage(event, 'Payment')
        }else if(cardResponse.card.status === 'review'){
          $('#messages').html('Card Under Review<br>'+
                        'status: ' + cardResponse.card.status + '<br>' +
                        "Card Token: " + cardResponse.card.token + "<br>" +
                        "transaction_reference: " + cardResponse.card.transaction_reference
                      );
        }else{
          $('#messages').html('Error<br>'+
                        "message Token: " + cardResponse.card.message + "<br>"
                      );
        }
      };
    var errorHandler = function(err) {
      $('#messages').html(err.error.type);
      Alert.error( 'Por favor ingresa todos los datos requeridos', {
        position: 'top',
        effect: 'genie',
      });
    };
    var email = null;
    if(this.props.user.attributes){
      email=this.props.user.attributes.email
    }
    window.Paymentez.addCard(this.props.user.id, email, cardToSave, successHandler, errorHandler);
  }

  handlecardChecked = (event, id) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      cardId: id,
      selectedOption: value,
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let id = this.state.selectedOption;
    if (this.state.cardId === null) {
      Alert.error('Por favor escoge una tarjeta', {
        position: 'top',
        effect: 'genie',
      });
    } else {
      this.props.nextPage(e, 'Payment', this.state.cardId)
    }
  }

  showCardForm = (e) => {
    e.preventDefault();
    console.log('show card')
    this.setState({
      showCardForm: true,
    })
  }

  render() {
    let validadData = null;
    let creditForm;
    let creditCard;
    let crediCardButton;
    if(this.props.listCard !== undefined && this.props.listCard.length !== 0){
      if (this.props.listCard.data.length > 0) {
        validadData = this.props.listCard.data.length
        crediCardButton =
          <div>
            <button className={cls.Selection} value="Submit" type='submit'>Escoger Tarjeta</button>
            <button className={cls.AddCard} onClick={this.showCardForm}>+ Agregar nueva tarjeta</button>
          </div>
        creditForm = this.props.listCard.data.map(d => {
          if(d.attributes.card_type === "vi") {
            d.attributes.card_image_url = imgCreditCardVisa
          }else if (d.attributes.card_type == 'mc') {
            d.attributes.card_image_url = imgCreditCardMasterCard
          }else if (d.attributes.card_type == 'ax') {
            d.attributes.card_image_url = imgCreditCardAmex
          }else if (d.attributes.card_type == 'di') {
            d.attributes.card_image_url = imgCreditCardDiners
          }else if (d.attributes.card_type == 'dc') {
            d.attributes.card_image_url = imgCreditCardDiscover
          }else if (d.attributes.card_type == 'el') {
            d.attributes.card_image_url = imgCreditCardElo
          }else if (d.attributes.card_type == 'cs') {
            d.attributes.card_image_url = imgCreditCardCredisensa
          }else if (d.attributes.card_type == 'so') {
            d.attributes.card_image_url = imgCreditCardAlia
          }else if (d.attributes.card_type == 'ex') {
            d.attributes.card_image_url = imgCreditCardExito
          }else if (d.attributes.card_type == 'ak') {
            d.attributes.card_image_url = imgCreditCardAlkosto
          }
          return(
            <div className={cls.text_info}>
              <input
                name="cardId"
                type="radio"
                checked={this.state.selectedOption === d.id}
                onClick={(event) => this.handlecardChecked(event, d.id)}
                value={d.id}
              />
              <label className={cls.textCardSelect}>
		            <img src={d.attributes.card_image_url}/>
                <p className={cls.card_label}> Numero de tarjeta XXXX-XXXX-XXXX-{d.attributes.number}</p>
                <p className={cls.card_label}> Fecha de expiración: {d.attributes.expiry_month}/{d.attributes.expiry_year}</p>
                <p className={cls.card_label}> Nombre: {d.attributes.holder_name}</p>
              </label>
            </div>
          )
        })
      }
    } else {
      crediCardButton =
        <div>
          <button className={cls.AddCard} onClick={this.showCardForm}>+ Agregar nueva tarjeta</button>
          <div>"No existen tarjetas guardadas, crea una para continuar"</div>
        </div>
  }
    const { props } = this.props;
    return (
      <Grid container>
          <div className={cls.BookingForm}>
              <div className={cls.Form}>
                  <div className={cls.ContentWrapper}>
                      <div className={cls.ServiceSection}>
                          <div className={cls.Row}>
                              <div>
                                  <span onClick={(event) => this.props.backPage(event, 'Payment')} className={cls.ButtonBack}>{'<<'} Volver</span>
                                  <h3 className={cls.SubHeaderText}>
                                      <span>Ingresa tu forma de Pago</span>
                                  </h3>
                              </div>
                          </div>
                          {(validadData <= 0 && validadData != null) || this.state.showCardForm === true ? (
                    <div>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <div className={`${cls.Columns} ${cls.width100}`}>
                                    <label>Número de Tarjeta de Credito</label>
                                    <div className={cls.Relative}>
                                        <div className={cls.CardNumber}>
                                            <input className={`${cls.Input} ${cls.width100}`}
                                                value={this.state.cardValidatorForm.number_card.value}
                                                onChange={(event) => this.changeValidator(event, 'number_card')}/>
                                            {!this.state.cardValidatorForm.number_card.valid && this.state.cardValidatorForm.number_card.touched ? (
                                              <div className={cls.ErrorText}>
                                                  {this.state.cardValidatorForm.number_card.errorText}
                                              </div>
                                              ) : null}
                                          </div>
                                      </div>
                                  </div>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6}>
                                  <div className={`${cls.Columns} ${cls.width100}`}>
                                      <label>Nombre de la tarjeta de credito</label>
                                      <div className={cls.Relative}>
                                          <div className={cls.CardName}>
                                              <input className={`${cls.Input} ${cls.width100}`}
                                                  value={this.state.cardValidatorForm.first_name_card.value}
                                                  onChange={(event) => this.changeValidator(event, 'first_name_card')}/>
                                              {!this.state.cardValidatorForm.first_name_card.valid && this.state.cardValidatorForm.first_name_card.touched ? (
                                        <div className={cls.ErrorText}>
                                            {this.state.cardValidatorForm.first_name_card.errorText}
                                        </div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <div className={cls.MarginBottom}>
                        <Grid container>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <div className={`${cls.Columns} ${cls.width100}`}>
                                    <label>Expiracion</label>
                                    <div className={cls.Relative}>
                                        <div className={cls.CardNumber}>
                                            <input style={{ margin: '0 5px 5px 0' }} className={cls.CreditCardInputSmall}
                                                value={this.state.cardValidatorForm.expiration_card_MM.value}
                                                onChange={(event) => this.changeValidator(event, 'expiration_card_MM')}
                                                placeholder="MM"/>
                                            {!this.state.cardValidatorForm.expiration_card_MM.valid && this.state.cardValidatorForm.expiration_card_MM.touched ? (
                                        <div className={cls.ErrorText}>
                                            {this.state.cardValidatorForm.expiration_card_MM.errorText}
                                        </div>
                                        ) : null}
                                        <input className={cls.CreditCardInputSmall}
                                            value={this.state.cardValidatorForm.expiration_card_YY.value}
                                            onChange={(event) => this.changeValidator(event, 'expiration_card_YY')}
                                            placeholder="YYYY"/>
                                        {!this.state.cardValidatorForm.expiration_card_YY.valid && this.state.cardValidatorForm.expiration_card_YY.touched ? (
                                        <div className={cls.ErrorText}>
                                            {this.state.cardValidatorForm.expiration_card_YY.errorText}
                                        </div>
                                      ) : null}
                                  </div>
                              </div>
                          </div>
                      </Grid>
                      <Grid className={cls.Ajuste} item xs={6} sm={6} md={6} lg={6}>
                          <div className={`${cls.Columns} ${cls.width100}`}>
                              <label>CVC</label>
                              <div className={cls.Relative}>
                                  <div className={cls.CardNumber}>
                                      <input className={`${cls.InputSmall} ${cls.width100}`}
                                              value={this.state.cardValidatorForm.cvc_card.value}
                                              onChange={(event) => this.changeValidator(event, 'cvc_card')}
                                              placeholder="989"/>
                                          {!this.state.cardValidatorForm.cvc_card.valid && this.state.cardValidatorForm.cvc_card.touched ? (
                                        <div className={cls.ErrorText}>
                                            {this.state.cardValidatorForm.cvc_card.errorText}
                                        </div>
                                        ) : null}
                                  </div>
                              </div>
                          </div>
                  </Grid>
              </Grid>
          </div>
          <div className={cls.ButtonBooking}>
              <Grid container>
                  <div className={cls.Row}>
                      <button
                          onClick={(event) => this.paymentHandle(event)}
                          className={cls.ButtonBookingCore}
                      >Agregar tarjeta</button>
                  </div>
              </Grid>
          </div>
          <div id='messages'></div>
          <br/>
          <div className={cls.row}>
            <Grid container>
              <div className={cls.Row}>
                <center><img className={cls.CompraSegura} src={imgCompraSegura} alt="Asegurado con Paymentez"/></center>
              </div>
            </Grid>
          </div>
          </div>
                  ) : (
                    <div className={cls.formConten}>
                        <form className={cls.formCreditCard} onSubmit={this.handleFormSubmit}>
                            {creditForm}
                            {crediCardButton}
                        </form>
                    </div>
                  )}
              </div>
          </div>
      </div>
  </div>
      </Grid>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  onFetchUser: (token) => dispatch(actions.fetchCurrentUser(token)),
  onListCard: (token) => dispatch(actions.listCard(token)),
  onPaymentAddCard: (token, holder_name, c_type, c_number, c_token, c_status, c_em, c_ey) => dispatch(actions.paymentAddCard(token, holder_name, c_type, c_number, c_token, c_status, c_em, c_ey)),
});

const mapStateToProps = state => ({
  user: state.user.user,
  paymenData: state.paymenData.paymenData,
  listCard: state.listCard.listCard,
});

export default connect(mapStateToProps, mapDispatchToProps) (Payment);
