import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import { deleteExperience } from '../../actions/profileActions';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(id) {
    const { deleteExperience } = this.props;
    deleteExperience(id);
  }

  render() {
    const { experience } = this.props;

    const experienceOutput = experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
          {!exp.to ? 'Now' : <Moment format="YYYY/MM/DD">{exp.from}</Moment>}
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.handleDeleteClick(exp._id)}>
            Delete
          </button>
        </td>
      </tr>
    ));

    return (
      <div>
        <h4 className="mb-4">Experience Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{experienceOutput}</tbody>
        </table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired,
  experience: PropTypes.object.isRequired,
};

export default connect(
  null,
  { deleteExperience },
)(Experience);
