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
    <div className={classes.root} id="terms">
      <Grid container justify="center">
        <Grid item xs={12} sm={10}>
          <div>
            <h1 className={cls.textTitle}><small className={cls.smallTitle}>---------------</small> Términos y Condiciones <small className={cls.smallTitle}>---------------</small></h1>
            <p className={classes.paper}>Los presentes términos y condiciones generales regulan el uso de la plataforma digital NOC NOC, compuesta por un sitio web www.nocnoc.com.ec y una aplicación móvil. La plataforma digital es propiedad de HOPESERV CIA LTDA, una compañía constituida bajo la leyes de la República del Ecuador, con Registro Único de Contribuyentes No. 1792851300001, domiciliada en la ciudad de Quito, Ecuador.</p>
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
              Son los CLIENTES y AGENTES autorizados por la COMPAÑÍA que utilizan la plataforma digital NOC NOC, a través del Internet mediante la APLICACIÓN o SITIO WEB.
            </p>
            
            <h3 className={cls.Content} variant="headline" gutterBottom>II. Uso de la PLATAFORMA:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> Para hacer uso del SITIO WEB y la APLICACIÓN los USUARIOS deberán llenar los formularios de registro correspondientes a los de CLIENTE o de AGENTE respectivamente. Los datos personales y documentos de acreditación solicitados deben ser completados en su totalidad con información verdadera, exacta y precisa, la COMPAÑÍA se reserva el derecho para aceptar o rechazar a los USUARIOS, así como para establecer los requisitos e información requerida a los CLIENTES Y AGENTES para usar la PLATAFORMA.
            </p>
            <p className={cls.Typography_term}>
              <b>2.</b> Una vez que los USUARIOS se registren y sean autorizados por la COMPAÑÍA podrán hacer uso de la PLATAFORMA.
            </p>
            <p className={cls.Typography_term}>
              <b>3.</b> El USUARIO es responsable de su usuario y contraseña, si por alguna circunstancia los USUARIOS olvidan su contraseña podrán restablecerla realizando validaciones mediante la opción de “olvido su contraseña”. Además, si los USUARIOS sospechan de un uso indebido de su cuenta por terceros no autorizados deberán informar inmediatamente a la COMPAÑÍA, a través de los canales de atención para proceder con el bloqueo de la cuenta. No obstante, el USUARIO será responsable por los daños y pagos de las operaciones realizadas con anterioridad a la notificación a la COMPAÑÍA sobre el uso no autorizado.
            </p>
            <p className={cls.Typography_term}>
              <b>4.</b> Los USUARIOS al ingresar y usar la APLICACIÓN o SITIO WEB reconocen y ratifican que han leído detenidamente y aceptado los TÉRMINOS y CONDICIONES de la PLATAFORMA y se comprometen a cumplir con las cláusulas estipuladas en el presente instrumento. De igual manera, los USUARIOS reconocen y aceptan que el acceso y uso de la PLATAFORMA estará sujeto a los TÉRMINOS y CONDICIONES que se encuentren vigentes al momento de acceder a la misma. La COMPAÑÍA se reserva el derecho de modificar y/o cambiar en cualquier momento los presentes TÉRMINOS y CONDICIONES. En el caso de que los USUARIOS no acepten estas condiciones no podrán acceder, utilizar, ni contratar los SERVICIOS ofrecidos en la PLATAFORMA. Los USUARIOS podrán notificar a la COMPAÑÍA cualquier inquietud, duda o disconformidad descritos en en los presentes TÉRMINOS y CONDICIONES mediante los canales de atención disponibles.
            </p>
            <p className={cls.Typography_term}>
              <b>5.</b> La COMPAÑÍA se reserva el derecho de dar de baja, suspender, interrumpir o finalizar la operación de la APLICACIÓN o SITIO WEB en cualquier momento.
            </p>
            
            <h3 className={cls.Content} variant="headline" gutterBottom>III. Mecanismo de funcionamiento de la PLATAFORMA:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> Los CLIENTES registrados en la PLATAFORMA podrán contratar los SERVICIOS, quienes agendarán el servicio, estableciendo el lugar, fecha y hora donde se prestará el mismo. La PLATAFORMA calculará automáticamente la tarifa del servicio, la cual será pagada por los CLIENTES mediante las tarjetas de débito, crédito registradas en el usuario, o por transferencia bancaria; una vez que el servicio sea prestado por el AGENTE.
            </p>
            <p className={cls.Typography_term}>
              <b>2.</b> Una vez que los CLIENTES han creado un trabajo, este es notificado a los AGENTES. Los diferentes AGENTES se postularán al trabajo, y el CLIENTE deberá elegir a los AGENTES de su preferencia para la prestación del SERVICIO.
            </p>
            <p className={cls.Typography_term}>
              <b>3.</b> Los CLIENTES son libres para escoger al AGENTE de su preferencia; asimismo, los AGENTES tienen plena libertad para postularse al trabajo que ellos consideren oportuno, no están obligados a postularse a ningún trabajo, pues son profesionales prestadores de servicios independientes.
            </p>
            <p className={cls.Typography_term}>
              <b>4.</b> En el momento en que el servicio ha sido concluido exitosamente, el AGENTE deberámcerrar el trabajo en la PLATAFORMA, se realizará automáticamente el cobro del servicio contratado al CLIENTE y se enviará la respectiva factura electrónica.
            </p>
            <p className={cls.Typography_term}>
              <b>5.</b> Los CLIENTES podrán calificar al AGENTE y comentar sobre su servicio. Igualmente, los AGENTES podrán calificar a sus CLIENTES y comentar sobre ellos.
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>IV.Pago y Facturación:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> Las tarifas a cobrarse por la prestación del servicio serán calculadas de acuerdo a la selección del SERVICIO por parte del CLIENTE, y serán detalladas previamente al agendamiento del servicio. Una vez que el CLIENTE agenda y acepta el servicio, este queda programado en la APLICACIÓN y el SITIO WEB. Las tarifas y sus actualizaciones, en los SERVICIOS, estarán disponibles para su cálculo automático en la PLATAFORMA y podrán sujetarse a modificaciones a discreción de la COMPAÑÍA.
            </p>
            <p className={cls.Typography_term}>
              <b>2.</b> Los CLIENTES aceptan que en días especiales como son los sábados y domingos, y los feriados se cobrará un recargo adicional en la tarifa del SERVICIO; el recargo será detallado en el precio final que le aparece al CLIENTE al momento de solicitar el SERVICIO.
            </p>
            <p className={cls.Typography_term}>
              <b>3.</b> La PLATAFORMA NOC NOC se reserva el derecho de modificar, ampliar, reducir, establecer o eliminar cualquier modalidad de pago, según estime conveniente para el correcto funcionamiento del SERVICIO.
            </p>
            <p className={cls.Typography_term}>
              <b>4.</b> Las tarifas aplicables al SERVICIO contratado serán cobradas al CLIENTE una vez que el servicio se ha prestado; dichas tarifas serán cobradas de forma automática a través de las tarjetas de crédito o débito registradas en los usuarios de los CLIENTES. La PLATAFORMA NOC NOC se reserva el derecho de realizar una validación en el método de pago y solicitar la pre-autorización para el cobro a la entidad emisora de la tarjeta de crédito o débito acorde a la información proporcionada por el CLIENTE.
            </p>
            <p className={cls.Typography_term}>
              <b>5.</b> Será considerado como uso abusivo la creación de diferentes usuarios que compartan un mismo método de pago electrónico con otros USUARIOS con el fin de beneficiarse indebidamente de descuentos, cupones e invitaciones. La COMPAÑÍA se reserva el derecho de bloquear o eliminar dichos usuarios. Las invitaciones, cupones y descuentos estarán sujetos a las condiciones establecidas por la COMPAÑÍA y no podrán ser usadas una vez que hayan caducado. Además, la COMPAÑÍA podrá anular, eliminar o reducir el valor de los descuentos, cupones, invitaciones y promociones en cualquier momento.
            </p>
            <p className={cls.Typography_term}>
              <b>6.</b> Una vez que el AGENTE prestó el servicio contratado, se cobrará al CLIENTE la tarifa acordada y se le enviará la respectiva factura electrónica con los datos proporcionados por el mismo en la PLATAFORMA.
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>V. Derechos y Obligaciones de los CLIENTES:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> Los CLIENTES deberán registrarse con un usuario y contraseña en la APLICACIÓN o en el SITIO WEB para poder contratar los SERVICIOS mediante la PLATAFORMA.
            </p>
            <p className={cls.Typography_term}>
              <b>2.</b> Los CLIENTES podrán calificar al AGENTE una vez que el servicio ha sido prestado.
            </p>
            <p className={cls.Typography_term}>
              <b>3.</b> Los CLIENTES deberán pagar las tarifas acordadas al momento de la contratación del servicio.
            </p>
            <p className={cls.Typography_term}>
              <b>4.</b> Los CLIENTES deberán utilizar un lenguaje adecuado y respetuoso en los comentarios realizados a los AGENTES; la COMPAÑÍA se reserva el derecho de censurar los contenidos subidos a la PLATAFORMA que considere sean ofensivos, inapropiados o afecten a las buenas costumbres.
            </p>
            <p className={cls.Typography_term}>
              <b>5.</b> Los CLIENTES en el lugar en donde se prestará el servicio, deberán salvaguardar y poner en sitios seguros sus objetos de valor, tales como dinero, joyas, papeles personales, adornos costosos, y otros de la misma naturaleza. La COMPAÑÍA no se responsabilizará por la pérdida o deterioro de estos objetos.
            </p>
            <p className={cls.Typography_term}>
              <b>6.</b> Los CLIENTES deberán prestar las facilidades necesarias al AGENTE para la prestación del SERVICIO.
            </p>
            <p className={cls.Typography_term}>
              <b>7.</b> Los CLIENTES no pueden realizar acuerdos diferentes a los realizados a través de la PLATAFORMA con los AGENTES; tampoco solicitarán la ejecución de otros servicios distintos a los contratados en la PLATAFORMA.
            </p>
            <p className={cls.Typography_term}>
              <b>8.</b> Los CLIENTES no podrán presentar ninguna acción o reclamo de carácter laboral a los AGENTES.
            </p>
            <p className={cls.Typography_term}>
              <b>9.</b> Los CLIENTES deberán contratar el SERVICIO 24 horas antes de la fecha y hora señaladas para el trabajo creado; si el CLIENTE desea cancelar cuatro horas antes del servicio contratado, se le cobrará una penalización impuesta por la COMPAÑÍA de 5 USD, en la tarjeta de débito o crédito que fue registrada con el usuario del CLIENTE. La COMPAÑÍA se reserva el derecho de modificar, cambiar o eliminar el valor de la penalización.
            </p>
            <p className={cls.Typography_term}>
              <b>10.</b> En los casos en que los CLIENTES inicien cualquier tipo de reclamo o acción legal contra el AGENTE, estos eximen de toda responsabilidad a la COMPAÑÍA, a sus directores, socios, gerentes, representantes, apoderados, empleados y operarios.
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>VI.Derechos y Obligaciones de los AGENTES:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> Los AGENTES deben registrarse con un usuario y contraseña en la APLICACIÓN o en el SITIO WEB para postular a los SERVICIOS mediante la PLATAFORMA.
            </p>
            <p className={cls.Typography_term}>
              <b>2.</b> Los AGENTES podrán calificar a los CLIENTES una vez que el servicio se prestó.
            </p>
            <p className={cls.Typography_term}>
              <b>3.</b> Los AGENTES deberán prestar su servicio en el lugar, hora y fecha establecida, con la debida diligencia y cumpliendo los estándares de calidad impartidos por la COMPAÑÍA.
            </p>
            <p className={cls.Typography_term}>
              <b>4.</b> Los AGENTES deberán utilizar un lenguaje adecuado y respetuoso en los comentarios realizados a los CLIENTES y al momento de prestar sus servicios; la COMPAÑÍA se reserva el derecho de censurar los contenidos subidos a la PLATAFORMA que considere sean ofensivos, inapropiados o afecten a las buenas costumbres.
            </p>
            <p className={cls.Typography_term}>
              <b>5.</b> Los AGENTES son profesionales que prestan su servicios en forma libre y voluntaria a los CLIENTES, en ningún caso la relación entre los AGENTES con los CLIENTES o con la COMPAÑÍA se considerará o interpretará como una relación laboral. Los AGENTES renuncian a realizar un reclamo o interponer una acción de carácter laboral contra los CLIENTES o la COMPAÑÍA.
            </p>
            <p className={cls.Typography_term}>
              <b>6.</b>En caso de que los AGENTES, por caso fortuito, fuerza mayor u otras situaciones no puedan prestar el servicio contratado deberán comunicar inmediatamente a la COMPAÑÍA.
            </p>
            <p className={cls.Typography_term}>
              <b>7.</b> Los AGENTES son los responsables directos por la calidad y efectividad en la prestación de los servicios.
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>VII. Responsabilidad y Garantías de la COMPAÑÍA:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> La COMPAÑÍA no será responsable por los daños o perjuicios causados por fallas en el sistema de la PLATAFORMA, en la APLICACIÓN o SITIO WEB; tampoco será responsable por cualquier tipo de virus que pudiera afectar el equipo del USUARIO como consecuencia de su acceso a la PLATAFORMA. Al presentarse problemas técnicos o fallas en el Internet que deshabiliten la PLATAFORMA, la COMPAÑÍA realizará sus mejores esfuerzos para solucionar el problema; sin que esto implique que asume responsabilidad al respecto.
            </p>
            <p className={cls.Typography_term}>
              <b>2.</b> La COMPAÑÍA otorga a los USUARIOS un seguro que permitirá cubrir posibles accidentes que puedan suceder durante la prestación del servicio contratado, este seguro se aplicará de acuerdo a las pólizas vigentes al momento de la contratación del servicio, aplica para daños en muebles, decoración, cuadros, electrodomésticos, ropa u otras cosas determinadas en la póliza. El seguro aplicará única y exclusivamente a daños ocurridos durante la prestación del servicio, en ningún caso aplicará a daños anteriores o posteriores a la prestación del servicio. La COMPAÑÍA se reserva el derecho de cambiar la póliza del seguro y la cobertura del mismo.
            </p>
            <p className={cls.Typography_term}>
              <b>3.</b> La COMPAÑÍA no será responsable frente a los CLIENTES ni frente a terceros por la no prestación de un SERVICIO contratado con un AGENTE. En ningún caso y bajo ninguna circunstancia, la COMPAÑÍA, sus directores, empleados, agentes o accionistas serán responsables por los daños o perjuicios de cualquier tipo que surjan o de alguna manera se relacionen con el uso o imposibilidad de usar la PLATAFORMA.
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>VIII. Acceso y Restricciones:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> El acceso a la PLATAFORMA está limitado a USUARIOS que sean mayores de 18 años. Los USUARIOS no podrán autorizar o delegar a personas menores de 18 años el uso de su cuenta, ni podrán permitir que terceras personas tengan acceso a la PLATAFORMA a través de su usuario. Los USUARIOS aceptan que el acceso y uso de la APLICACIÓN o SITIO WEB es libre y voluntario bajo su exclusiva responsabilidad.
            </p>
            <p className={cls.Typography_term}>
              <b>2.</b> La COMPAÑÍA se reserva el derecho de suspender temporal o definitivamente el acceso a la PLATAFORMA de los USUARIOS.
            </p>
            <p className={cls.Typography_term}>
              <b>3.</b> Los USUARIOS no deberán utilizar la APLICACIÓN y SITIO WEB para realizar actividades ilegales, fraudulentas o que atenten la seguridad e integridad de los AGENTES. Los USUARIOS al acceder a la APLICACÓN o SITIO WEB, harán un uso adecuado y lícito de conformidad con la legislación aplicable y los presentes TÉRMINOS y CONDICIONES.
            </p>
            <p className={cls.Typography_term}>
              <b>4.</b> Los USUARIOS se comprometen a no atentar contra la APLICACIÓN o SITIO WEB sobrecargando, modificando o provocando daños en los sistemas de la PLATAFORMA o en la de los proveedores de la COMPAÑÍA; tampoco podrán introducir o difundir virus informáticos o cualesquiera de esta naturaleza, que sean susceptibles de causar daños en los sistemas de la PLATAFORMA.
            </p>
            <p className={cls.Typography_term}>
              <b>5.</b> Los USUARIOS únicamente podrán acceder a la APLICACIÓN y SITIO WEB a través de los medios y mecanismos autorizados. La COMPAÑÍA no será responsable cuando los USARIOS no dispongan de un dispositivo compatible con la PLATAFORMA o, en casos en que hayan descargado una versión incompatible con la APLICACIÓN.
            </p>
            <p className={cls.Typography_term}>
              <b>6.</b> La COMPAÑÍA se reserva el derecho a restringir el uso de la PLATAFORMA a los USUARIOS; y a recuperar el importe de promociones, cupones, invitaciones y descuentos por un uso inadecuado, ilícito o abusivo de los mismos, por parte de los USUARIOS.
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>IX.Aceptación:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> Los USUARIOS (CLIENTES y AGENTES) al ingresar y hacer uso de la PLATAFORMA, APLICACIÓN y SITIO WEB reconocen y ratifican que han leído y aceptado los presentes TÉRMINOS y CONDICIONES y se comprometen a cumplir con todas sus cláusulas. Además, los USUARIOS reconocen y aceptan que la COMPAÑÍA a través de la PLATAFORMA NOC NOC únicamente es un intermediario en el pago y facilitador en la comunicación entre CLIENTES y AGENTES para la contratación de SERVICIOS; en ningún caso la relación entre la COMPAÑÍA con los AGENTES o CLIENTES podrá considerarse como una relación laboral, societaria, cuentas en participación u asociación. Los USUARIOS renuncian a interponer una acción o reclamación a la COMPAÑÍA, sus socios, directores y trabajadores, sobre las relaciones antes mencionadas.
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>X. Propiedad Intelectual:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> Los USUARIOS, CLIENTES y AGENTES reconocen y aceptan que todos los derechos de propiedad intelectual sobre la información, contenidos y cualesquier otro elemento que se encuentre en la PLATAFORMA, la APLICACIÓN y el SITIO WEB, incluyendo pero sin limitarse a marcas, logotipos, nombres comerciales, textos, imágenes, gráficos, diseños, sonidos, bases de datos, reportes, software, diagramas de flujo, presentación, códigos, audio y vídeo, pertenecen a la COMPAÑÍA . Los USUARIOS no podrán hacer uso indebido ni reproducir, descargar, copiar total o parcialmente los contenidos de la PLATAFORMA, ni utilizar marcas o logos de la COMPAÑÍA sin autorización previa y por escrito de la misma. El uso del SITIO WEB no otorga a los USUARIOS propiedad de ninguno de los contenidos, códigos, datos o materiales a los que puedan acceder en o a través del SITIO WEB o la APLICACIÓN, especialmente lo referente a derechos de propiedad intelectual.
            </p>
            <p className={cls.Typography_term}>
              <b>2.</b> Los USUARIOS quedan expresamente prohibidos de distribuir, publicar o explotar de cualquier forma la PLATAFORMA sin previa autorización por escrito de la COMPAÑÍA. Además, no intentarán u obtendrán acceso no autorizado a los sistemas de cómputo, materiales o información sin previa autorización de la COMPAÑÍA.
            </p>
            <p className={cls.Typography_term}>
              <b>3.</b> Los USUARIOS no podrán reproducir, modificar, preparar obras derivadas; distribuir, licenciar, arrendar, revender, transferir, exhibir públicamente, transmitir, retransmitir o explotar de otra forma los contenidos y los SERVICIOS disponibles en la PLATAFORMA; a menos que la COMPAÑÍA lo autorice expresamente por escrito.
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>XI.Protección de Datos Personales:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> Los datos e información personal proporcionados por los USUARIOS a la PLATAFORMA en los formularios de registro, tendrán el carácter de confidenciales. La información compartida por los USUARIOS está sujeta a la política de privacidad determinada por la COMPAÑÍA. La información será utilizada únicamente con fines de estadística, campañas y gestión de la PLATAFORMA.
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>XII. Notificaciones:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> La COMPAÑÍA mediante la PLATAFORMA podrá realizar notificaciones o campañas para los USUARIOS, a través de notificaciones generales (PUSH) en la APLICACIÓN; correos electrónicos registrados por los USUARIOS (Mailing); mediante SMS o llamadas telefónicas; cartas escritas, y otros medios que considere necesarios.
            </p>

            <h3 className={cls.Content} variant="headline" gutterBottom>XIII. Ley aplicable y Resolución de Conflictos:</h3>
            <p className={cls.Typography_term}>
              <b>1.</b> La Ley aplicable es la vigente en la República del Ecuador al momento de la celebración del presente contrato.
            </p>
            <p className={cls.Typography_term}>
              <b>2.</b> Las Partes someterán toda controversia, diferencia o conflicto derivado de estos TÉRMINOS y CONDICIONES, a un proceso de mediación obligatorio asistido por un mediador del Centro de Arbitraje y Mediación de la Cámara de Comercio de Quito. En el evento de que el conflicto no fuere resuelto o que éste demorase más de 60 días calendario, las partes renuncian a la jurisdicción ordinaria y someterán la controversia para su resolución a un proceso arbitral ante un Tribunal de Arbitraje de la Cámara de Comercio de Quito, que se sujetará a lo dispuesto en la Ley de Arbitraje y Mediación, el Reglamento del Centro y a las siguientes normas:
              <p className={cls.Typography_term_sub}>
                <b>2.1</b> El Tribunal será seleccionado conforme a las disposiciones de la Ley de Arbitraje y Mediación y el Reglamento de la Cámara de Comercio de Quito.
              </p>
              <p className={cls.Typography_term_sub}>
                <b>2.2</b> Para la ejecución de medidas cautelares el Tribunal Arbitral estará facultado para solicitar de los funcionarios públicos, judiciales, policiales y administrativos su cumplimiento, sin que sea necesario recurrir a juez ordinario alguno.
              </p>
              <p className={cls.Typography_term_sub}>
                <b>2.3</b> El Tribunal estará integrado por un único árbitro. Las Partes elegirán de común acuerdo al árbitro de la Lista del Centro de Arbitraje y Mediación de la Cámara de Comercio de Quito.
              </p>
              <p className={cls.Typography_term_sub}>
                <b>2.4</b> El procedimiento arbitral será en Derecho y confidencial en todas sus etapas.
              </p>
              <p className={cls.Typography_term_sub}>
                <b>2.5</b> Las partes renuncian a la jurisdicción ordinaria. Se obligan a acatar el laudo que expida el Tribunal Arbitral y se comprometen a no interponer ningún tipo de recurso contra el laudo arbitral.
              </p>
              <p className={cls.Typography_term_sub}>
                <b>2.6</b> El lugar de arbitraje será el Centro de Arbitraje y Mediación de la Cámara de Comercio de Quito.
              </p>
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