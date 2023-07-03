// Dependencias
import React from 'react';
import { Link } from 'react-router-dom';

// Css
import cls from './Report.css';

const report = props => {
  let nameService = null;
  let customerFirstName = null;
  let customerLastName = null;
  let totalJob = null;
  let iva = null;
  let comision = null;
  let total = null;
  if(props.jobDetails){
    nameService = props.jobDetails.map( nS => {
      if(nS.service.type_service === 'base'){
        return nS.service.name
      }
      return null;
    })
  }
  if(props.customer){
    customerFirstName = props.customer.first_name
    customerLastName = props.customer.last_name
  }
  return(
    <tr>
      <th className="text-info" scope="row">
        <a href={`/agente/trabajo/${props.id}`}>{nameService}</a>
      </th>
      <td className="text-info">{customerFirstName} {customerLastName}</td>
      <td className="text-info">${props.total.toFixed(2)}</td>
      <td className="text-info">${props.vat.toFixed(2)}</td>
      <td className="text-info">${props.serviceFee.toFixed(2)}</td>
      <td className="text-info">${props.subTotal.toFixed(2)}</td>
    </tr>
  );
}

export default report