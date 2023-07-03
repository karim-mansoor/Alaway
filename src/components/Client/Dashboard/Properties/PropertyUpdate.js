import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'material-ui/Button';
import Input from '../../../UI/Input/Input';

import * as action from '../../../../store/actions';

class PropertyUpdate extends Component {
  state = {
    updateForm: {
      name: {
        elementType: 'input',
        label: 'Nombre',
        elementConfig: {
          type: 'text',
          placeholder: 'Nombre',
        },
        value: this.props.property.attributes.name,
        validation: {
          required: true,
        },
        valid: true,
        errorText: null,
      },
      city: {
        elementType: 'input',
        label: 'Ciudad',
        elementConfig: {
          type: 'text',
          placeholder: 'Ciudad',
        },
        value: this.props.property.attributes.city_id,
        validation: {
          required: true,
        },
        valid: true,
        errorText: null,
      },
      neightborhood_id: {
        elementType: 'input',
        label: 'Barrio',
        elementConfig: {
          type: 'text',
          placeholder: 'Barrio',
        },
        value: this.props.property.attributes.neightborhood_id,
        validation: {
          required: true,
        },
        valid: true,
        errorText: null,
      },
      p_street: {
        elementType: 'input',
        label: 'Calle Principal',
        elementConfig: {
          type: 'text',
          placeholder: 'Calle Principal',
        },
        value: this.props.property.attributes.p_street,
        validation: {
          required: true,
        },
        valid: true,
        errorText: null,
      },
      number: {
        elementType: 'input',
        label: 'Numeración',
        elementConfig: {
          type: 'text',
          placeholder: 'Numeración',
        },
        value: this.props.property.attributes.number,
        validation: {
          required: true,
        },
        valid: true,
        errorText: null,
      },
      s_street: {
        elementType: 'input',
        label: 'Calle Secundaria',
        elementConfig: {
          type: 'text',
          placeholder: 'Calle Secundaria',
        },
        value: this.props.property.attributes.s_street,
        validation: {
          required: true,
        },
        valid: true,
        errorText: null,
      },
      details: {
        elementType: 'input',
        label: 'Detalles',
        elementConfig: {
          type: 'text',
          placeholder: 'Detalles',
        },
        value: this.props.property.attributes.details,
        validation: {
          required: true,
        },
        valid: true,
        errorText: null,
      },
      cell_phone: {
        elementType: 'input',
        label: 'Celular',
        elementConfig: {
          type: 'text',
          placeholder: 'Celular',
        },
        value: this.props.property.attributes.cell_phone,
        validation: {
          required: true,
        },
        valid: true,
        errorText: null,
      },
    },
    formIsValid: true,
  };

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

  updateHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementIdentifier in this.state.updateForm) {
      formData[formElementIdentifier] = this.state.updateForm[formElementIdentifier].value;
    }
    const property = {
      property: formData,
    };
    this.props.onUpdateProperty(this.props.token, property, this.props.property.id);
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.updateForm,
      [controlName]: {
        ...this.state.updateForm[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.updateForm[controlName].validation,
        ).isValid,
        errorText: this.checkValidity(
          event.target.value,
          this.state.updateForm[controlName].validation,
        ).errorText,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      updateForm: updatedControls,
      formIsValid,
    });
  }
  render() {
    const formElementsArray = [];
    for (const key in this.state.updateForm) {
      formElementsArray.push({
        config: this.state.updateForm[key],
        id: key,
      });
    }
    const form = (
      <form onSubmit={this.updateHandler}>
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
          Actualizar
        </Button>
      </form>
    );
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Actualizar propiedad</h1>
        {form}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onUpdateProperty: (token, formData, id) => dispatch(action.updateProperty(token, formData, id)),
});

const mapStateToProps = state => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyUpdate);
