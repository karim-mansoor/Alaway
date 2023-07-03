// Dependencias
import React, { Component } from 'react';
// Component
import classes from '../../index.css';
import MenuBar from '../../containers/MenuBar/MenuBar';
import MenuResponsive from '../../containers/MenuBar/MenuResponsive';
import Main from '../../components/Home/Main/Main';
import Guarantees from '../../components/Home/Guarantees/Guarantees';
import Description from '../../components/Home/Description/Description';
import Funtion from '../../components/Home/Funtion/Funtion';
import Services from '../../components/Home/Services/Services';
import Testimonio from '../../components/Home/Testimonio/Testimonio';
import Download from '../../components/Home/Download/Download';
import Contact from '../../components/Home/Contact/Contact';
import Footer from '../../components/Home/Footer/Footer';

class Home extends Component {
  render() {
    return (
      <div id="main" justify="center">
        <div className={classes.MenuBar}><MenuBar /></div>
        <div className={classes.MenuNone}><MenuResponsive /></div>
        <Main />
        <Description />
        <Guarantees />
        <Funtion />
        <h2 id="services" className={classes.textTitle}><small className={classes.smallTitle}>---------------</small> Servicios <small className={classes.smallTitle}>---------------</small></h2>
        <Services />
        <h2 id="contact" className={classes.textTitle}><small className={classes.smallTitle}>---------------</small> Contáctanos <small className={classes.smallTitle}>---------------</small></h2>
        <p className={classes.subTitle}>Déjanos tus datos y nos contactaremos contigo.</p>
        <Contact />
        <h2 className={classes.textTitle}><small className={classes.smallTitle}>---------------</small> Nuestros Clientes <small className={classes.smallTitle}>---------------</small></h2>
        <div className={classes.stylesTestimonio}>
          <Testimonio />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;