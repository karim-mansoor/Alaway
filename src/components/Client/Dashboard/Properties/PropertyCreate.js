import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'material-ui/Button';
import Input from '../../../UI/Input/Input';

import * as action from '../../../../store/actions';

class PropertyCreate extends Component {
  state = {
    createForm: {
      name: {
        elementType: 'input',
        label: 'Nombre',
        elementConfig: {
          type: 'text',
          placeholder: 'Nombre',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      city: {
        elementType: 'input',
        label: 'Ciudad',
        elementConfig: {
          type: 'text',
          placeholder: 'Ciudad',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      neightborhood_id: {
        elementType: 'input',
        label: 'Barrio',
        elementConfig: {
          type: 'text',
          placeholder: 'Barrio',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      p_street: {
        elementType: 'input',
        label: 'Calle Principal',
        elementConfig: {
          type: 'text',
          placeholder: 'Calle Principal',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      number: {
        elementType: 'input',
        label: 'Numeración',
        elementConfig: {
          type: 'text',
          placeholder: 'Numeración',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      s_street: {
        elementType: 'input',
        label: 'Calle Secundaria',
        elementConfig: {
          type: 'text',
          placeholder: 'Calle Secundaria',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      details: {
        elementType: 'input',
        label: 'Detalles',
        elementConfig: {
          type: 'text',
          placeholder: 'Detalles',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      cell_phone: {
        elementType: 'input',
        label: 'Celular',
        elementConfig: {
          type: 'text',
          placeholder: 'Celular',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
    },
  }

  checkValidity(value, rules) {
    let isValid = true;
    let errorText = null;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
      errorText = 'Requerido.';
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
      errorText = `Debe contener mas de ${rules.minLength} caracteres.`;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
      errorText = `Debe contener menos de ${rules.maxLength} caracteres.`;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
      errorText = 'Debe ser un email valido.';
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
      errorText = 'Debe ser solo numerico.';
    }

    return {
      isValid,
      errorText,
    };
  }

  createHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementIdentifier in this.state.createForm) {
      formData[formElementIdentifier] = this.state.createForm[formElementIdentifier].value;
    }
    const property = {
      property: formData,
    };
    this.props.onCreateProperty(this.props.token, property);
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.createForm,
      [controlName]: {
        ...this.state.createForm[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.createForm[controlName].validation,
        ).isValid,
        errorText: this.checkValidity(
          event.target.value,
          this.state.createForm[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      createForm: updatedControls,
      formIsValid,
    });
  }

  render() {
    const formElementsArray = [];
    for (const key in this.state.createForm) {
      formElementsArray.push({
        config: this.state.createForm[key],
        id: key,
      });
    }
    const form = (
      <form onSubmit={this.createHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            id={formElement.id}
            label={formElement.config.label}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={event => this.inputChangedHandler(event, formElement.id)}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            errorText={formElement.config.errorText}
          />
            ))}
        <Button type="submit" variant="raised" color="primary" disabled={!this.state.formIsValid}>
          Registrar
        </Button>
      </form>
    );
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Crear propiedad</h1>
        {form}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onCreateProperty: (token, formData) => dispatch(action.createProperty(token, formData)),
});

const mapStateToProps = state => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyCreate);
