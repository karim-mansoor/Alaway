// Dependencias
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Grid } from 'material-ui';

// Component
import LogoNocNoc from '../../../assets/LogoBlanco.svg';
import Facebook from '../../../assets/icono-facebook.png';
import Instagram from '../../../assets/icono-instagram.png';
import WhatsApp from '../../../assets/icono-whatsapp.png';
import GooglePlay from '../../../assets/icono-googleplay.png';
import AppStore from '../../../assets/iconoAppStore.png';
import cls from './Footer.css';

class Contact extends Component {
  render (){
    return (
      <Grid container justify="center" alignItems="center" className={cls.Contact}>
        <Grid item xs={10} sm={10} md={10}>
          <Grid container>
            <Grid item xs={12} sm={3} md={3}>
              <img src={LogoNocNoc} height="100px" alt="Logo" className={cls.LogoNocNoc}></img>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <p className={`${cls.SubTitle} ${cls.Paper}`}>CONÓCENOS</p>
              <ul className={cls.UlContact}>
                <li className={cls.ListContact}>
                  <a className={cls.Link} href="/aboutus#aboutus">¿Quiénes Somos?</a>
                </li>
                <li className={cls.ListContact}>
                  <NavLink className={cls.Link} to="/agente/registro">Quiero ser agente</NavLink>
                </li>
                <li className={cls.ListContact}>
                  <NavLink className={cls.Link} to="/">Principios y Valores</NavLink>
                </li>
                <li className={cls.ListContact}>
                  <a className={cls.Link} href="/terms#terms">Términos y Condiciones</a>
                </li>
                <li className={cls.ListContact}>
                  <a className={cls.Link} href="/politicas#policies">Politicas de privacidad</a>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <p className={`${cls.SubTitle} ${cls.Paper}`}>VISÍTANOS</p>
              <a href="https://www.facebook.com/appnocnoc/" target="_blank"><img src={Facebook} alt="Facebook" className={cls.Styleicon} /></a>
              <a href="https://www.instagram.com/nocnoc_app/?hl=es-la" target="_blank"><img src={Instagram} alt="Instagram" className={cls.Styleicon} /></a>
              <a href="https://wa.me/593995388728" target="_black" ><img src={WhatsApp} alt="WhatsApp" className={cls.Styleicon} /></a>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <p className={`${cls.SubTitle} ${cls.Paper}`}>Descarga la app</p>
              <a href="https://play.google.com/store/apps/details?id=com.nocnoc.app" target="_black"><img src={GooglePlay} alt="GoolglePlay" /></a>
              <a href="https://apps.apple.com/ec/app/noc-noc/id1460598374" target="_black"><img src={AppStore} alt="App Store" /></a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Contact;