import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileCreds = ({ experience, education }) => {
  const expItems = experience.map(exp => (
    <li key={exp._id} className="list-group-item">
      <h4>{exp.company}</h4>
      <p>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
        {exp.to ? <Moment format="YYYY/MM/DD">{exp.to}</Moment> : 'Now'}
      </p>
      <p>
        <strong>Position:</strong> {exp.title}
      </p>
      {exp.location && (
        <p>
          <strong>Location:</strong> {exp.location}
        </p>
      )}
      {exp.description && (
        <p>
          <strong>Description:</strong> {exp.description}
        </p>
      )}
    </li>
  ));

  const eduItems = education.map(edu => (
    <li key={edu._id} className="list-group-item">
      <h4>{edu.school}</h4>
      <p>
        <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{' '}
        {edu.to ? <Moment format="YYYY/MM/DD">{edu.to}</Moment> : 'Now'}
      </p>
      <p>
        <strong>Degree:</strong> {edu.degree}
      </p>
      <p>
        <strong>Field Of Study:</strong> {edu.field}
      </p>
      {edu.description && (
        <p>
          <strong>Description:</strong> {edu.description}
        </p>
      )}
    </li>
  ));
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="text-center text-info">Experience</div>
        {expItems.length > 0 ? (
          <ul className="list-group">{expItems}</ul>
        ) : (
          <p className="text-center">No Experience Listed</p>
        )}
      </div>
      <div className="col-md-6">
        <div className="text-center text-info">Education</div>
        {eduItems.length > 0 ? (
          <ul className="list-group">{eduItems}</ul>
        ) : (
          <p className="text-center">No Experience Listed</p>
        )}
      </div>
    </div>
  );
};

ProfileCreds.propTypes = {
  experience: PropTypes.array.isRequired,
  education: PropTypes.array.isRequired,
};

export default ProfileCreds;
