import React from 'react';
import { Link } from 'react-router-dom';

// Components
import {
  Grid,
} from 'material-ui';

// Css
import cls from './CardProperties.css';
const cardProperties = props => {
 return (
  <div className={cls.Div}>
    <Link className={cls.ButtonEdit} to="/cliente/perfil/propiedades/nuevo"><span>Nuevo</span></Link>
    <h3 className={cls.CardTitle}><span>Propiedades</span></h3>
    <Grid className={cls.CardPrincipalAccount} container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div className={cls.Container}>
          <Grid container>
            {Object.keys(props.properties).length > 0 ? 
              props.properties.map(property => (
                <p key={property.id}>
                  <strong>{property.name}</strong>
                  <span className={cls.MarginLeft}>{property.attributes.p_street} con {property.attributes.s_street}</span>
                  <Link className={cls.LinkEdit} to={`/cliente/perfil/propiedades/editar/${property.id}`}>Editar</Link>
                  <a className={cls.LinkDelete} onClick={() => props.deleteProperty(localStorage.getItem('token'), property.id)}>Borrar</a>
                </p>
            )) : (
              <h2><strong>No tienes propiedades creadas</strong></h2>
            )}     
          </Grid>
        </div>
      </Grid>
    </Grid>
  </div>
 )
}

export default cardProperties;
