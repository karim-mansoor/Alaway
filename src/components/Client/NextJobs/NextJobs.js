import React from 'react';

// Components
import {
  Grid,
  Typography,
} from 'material-ui';
import Job from '../Jobs/Job/Job';

// Css
import cls from './NextJobs.css'

const nextJobs = props => {
  let jobs = (
    <Typography className={`${cls.Title} ${cls.contentCenter}`} variant="headline">
      No hay trabajos futuros
    </Typography>
  );
  if (props.nextjobs.length > 0) {
    jobs = props.nextjobs.map(job => (
      <Job
        key={job.id}
        id={job.id}
        startedAt={job.attributes.started_at}
        finishedAt={job.attributes.finished_at}
        total={job.attributes.total}
        job_details={job.attributes.job_details}
        property={job.attributes.property}
        agent={job.attributes.agent}/>
    ));
  };
  return (
    <Grid container justify="center" className={cls.NextJobs}>
      <Grid item xs={12} sm={10} md={9}>
        <Typography className={cls.Title} variant="headline">
          Proximos Trabajos
        </Typography>
        <Grid container spacing={16} justify="center">
          {jobs}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default nextJobs;