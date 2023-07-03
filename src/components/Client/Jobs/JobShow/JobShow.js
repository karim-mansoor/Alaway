import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';

// Components
import {
  Grid,
  Modal,
} from 'material-ui';
import CancelBookingModal from '../CancelBookingModal/CancelBookingModal';
import Stars from './Stars';

// Actions
import * as actions from '../../../../store/actions';

// Css
import cls from './JobShow.css';

class JobShow extends Component {
  state = {
    openCancell: false,
  }

  handleClose = () => {
    this.setState({
      openCancell: false,
    });
  };
  
  handleOpen = () => {
    this.setState({
      openCancell: true,
    });
  }

  componentDidMount() {
    this.props.onDisableButton(localStorage.getItem('token'), this.props.job.id);
  }
  
  render() {
    let startedAt = null;
    let finishedAt = null;
    let finishedRecurrencyAt = null;
    let services = null;
    let frequency = null;
    let agents = null;
    let agentTitle = null;
    let button = null;
    let config = null;
    let cellPhone = null;
    if (this.props.job.attributes) {
      if (this.props.job.attributes.can_cancel) {
        button = (
          <div 
            className={cls.ButtonCancelJob}
            onClick={() => this.props.cancelled(localStorage.getItem('token'), this.props.job.id)}>
            Cancelar
          </div>
        )
      } else {
        button = (
          <div 
            className={cls.ButtonCancelJob}
            onClick={this.handleOpen}>
            Cancelar
          </div>
        )
      }
      
      if (this.props.job.attributes.status === 'completed') {
        button = null;
      }
      startedAt = moment(this.props.job.attributes.started_at).format('MMMM D-YYYY, h:mm a');
      finishedAt = moment(this.props.job.attributes.finished_at).format('h:mm a');
      finishedRecurrencyAt = moment(this.props.job.attributes.finished_recurrency_at).format('MMMM D-YYYY, h:mm a');
      if (this.props.job.attributes.frequency === 'one_time') {
        frequency = 'Una vez';
      } else if (this.props.job.attributes.frequency === 'fortnightly') {
        frequency = 'Quincenal';
      } else if (this.props.job.attributes.frequency === 'weekly') {
        frequency = 'Semanal';
      } else if (this.props.job.attributes.frequency === 'monthly') {
        frequency = 'Mensual';
      }
      if (this.props.job.attributes.agent === null) {
        agentTitle = this.props.job.attributes.proposals.data.length === 0 ? ('No hay Agentes Postulados'):('Agentes Postulados'),
        agents = this.props.job.attributes.proposals.data.length > 0 ?
          this.props.job.attributes.proposals.data.map(p => (
            <div className={cls.QouteWrapper}>
              <div className={cls.Qoute}>
                <div className={cls.QouteHeader}>
                  <Link 
                    className={cls.Link}
                    to={`/cliente/trabajo/${this.props.job.id}/agente/postulado/${p.id}`}>
                    <div className={cls.Avatar}>
                      <div className={cls.AgentAvatarCircle}>
                        {p.attributes.agent.data.attributes.avatar.url === null ? (
                          <div className={cls.AvatarInitials}>
                            {p.attributes.agent.data.attributes.first_name.charAt(0).toUpperCase()}{p.attributes.agent.data.attributes.last_name.charAt(0).toUpperCase()}
                          </div>
                        ) : (
                          <div className={cls.AvatarInitials} style={{backgroundImage: `url(${p.attributes.agent.data.attributes.avatar.url})`}}>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={cls.QouteName}>
                      <p>{p.attributes.agent.data.attributes.first_name} {p.attributes.agent.data.attributes.last_name}</p>
                    </div>
                  </Link>
                </div>
                <div className={cls.QouteDetails}>
                  <Grid container className={cls.Container}>
                    <Grid item className={cls.Items} xs={6}>
                      <Grid container justify="center">
                        <div className={cls.StarsWrapper}>
                          <Stars
                            agentRewiewsAverage={p.attributes.agent.data.attributes.rewiews_average}
                          />
                        </div>
                        <div className={cls.QouteDetailStats}>{p.attributes.agent.data.attributes.rewiews_count} opiniones</div>
                      </Grid>
                    </Grid>
                    <Grid item xs={6} className={cls.Items}>
                      <Grid className={cls.QuoteNumberHires} container justify="center">
                        <div>
                          <div className={cls.TpBody}>{p.attributes.agent.data.attributes.rewiews_count}</div>
                          <div className={cls.QouteDetailStats}>Veces Contratado</div>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>                      
                </div>
              </div>
              <div className={cls.ContenButton}>
                <div
                  onClick={(event) => this.props.accepted(event,localStorage.getItem('token'), this.props.job.id, p.id)}
                  className={cls.JobHire}>
                  Contratar
                </div>
                <Link
                  to={`/cliente/trabajo/${this.props.job.id}/agente/postulado/${p.id}`}
                  className={cls.JobHire}>
                  Ver perfil
                </Link>
              </div>
            </div>
          )) : 
          null
      } else {
        cellPhone = this.props.job.attributes.agent.cell_phone
        agentTitle = 'Agente Contratado';
        agents = (
          <div className={cls.QouteWrapper}>
            <div className={cls.Qoute}>
              <div className={cls.QouteHeader}>
                <div className={cls.Avatar}>
                  <div className={cls.AgentAvatarCircle}>
                  {this.props.job.attributes.agent.avatar.url === null ? (
                      <div className={cls.AvatarInitials}>
                        {this.props.job.attributes.agent.first_name.charAt(0).toUpperCase()}{this.props.job.attributes.agent.last_name.charAt(0).toUpperCase()}
                      </div>
                    ) : (
                      <div className={cls.AvatarInitials} style={{backgroundImage: `url(${this.props.job.attributes.agent.avatar.url})`}}>
                      </div>
                    )}
                  </div>
                </div>
                <div className={cls.QouteName}>
                  <p>{this.props.job.attributes.agent.first_name} {this.props.job.attributes.agent.last_name}</p>
                  <p>Celular: {cellPhone === null ? (''):(cellPhone)}</p>
                </div>
              </div>
              <div className={cls.QouteDetails}>
                <Grid container className={cls.Container}>
                  <Grid item className={cls.Items} xs={6}>
                    <Grid container justify="center">
                      <div className={cls.StarsWrapper}>
                        <Stars
                          agentRewiewsAverage={this.props.job.attributes.agent_rewiews_average}
                        />
                      </div>
                      <div className={cls.QouteDetailStats}>{this.props.job.attributes.agent_rewiews_count} opiniones</div>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} className={cls.Items}>
                    <Grid className={cls.QuoteNumberHires} container justify="center">
                      <div>
                        <div className={cls.TpBody}>{this.props.job.attributes.agent_rewiews_count}</div>
                        <div className={cls.QouteDetailStats}>Veces Contratado
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>                      
              </div>
            </div>
            {this.props.disableButtonjob.can_review === false ? (
              <Link
                to={`/cliente/trabajo/${this.props.job.id}/agente/contratado`}
                className={cls.JobHireContratado}>
                VER PERFIL
              </Link>
            ):(
              <div>
                <Link
                  to={`/cliente/trabajo/${this.props.job.id}/agente/contratado`}
                  className={cls.JobHire}>
                  VER PERFIL
                </Link>
                <Link
                  to={`/cliente/trabajo/${this.props.job.id}/agente/calificar`}
                  className={cls.JobHire}>
                  CALIFICAR
                </Link>
              </div>
            )}
          </div>
        );
      }
      config = (this.props.job.attributes.config)
      services = (
        <Grid container className={cls.Background} justify="center">
          <div className={cls.JobDetailHeader} style={{backgroundImage: `url(${this.props.job.attributes.service_type_image.url})`}}>
          </div>
          <div className={cls.JobDetailsCard}>
            <div className={cls.JobDetailsAvatar}>
              <div className={cls.Avatar}>
                <div className={cls.AvatarCircle}>
                {this.props.job.attributes.customer.avatar.url === null ? (
                  <div className={cls.AvatarInitials}>
                    {this.props.job.attributes.customer.first_name.charAt(0).toUpperCase()}{this.props.job.attributes.customer.last_name.charAt(0).toUpperCase()}
                  </div>
                ) : (
                  <div className={cls.AvatarInitials} style={{backgroundImage: `url(${this.props.job.attributes.customer.avatar.url})`}}>
                  </div>
                )}
                </div>
              </div>
            </div>
            <p className={cls.JobDetailsCustomerName}>
              {this.props.job.attributes.customer.first_name.replace(/\b\w/g, l => l.toUpperCase())} {this.props.job.attributes.customer.last_name.replace(/\b\w/g, l => l.toUpperCase())}
            </p>
            <p className={cls.JobDetailsCustomerAddress}>
              {this.props.job.attributes.property.data.attributes.p_street} {this.props.job.attributes.property.data.attributes.number} y {this.props.job.attributes.property.data.attributes.s_street}
            </p>
            <p className={cls.JobDetailsCustomerAddress}>
              {startedAt}/
              {finishedAt === 'Invalid date' ? (''):(finishedAt)}<br/>
              {finishedRecurrencyAt === 'Invalid date' ? (''):(finishedRecurrencyAt)}
            </p>
          </div>
          <div className={cls.JobDetailsServices}>
            <dl>
              <dt className={cls.TpWeightBold}>Servicios contratados</dt>
              <dd>
              {this.props.job.attributes.job_details.map(detail => {
                if (detail.service.type_service === 'base') {
                  return detail.service.name
                }
                return null;
              })}
              </dd>
              <dt className={cls.TpWeightBold}>Precio</dt>
              <dd>$ {this.props.job.attributes.total.toFixed(2)}</dd>
              {this.props.job.attributes.job_details.length > 1 ? (
                <dt className={cls.TpWeightBold}>Servicios Adicionales</dt>
              ):(
                <dt className={cls.TpWeightBold}>Sin Servicios Adicionales</dt>
              )}
              <dd>
                <ul className={cls.Ul}>
                  {this.props.job.attributes.job_details.map(detail => {
                    if (detail.service.type_service === 'parameter') {
                      return (
                        <div key={detail.service.id} className={cls.jobExtraServices}>{detail.service.name} x {detail.value}</div>
                      )
                    }
                    if (detail.service.type_service === 'addon') {
                      return (
                        <div key={detail.service.id} className={cls.jobExtraServices}>{detail.service.name} x {detail.value}</div>
                      )
                    };
                  })}
                </ul>
              </dd>
              <dt className={cls.TpWeightBold}>Número</dt>
              <dd>{this.props.job.attributes.property.data.attributes.phone}</dd>
              <dt className={cls.TpWeightBold}>Frecuencia</dt>
              <dd>{frequency}</dd> 
              <dt className={cls.TpWeightBold}>Detalles Adicionales</dt>
              <dd>
                {this.props.job.attributes.details === '' ? 'Sin detalles adicionales' : this.props.job.attributes.details}
              </dd>
              {button}
            </dl>
          </div>
        </Grid>
      );
    }
    return (
      <div>
        <Grid container className={cls.JobShow}>
          <Grid item xs={12} md={4}>
            {services}
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container className={cls.JobAgents}>
              <div className={cls.JobAgentsHeader}>
                <h2 className={cls.Title}>{agentTitle}</h2>
              </div>
              <div className={cls.JobAgentWrapper}>
                {agents}
              </div>
            </Grid> 
          </Grid>
        </Grid>
        <Modal
          open={this.state.openCancell}
          onClose={this.handleClose}
        >
          <div className={cls.Modal}>
            <CancelBookingModal
              config={config}
              close={this.handleClose}
              cancelled={this.props.cancelled}
              job_id={this.props.job.id} />
          </div>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    disableButtonjob: state.disableButton.disableButton,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDisableButton: (token, job_id) => dispatch(actions.disableButton(token, job_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobShow);