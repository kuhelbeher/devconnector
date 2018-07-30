import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(id) {
    const { deleteEducation } = this.props;
    deleteEducation(id);
  }

  render() {
    const { education } = this.props;

    const educationOutput = education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{' '}
          {!edu.to ? 'Now' : <Moment format="YYYY/MM/DD">{edu.from}</Moment>}
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.handleDeleteClick(edu._id)}>
            Delete
          </button>
        </td>
      </tr>
    ));

    return (
      <div>
        <h4 className="mb-4">Education Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{educationOutput}</tbody>
        </table>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired,
  education: PropTypes.object.isRequired,
};

export default connect(
  null,
  { deleteEducation },
)(Education);
