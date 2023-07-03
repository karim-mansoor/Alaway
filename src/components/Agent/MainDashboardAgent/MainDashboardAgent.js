// Dependencias
import React, { Component } from 'react';

// Componentes
import Typography from 'material-ui/Typography';
import CardJob from '../../../components/Agent/CardJob/CardJob';
import cls from './MainDashboardAgent.css'

class MainDashboardAgent extends Component {
  render() {
    let jobs = (
      <Typography variant="title" gutterBottom align="center" className={cls.Typogra}>No se encuentran trabajos</Typography>
    );
    let items = [];
    for (let page = 1; page <= this.props.total_pages; page++) {
      items.push(
        <li key={page}><a onClick={(a) => this.props.goTo(a, page)} active={page === this.props.current_page}>{page}</a></li>
      );
    }
    if (this.props.jobs.length > 0) {
      jobs = this.props.jobs.map(job => (
        <CardJob
          job={job}
          apply={this.props.applyProposal}/>
      ));
    }
    return (
      <div className="container">
        <div className="services">
          <h2 className={cls.Title}>Trabajos</h2>
          <div className="row">
            {jobs}
          </div>
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li>
                <a onClick={() => this.props.goBack()} aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {items}
              <li>
                <a onClick={() => this.props.goNext()} aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default MainDashboardAgent;