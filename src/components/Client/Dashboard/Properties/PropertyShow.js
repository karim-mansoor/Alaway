import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import PropertyUpdate from './PropertyUpdate';

import * as actions from '../../../../store/actions';


class PropertyShow extends Component {
  state = {
    updating: false,
  }
  componentDidMount() {
    if (!Object.keys(this.props.property).length > 0) {
      this.props.onGetProperty(this.props.token, this.props.match.params.id);
    }
  }

  onClickUpdateHandler = () => {
    this.setState({ updating: !this.state.updating });
  }

  onClickDeleteHandler = () => {
    this.props.onDeleteProperty(this.props.token, this.props.property.id);
  }
  render() {
    let property = null;
    if (Object.keys(this.props.property).length > 0) {
      property = (
        <div>
          <h1>{this.props.property.attributes.name}</h1>
          <p>{this.props.property.id}</p>
        </div>
      );
    }
    let propertyForm = null;
    if (this.state.updating) {
      propertyForm = <PropertyUpdate property={this.props.property} />;
    }
    return (
      <div>
        {property}
        <Button variant="raised" color="primary" onClick={this.onClickUpdateHandler}>
          Editar
        </Button>
        <Button variant="raised" color="primary" onClick={this.onClickDeleteHandler}>
          Borrar
        </Button>
        {propertyForm}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetProperty: (token, id) => dispatch(actions.fetchProperty(token, id)),
  onDeleteProperty: (token, id) => dispatch(actions.deleteProperty(token, id)),
});

const mapStateToProps = (state, ownProps) => {
  let property = [];
  const propertyId = ownProps.match.params.id;
  if (state.property.properties.length > 0) {
    property = Object.assign(
      {},
      state.property.properties.find(proper => proper.id === propertyId),
    );
  }
  return {
    property: Object.keys(property).length > 0 ? property : state.property.property,
    token: state.auth.token || localStorage.getItem('token'),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PropertyShow));
