// DEPENDENCIAS
import React,{ Component } from 'react';

// COMPONENTES
import Registro from './Register/Register';

class Agent extends Component{
  render() {
    return (
      <div>
        <div id="RegistreAgente">
          <Registro />
        </div>
      </div>
    );
  }
}

export default Agent;