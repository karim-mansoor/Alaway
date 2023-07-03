// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import { withStyles } from 'material-ui/styles';

// Components
import {
  Card,
  CardHeader,
  Grid,
  Button,
} from 'material-ui';

// Css
import cls from './CardJob.css';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 1,
  },
});

const jobPostulated = ( props ) => {
  let service_base = null;
  let frequency = null;
  let services_addon = null;
  let services_parameter = null;
  let propertyName = null;
  let propertyPStreet = null;
  let propertySStreet = null;
  let propertyStartedAt = null;
  let title = null;
  let propertyFinishedAt = null;
  props.job.attributes.job_details.forEach(j => {
    if (j.service.type_service === 'base') {
      service_base = j.service.name;
    };
  });
  services_addon = props.job.attributes.job_details.map(j => {
    if (j.service.type_service === 'addon') {
      title = "Servicios Adicionales"
      return (
        <div key={j.id} className={cls.jobExtraServices}>{j.service.name}</div>
      );
    };
    return null;
  });
  services_parameter = props.job.attributes.job_details.map(j => {
    if (j.service.type_service === 'parameter') {
      title = "Servicios"
      return (
        <div key={j.id} className={cls.jobExtraServices}>{j.service.name}</div>
      );
    };
    return null;
  });
  if (props.job.attributes.frequency === 'one_time') {
    frequency = 'Una vez';
  } else if (props.job.attributes.frequency === 'weekly') {
    frequency = 'Semanal';
  } else if (props.job.attributes.frequency === 'fortnightly') {
    frequency = 'Quincenal';
  } else if (props.job.attributes.frequency === 'monthly') {
    frequency = 'Mensual';
  };
  if (props.job) {
    propertyName = props.job.attributes.property.data.attributes.name
    propertyPStreet = props.job.attributes.property.data.attributes.p_street
    propertySStreet = props.job.attributes.property.data.attributes.s_street
    propertyStartedAt = props.job.attributes.started_at
    propertyFinishedAt = props.job.attributes.finished_at
  }
  return (
    <Grid container justify="center">
      <Grid className={cls.Item} item xs={8}>
        <Card className={cls.CardBorder}>
          <Grid container alignItems="center">
            <Grid item xs={12}>
              <CardHeader
                className = {cls.sinPadding}
                avatar = {
                  props.job.attributes.customer.avatar.url === null ? (
                    <div className={cls.siAgent}>{props.job.attributes.customer.first_name.charAt(0).toUpperCase()}{props.job.attributes.customer.last_name.charAt(0).toUpperCase()}</div>
                  ) : (
                    <div className={cls.avatarHolder}>
                      <img className={cls.noAgent} src={props.job.attributes.customer.avatar.url} alt="profile"></img>
                    </div>
                  )
                }
                title={
                  <div className={cls.agentDetails}>
                    <p className={cls.jobAgent}>{props.job.attributes.customer.first_name} {props.job.attributes.customer.last_name}</p>
                    <span className={`${cls.PriceNo} ${cls.jobPrice}`}>${props.job.attributes.total.toFixed(2)}</span>
                  </div>
                }
              />
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={8}>
              <Grid container>
                <div className={cls.jobBodyWrapper}>
                  <div className={cls.jobServicesWrapper}>
                    <p className={cls.jobService}>{service_base}</p>
                    <div className={cls.jobAddress}>
                      <svg className={`${cls.MarginIcon} ${"job-icon"}`} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><path d="M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.993 0C4.995 5.135 6.176 3 9.001 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.995 9.021 4.995 7.25zM8.91 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5"></path></svg>
                      {propertyName}, {propertyPStreet} y {propertySStreet}
                    </div>
                    <div className={cls.jobAddress}>
                      <svg className={`${cls.MarginIcon} ${"job-icon"}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="18" height="18" viewBox="0 0 18 18"><path fill-rule="evenodd" d="M9 5.25a.75.75 0 0 0-.75.75v2.25H6a.75.75 0 0 0 0 1.5h3.75V6A.75.75 0 0 0 9 5.25M9 15c-3.309 0-6-2.691-6-6s2.691-6 6-6c3.31 0 6 2.691 6 6s-2.69 6-6 6M9 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8"></path></svg>
                      {moment(propertyStartedAt).format('MMMM D YYYY h:mm a')}/
                      {moment(propertyFinishedAt).format('h:mm a')}
                    </div>  
                    <div className={cls.jobDetails}>
                      <p className={cls.jobService}>{title}</p>
                      {services_parameter}
                      {services_addon}
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} className={cls.TotalContainer}>
              <Grid container className={cls.TotalMargin} justify="center">
                <div className={cls.agentDetails}>
                  <span className={`${cls.PriceSi} ${cls.jobPrice}`}>${props.job.attributes.total.toFixed(2)}</span>
                </div>
                <Grid container alignItems="flex-end">
                  <Grid className={`${cls.Border} ${cls.ViewDetails}`} item xs={12}>
                    <Button className={cls.Button} component={Link} to={`/agente/trabajo/${props.job.id}`} >VER DETALLES</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(jobPostulated);