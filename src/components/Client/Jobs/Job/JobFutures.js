import React from 'react';
import {
  Link,
} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';

// Components
import {
  Grid,
  Card,
  CardHeader,
  Button,
} from 'material-ui';

// Css
import cls from './JobFutures.css';

moment.locale('es');

const job = props => {
  let services = null;
  let addon = null;
  let parameter = null;
  if (props.job_details) {
    services = props.job_details.map(detail => {
      if (detail.service.type_service === 'base') {
        return detail.service.name
      }
      return null;
    });
    addon = props.job_details.map(detail => {
      if (detail.service.type_service === 'addon') {
        return (
          <div key={detail.id} className={cls.jobExtraServices}>{detail.service.name} x {detail.value}</div>
        );
      }
      return null;
    })
    parameter = props.job_details.map(detail => {
      if (detail.service.type_service === 'parameter') {
        return (
          <div key={detail.service.id} className={cls.jobExtraServices}>{detail.service.name} x {detail.value}</div>
        );
      }
      return null;
    })
  }
  let name = props.agent ? props.agent.first_name + " " + props.agent.last_name :
    <div className={cls.agentDetails}>
      <p className={cls.jobAgent}>Sin agente asignado</p>
    </div>;
  return (
    <Grid className={cls.Item} item xs={12} sm={12} md={6}>
      <Card className={cls.CardBorder}>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <CardHeader
              className = {cls.sinPadding}
              avatar = {
                props.agent == null ? (
                  <div className={cls.avatarHolder}>
                    <div className={cls.noAgent}>?</div>
                  </div>
                ) : (
                  props.agent.avatar.url == null ? (
                    <div className={cls.avatarHolder}>
                      <div className={cls.siAgent}>{props.agent.first_name.toUpperCase().charAt(0)}{props.agent.last_name.toUpperCase().charAt(0)}</div>
                    </div>
                  ) : (
                    <div className={cls.avatarHolder}>
                      <img className={cls.noAgent} src={props.agent.avatar.url} alt="profile"></img>
                    </div>
                  )
                )
              }
              title={
                <div className={cls.agentDetails}>
                  <p className={cls.jobAgent}>{name}</p>
                  <span className={cls.jobPrice}>${props.total.toFixed(2)}</span>
                </div>
              }
            />
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Grid container>
              <div className={cls.jobBodyWrapper}>
                <div className={cls.jobServicesWrapper}>
                  <p className={cls.jobService}>{services}</p>
                  <div className={cls.jobAddress}>
                    <svg className={`${cls.MarginIcon} ${"job-icon"}`} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><path d="M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.993 0C4.995 5.135 6.176 3 9.001 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.995 9.021 4.995 7.25zM8.91 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5"></path></svg>
                    {props.property.data.attributes.name}, {props.property.data.attributes.p_street} y {props.property.data.attributes.s_street}
                  </div>
                  <div className={cls.jobAddress}>
                    <svg className={`${cls.MarginIcon} ${"job-icon"}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="18" height="18" viewBox="0 0 18 18"><path fill-rule="evenodd" d="M9 5.25a.75.75 0 0 0-.75.75v2.25H6a.75.75 0 0 0 0 1.5h3.75V6A.75.75 0 0 0 9 5.25M9 15c-3.309 0-6-2.691-6-6s2.691-6 6-6c3.31 0 6 2.691 6 6s-2.69 6-6 6M9 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8"></path></svg>
                    {moment(props.startedAt).format('MMMM D YYYY h:mm a')}/
                    {moment(props.finishedAt).format('h:mm a')}
                  </div>
                  {parameter}
                  <div className={cls.jobDetails}>
                    {addon}
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} className={cls.TotalContainer}>
            <Button className={cls.Button} component={Link} to={`/cliente/trabajo/${props.id}`}>
              Ver Detalles
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default job;