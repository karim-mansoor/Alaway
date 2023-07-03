import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import cls from './KnowUs.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 130,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root} id="policies">
      <Grid container justify="center">
        <Grid item xs={12} sm={10}>
          <div>
            <h1 className={cls.textTitle}><small className={cls.smallTitle}>---------------</small> Política de Privacidad <small className={cls.smallTitle}>---------------</small></h1>
            <p className={classes.paper}>La presente política de privacidad aplica a los USUARIOS que aceptaron los TÉRMINOS y CONDICIONES y se registraron en la PLATAFORMA NOC NOC, de propiedad de HOPESERV CIA LTDA, una compañía constituida bajo las leyes de la República del Ecuador, con Registro Único de Contribuyentes No. 1792851300001, domiciliada en la ciudad de Quito-Ecuador.</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={10}>
          <div className={classes.paper}>
            
            <h3 className={cls.Content} variant="headline" gutterBottom>I. Definiciones:</h3>
            <h5>1. AGENTES:</h5>
            <p className={cls.Typography_term}>
              Son los profesionales calificados y especializados en sus respectivos servicios, se encuentran registrados y autorizados por la COMPAÑÍA en la plataforma digital NOC NOC; y son quienes prestan los servicios directamente en forma libre, voluntaria e independientemente al CLIENTE, sin la existencia de relación laboral alguna con la COMPAÑÍA o los CLIENTES; La relación entre los AGENTES con la COMPAÑÍA y los CLIENTES, no se podrá interpretar como asociación, cuentas en participación o sociedad de hecho.
            </p>
            <h5>2. APLICACIÓN:</h5>
            <p className={cls.Typography_term}>
              Es parte de la plataforma digital y consiste en la aplicación móvil NOC NOC que se encuentra disponible en las tiendas para Iphone y Android.
            </p>
            <h5>3. COMPAÑÍA:</h5>
            <p className={cls.Typography_term}>
              Es HOPESERV CIA LTDA, una compañía constituida bajo las leyes de la República del Ecuador, con Registro Único de Contribuyentes No. 1792851300001, domiciliada en la ciudad de Quito-Ecuador.
            </p>
            <h5>4. CLIENTES:</h5>
            <p className={cls.Typography_term}>
              Son las personas naturales o jurídicas que tienen un usuario autorizado por la COMPAÑÍA en la plataforma digital NOC NOC, y quienes contratan los diferentes SERVICIOS disponibles.
            </p>
            <h5>5. PLATAFORMA:</h5>
            <p className={cls.Typography_term}>
              Es la plataforma digital NOC NOC compuesta por su sitio web www.nocnoc.com.ec y una aplicación móvil, de propiedad de la COMPAÑÍA. La plataforma es una herramienta tecnológica de comunicación cuyo objetivo consiste en facilitar con un canal de contacto y comunicación entre los AGENTES y los CLIENTES para la búsqueda, reserva, contratación, calendarización e intermediación en la gestión de pago de los SERVICIOS prestados por los AGENTES.
            </p>
            <h5>6. SERVICIOS:</h5>
            <p className={cls.Typography_term}>
              Son los diferentes servicios disponibles en la PLATAFORMA para la contratación del CLIENTE. Los servicios disponibles serán los publicados en la PLATAFORMA y generalmente serán los siguientes: servicios de limpieza para el hogar, para oficinas y condominios; servicios para el hogar como jardinería, electricidad, plomería; servicios de profesores, peluqueros, maquilladores y los que a discreción de la COMPAÑÍA sean habilitados en la PLATAFORMA.
            </p>
            <h5>7. SITIO WEB:</h5>
            <p className={cls.Typography_term}>
              Es la página web de la plataforma digital NOC NOC: www.nocnoc.com.ec.
            </p>
            <h5>8. TÉRMINOS y CONDICIONES:</h5>
            <p className={cls.Typography_term}>
              Son los términos y condiciones generales que regulan el uso de la APLICACIÓN y SITIO WEB y que constituyen un contrato vinculante entre los USUARIOS y la COMPAÑÍA.
            </p>
            <h5>9. USUARIO/S:</h5>
            <p className={cls.Typography_term}>
              Son los CLIENTES y AGENTES autorizados por la COMPAÑÍA que utilizan la plataforma digital NOC NOC, a través del Internet mediante la APLICACIÓN o SITIO WEB.’
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>II. Política de Privacidad:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> La COMPAÑÍA conforme a la legislación vigente ecuatoriana en materia de Protección de Datos de Carácter Personal, informa a los USUARIOS de su PLATAFORMA, acerca de la Política de Privacidad y Protección de Datos que aplicará en el tratamiento de los datos personales que los USUARIOS voluntariamente proporcionan al acceder al SITIO WEB www.nocnoc.com.ec o a la APLICACIÓN.
            </p>
            <p className={cls.Typography_term}>
              <b>2.</b> Los USUARIOS, al proporcionar a la COMPAÑÍA, sus datos de carácter personal a través de los formularios electrónicos del SITIO WEB y la APLICACIÓN, consiente expresamente que la COMPAÑÍA pueda tratar esos datos de acuerdo a la Política de Privacidad y Protección de Datos expuesta en el presente instrumento.
            </p>
            <p className={cls.Typography_term}>
              <b>3.</b> Antes de registrase en la PLATAFORMA, los USUARIOS deben leer la presente Política de Privacidad. Una vez que los USUARIOS se registran afirman y aceptan que han leído y aceptado expresamente la presente Política de Privacidad de Datos, en particular la finalidad de la recopilación de los datos, así como cualquier cesión de datos prevista en la presente Política de Privacidad.
            </p>
            <p className={cls.Typography_term}>
              <b>4.</b> Los USUARIOS al registrarse deberán proporcionar los datos determinados por la COMPAÑÍA para la creación de su usuario y la edición de su perfil. Los datos generales que se deben proporcionar son los siguientes: nombre del usuario, correo electrónico, número de teléfono, número de cédula de identidad. Asimismo, la COMPAÑÍA, siempre y cuando los USUARIOS lo autoricen, recogerá datos relacionados con su localización, incluyendo la localización geográfica en tiempo real del ordenador o dispositivo móvil de los USUARIOS.
            </p>
            <p className={cls.Typography_term}>
              <b>5.</b> Una vez completado el registro, los USUARIOS podrán entrar a su perfil y completarlo y editarlo de acuerdo a su voluntad. Los USUARIOS también podrán acceder y crear una cuenta a través de su perfil de Facebook. La información y datos facilitados por los USUARIOS estarán en todo momento disponibles en su cuenta de usuario y podrán ser modificados por los mismos, a través de la opción editar perfil.
            </p>
            <p className={cls.Typography_term}>
              <b>6.</b> Los USUARIOS se comprometen a introducir datos reales y veraces. Asimismo, los USAURIOS serán los únicos responsables de los daños y perjuicios que la COMPAÑÍA o terceros pudieran sufrir como consecuencia de la falta de veracidad, inexactitud, falta de vigencia y autenticidad de los datos proporcionados.
            </p>
            <p className={cls.Typography_term}>
              <b>7.</b> Los datos recopilados por la COMPAÑIA, serán exclusivamente utilizados para desarrollar el uso y buen funcionamiento de la PLATAFORMA NOC NOC conforme lo establecido en los TÉRMINOS y CONDICIONES, publicados y disponibles en la PLATAFORMA.
            </p>
            <p className={cls.Typography_term}>
              <b>8.</b> La COMPAÑÍA clasifica los datos de los USUARIOS en un fichero automatizado con la finalidad de prestar, gestionar, administrar, ampliar y mejorar los servicios y contenidos ofrecidos en la APLICACIÓN y SITIO WEB; y atender adecuadamente cualquier consulta o solicitud de información planteada por los USUARIOS y, en su caso, para la remisión de información sobre los servicios o actividades de la PLATAFORMA que pudieran ser del interés de los USUARIOS.
            </p>
            <p className={cls.Typography_term}>
              <b>9.</b> La COMPAÑÍA, en ningún caso remitirá publicidad y comunicaciones con nes de venta u otras de naturaleza comercial a los USUARIOS sin que medie su consentimiento o una solicitud expresa. No se enviarán cadenas de mensajes electrónicos no solicitados ni previamente consentidos, exceptuándose las comunicaciones con nes de venta, newsletters o SMS que ocasionalmente pueda transmitir la COMPAÑÍA a sus USUARIOS registrados. Si posteriormente, los USUARIOS desean revocar su consentimiento otorgado para recibir información comercial vía correo electrónico o por cualquier otro medio similar o equivalente, podrán comunicarlo, a través de los canales de contacto disponibles en la PLATAFORMA.
            </p>
            <p className={cls.Typography_term}>
              <b>10.</b> La COMPAÑÍA manifiesta su compromiso de cumplir con la legislación ecuatoriana vigente en materia de protección de datos, en cada momento. Se informa a los USUARIOS que los datos de carácter personal facilitados en la PLATAFORMA serán objeto de tratamiento automatizado y formarán parte de los ficheros que son de titularidad de la COMPAÑÍA, siendo esta la responsable del tratamiento, para las finalidades propias de gestión de los USUARIOS registrados en la PLATAFORMA.
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>III. Protección de Datos Personales:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> Toda la información personal que facilite o se recoja a través de la PLATAFORMA, será tratada principalmente por la COMPAÑÍA.
            </p>
            <p className={cls.Typography_term}>
              <b>2.</b> La información que recibimos por parte de los USUARIOS se recopila de la siguiente manera: La COMPAÑÍA recopila información de los USUARIOS de dos formas, la que aportan directamente ellos y otra que es aportada de forma indirecta mediante el uso de la PLATAFORMA NOC NOC.
              <p className={cls.Typography_term_sub}>
                <b>2.1</b> Información facilitada directamente por los USUARIOS:
                <p className={cls.Typography_term_sub_text}>
                  <b>2.1.1</b> Datos de Registro: la información que los USUARIOS proporcionan cuando se crea una cuenta en la PLATAFORMA: nombre del usuario, contraseña, correo electrónico, número de cedula.
                </p>
                <p className={cls.Typography_term_sub_text}>
                  <b>2.1.2</b> Información del Perfil de los USUARIOS: la información que los USUARIOS agregan en la PLATAFORMA para utilizar los SERVICIOS (tarjetas de crédito o débito, datos de facturación, dirección del lugar donde se prestará el SERVICIO). Los USUARIOS pueden ver y editar los datos personales de su perfil cuando estime oportuno. La COMPAÑÍA no almacena los datos de la tarjeta de crédito o débito de los USUARIOS, pero estos datos se facilitan a prestadores de servicios de pago electrónico con licencia y con certificaciones PCI DSS que garantizan una compra en línea totalmente segura, los cuales recibirán directamente los datos incluidos y los almacenarán para facilitar el proceso de pago a los USUARIOS y gestionarán el mismo en nombre de la COMPAÑÍA. En ningún caso la COMPAÑÍA almacena en sus servidores estos datos. Los USUARIOS podrán, en cualquier momento, eliminar los datos de sus tarjetas vinculados a su cuenta. Con esa acción, el proveedor de servicios procederá a borrar los datos y será necesario volver a introducirlos o seleccionarlos para poder realizar nuevos pedidos a través de la PLATAFORMA.
                </p>
                <p className={cls.Typography_term_sub_text}>
                  <b>2.1.3</b> Información adicional que los USUARIOS comparten: es la información que podría facilitar los USUARIOS a la COMPAÑÍA con otros fines. Por ejemplo, una fotografía.
                </p>
                <p className={cls.Typography_term_sub_text}>
                  <b>2.1.4</b> Información sobre las comunicaciones realizadas con la COMPAÑÍA: Esta tendrá acceso a información que los USUARIOS aporten para la resolución de dudas o quejas sobre el uso de la PLATAFORMA.
                </p>
              </p>
              <p className={cls.Typography_term_sub}>
                Es necesario el tratamiento de estos datos por parte de la COMPAÑÍA para poder cumplir con los servicios ofrecidos en la PLATAFORMA. Si los USUARIOS no los facilitan los SERVICIOS no podrán ser prestados.
              </p>
              <p className={cls.Typography_term_sub}>
                <b>2.2</b> Información facilitada por los USUARIOS indirectamente:
                <p className={cls.Typography_term_sub_text}>
                  <b>2.2.1</b> Datos derivados del uso de la PLATAFORMA: La COMPAÑÍA recopila los datos derivados del uso de la PLATAFORMA por parte de los USUARIOS cada vez que interactúan con la PLATAFORMA.
                </p>
                <p className={cls.Typography_term_sub_text}>
                  <b>2.2.2</b> Datos de la APLICACIÓN y del dispositivo: La COMPAÑÍA almacena los datos del dispositivo y de la APLICACIÓN que los USUARIOS utilizan para acceder a los SERVICIOS. Estos son:
                  <p className={cls.Typography_term_sub_text}>
                    <b>A)</b> Dirección IP de Internet que utilizan los USUARIOS para conectarse a Internet con su ordenador o móvil.
                  </p>
                  <p className={cls.Typography_term_sub_text}>
                    <b>B)</b> Información de su ordenador o móvil, como su conexión a Internet, su tipo de navegador, la versión y el sistema operativo.
                  </p>
                  <p className={cls.Typography_term_sub_text}>
                    <b>C)</b> El clickstream completo de localizadores de recursos Uniformes (URL).
                  </p>
                  <p className={cls.Typography_term_sub_text}>
                    <b>D)</b> Datos de la cuenta de los USUARIOS: la información de los pedidos realizados por parte de los USUARIOS, así como las valoraciones y comentarios realizados sobre los mismos.
                  </p>
                  <p className={cls.Typography_term_sub_text}>
                    <b>E)</b> El historial de navegación y las preferencias de los USUARIOS.
                  </p>
                  <p className={cls.Typography_term_sub_text}>
                    <b>F)</b> Datos sobre el origen de los USUARIOS: si los USUARIOS llegan a la PLATAFORMA a través de una fuente externa (como sería por ejemplo un enlace de otra página web o de una red social), la COMPAÑÍA recopila los datos de la fuentes de las que precedieron los USUARIOS.
                  </p>
                  <p className={cls.Typography_term_sub_text}>
                    <b>G)</b> Datos derivados de la gestión de incidencias: si los USUARIOS se dirigen a la PLATAFORMA a través de los canales de contacto o mediante el teléfono de la PLATAFORMA NOC NOC; La COMPAÑÍA recopilará los mensajes recibidos en el formato utilizado por los USUARIOS y los podrá utilizar y almacenar para gestionar incidencias presentes o futuras.
                  </p>
                  <p className={cls.Typography_term_sub_text}>
                    <b>H)</b> Datos derivados de las “cookies”: La COMPAÑÍA utiliza cookies propias y de terceros para facilitar la navegación a sus USUARIOS y con fines estadísticos.
                  </p>
                  <p className={cls.Typography_term_sub_text}>
                    <b>I)</b> Datos derivados de terceros externos: La COMPAÑÍA podría recopilar información o datos de carácter personal de terceros externos únicamente si USUARIOS autorizan a esos terceros a compartir la información recopilada por la COMPAÑÍA. Por ejemplo, en caso de que los USUARIOS se creen una cuenta a través de su Facebook; Facebook podría cedernos datos de carácter personal de estos USUARIOS que mantienen en su perfil(nombre, género, edad, etc). Igualmente si los USUARIOS ingresan a la PLATAFORMA a través de los productos, servicio o enlaces creados por Google, éste podrá enviar datos de navegación de los USUARIOS a la COMPAÑÍA.
                  </p>
                  <p className={cls.Typography_term_sub_text}>
                    <b>J)</b> Datos sobre la Geolocalización: siempre y cuando los USUARIOS lo autoricen, la COMPAÑÍA recogerá datos relacionados con su localización, incluyendo la localización geográfica en tiempo real del ordenador o dispositivo móvil de los USUARIOS.
                  </p>
                </p>
              </p>
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>IV.Finalidades recopilación de datos:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> Facilidad de uso de la PLATAFORMA: La COMPAÑÍA utiliza los datos que recopila de los USUARIOS para que puedan acceder y comunicarse con la PLATAFORMA según el mecanismo de uso detallados en los TÉRMINOS Y CONDICIONES.
            </p>
            <p className={cls.Typography_term}>
              <b>2.</b> La COMPAÑÍA podrá utilizar los datos personales proporcionados por los USUARIOS para comunicaciones vía correo electrónico o envíos de SMSs a los USUARIOS con información relativa al estado del SERVICIO solicitado. Una vez concluido el servicio la COMPAÑÍA enviará la factura al correo electrónico del CLIENTE. Los USUARIOS al registrarse en la PLATAFORMA aceptan la presente Política de Privacidad y que, por lo tanto, autoriza a la COMPAÑÍA a realizar estas comunicaciones.
            </p>
            <p className={cls.Typography_term}>
              <b>3.</b> La COMPAÑÍA utiliza la información para investigar y analizar cómo mejorar la prestación de los SERVICIOS, así como para desarrollar y mejorar las características de los mismos.
            </p>
            <p className={cls.Typography_term}>
              <b>4.</b> La COMPAÑÍA utiliza internamente la información con fines estadísticos a efectos de analizar el comportamiento y las tendencias de los USUARIOS, y de comprender cómo estos utilizan la PLATAFORMA, para gestionar y mejorar los servicios ofrecidos.
            </p>
            <p className={cls.Typography_term}>
              <b>5.</b> Garantizar la seguridad: la COMPAÑÍA podrá utilizar los datos de los USUARIOS con el propósito de detectar e investigar fraudes, así como otras actividades ilegales y quebrantamientos potenciales de nuestros TÉRMINOS y CONDICIONES. Para lo cual, la COMPAÑÍA podrá compartir datos de los USUARIOS con plataformas que analicen las operaciones de fraude.
            </p>
            <p className={cls.Typography_term}>
              <b>6.</b> La COMPAÑÍA podrá hacer uso de la información proporcionada por los USUARIOS para proteger el buen uso de la PLATAFORMA, cumplir con la legislación aplicable, así como garantizar el correcto y seguro funcionamiento de la COMPAÑÍA.
            </p>
            <p className={cls.Typography_term}>
              <b>7.</b> Promoción y difusión de ofertas comerciales (online y offline). La COMPAÑÍA podrá enviar al correo electrónico de los USUARIOS mensajes promocionales y ofertas relativas al servicio que ofrece y que pudieran interesar a los USUARIOS. La COMPAÑÍA podrá medir y personalizar dicha publicidad en función de las preferencias de los USUARIOS en la PLATAFORMA. Si los USUARIOS no quieren recibir esta información o comunicaciones comerciales, podrá optar en cualquier momento por la opción de “Cancelar la suscripción” en el propio correo electrónico, y la COMPAÑÍA cesará inmediatamente en el envío esta clase de información.
            </p>
            <p className={cls.Typography_term}>
              <b>8.</b> La COMPAÑÍA podrá enviar a los USUARIOS mensajes u ofertas relativas a los SERVICIOS de la PLATAFORMA mediante notificaciones “push” (envío a su teléfono móvil de mensajes promocionales y ofertas). Si los USUARIOS no desean recibir las comunicaciones comerciales podrá eliminarlas desactivándolas en su perfil.
            </p>
            <p className={cls.Typography_term}>
              <b>9.</b> La COMPAÑÍA y los terceros asociados con la misma, podrán utilizar la dirección de los CLIENTES a efectos de realizar actividades promocionales para la entrega de muestras o productos gratuitos de los SERVICIOS relacionados con la PLATAFORMA (entrega de muestras gratuitas a domicilio o folletos publicitarios)
            </p>
            <p className={cls.Typography_term}>
              <b>10.</b> Los USUARIOS al utilizar la PLATAFORMA podrán recibir comunicaciones comerciales de terceros asociados con la COMPAÑÍA, como Facebook y Google,
            </p>
            <p className={cls.Typography_term}>
              <b>11.</b> Si la propiedad de la COMPAÑÍA cambiará, los USUARIOS son informados que la COMPAÑÍA transferirá sus datos a las entidades del adquirente con la finalidad de seguir prestando los servicios objeto del tratamiento de datos. El nuevo responsable comunicará a los USUARIOS sus datos de identificación. La COMPAÑÍA manifiesta que informará a las autoridades de control competentes, y comunicará a los USUAURIOS el cambio de responsable en el momento en que se produzca.
            </p>
            <p className={cls.Typography_term}>
              <b>12.</b> La COMPAÑÍA podrá transferir sus datos personales a terceros asociados con la PLATAFORMA siempre y cuando el USUARIO hubiera aceptado expresamente la presente Política de Privacidad.
            </p>
            <p className={cls.Typography_term}>
              <b>13.</b> Botón de pagos: La COMPAÑÍA no almacena los datos de las tarjetas de crédito de los USUARIOS. No obstante, los datos de la tarjeta de crédito/débito (número y fecha de caducidad) se almacenan por el proveedor de servicios de pago escogido por la COMPAÑÍA, cuyas medidas de seguridad son elevadas en tanto es PCI DSS. Si el USUARIO solicita borrar los datos correspondientes a los medios de pago que introdujo en su perfil, el tercero proveedor de servicios de pago borrará dichos datos de sus servidores
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>V. Cookies:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> La COMPAÑÍA utiliza cookies para identicar a los USUARIOS que visitan la PLATAFORMA, recordar sus preferencias y recomendar servicios, así como para hacer un seguimiento del uso del SITIO WEB.
            </p>
            <p className={cls.Typography_term}>
              <b>2.</b> La COMPAÑÍA sólo podrá hacer uso de la información referente al USAUARIO contenida en las cookies derivadas de la instalación/utilización de la APLICACIÓN o el acceso al SITIO WEB, si el USUARIO lo consciente expresamente. Para tal efecto el USUARIO podrá acceder en cualquier momento a la Política de Privacidad que acepta al realizar el proceso de registro en la PLATAFORMA. Si no desea que la COMPAÑÍA use esta información, puede cambiar la conguración de las cookies en su navegador en cualquier momento.
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>VI.Tratamiento de Datos Personales:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> Los terceros proveedores de servicios de la COMPAÑÍA tendrán acceso a la información personal de los USUARIOS necesaria para realizar sus funciones, pero no podrán utilizarla para otros fines. Estos deberán tratar la información personal de conformidad con la presente Política de Privacidad y la legislación aplicable en la materia de protección de datos personales.
            </p>
            <p className={cls.Typography_term}>
              <b>2.</b> Los datos de carácter personal que la COMPAÑÍA recopile serán exclusivamente utilizados para el buen funcionamiento y manejo de la PLATAFORMA de acuerdo a los TÉRMINOS y CONDICIONES y las finalidades expuestas en la presente Política de Privacidad.
            </p>
            <p className={cls.Typography_term}>
              <b>3.</b> Los datos de los USUARIOS de la PLATAFORMA NOC NOC no se transmitirán a ningún tercero a excepción de que (i) sea necesario para la prestación de los SERVICIOS, en caso de que la COMPAÑÍA colabore con terceros (ii) cuando la autoridad competente o por el ministerio de la ley se requiera (para investigar, prevenir o tomar acciones relativas a acciones ilegales).
            </p>
            <p className={cls.Typography_term}>
              <b>4.</b> Los datos personales proporcionados por los USUARIOS se conservarán, mientras no se solicite su supresión por el interesado durante un plazo de 24 meses desde la última interacción.
            </p>
            <p className={cls.Typography_term}>
              <b>5.</b> Los USUARIOS en cualquier momento podrán retirar su consentimiento para el tratamiento de datos por parte de la COMPAÑÍA.
            </p>
            <p className={cls.Typography_term}>
              <b>6.</b> La COMPAÑÍA ha adoptado las medidas necesarias para mantener el nivel de seguridad requerido, según la naturaleza de los datos personales tratados y las circunstancias del tratamiento, con el objeto de evitar, en la medida de lo posible y siempre según el estado de la técnica, su alteración, pérdida, tratamiento o acceso no autorizado. Como se ha mencionado anteriormente, los datos personales facilitados no serán cedidos a terceros si los USUARIOS no hubieran aceptado la presente Política de Privacidad.
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>VII. Aceptación:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> Los USUARIOS al registrarse y llenar sus datos en la PLATAFORMA expresan su consentimiento de aceptación de la presente Política de Privacidad.
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>VIII. Modificación Política de Privacidad:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> En caso de que la COMPAÑÍA modifique la Política de Privacidad, esta notificará a los USUARIOS de la PLATAFORMA para comunicar los cambios efectuados, sobre todo en lo referente a cambio en el tipo de Datos Personales que se recogen, las finalidades del tratamiento de los datos personales y las comunicaciones a terceros.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);