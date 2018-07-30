import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is_empty';

const ProfileHeader = ({ profile }) => (
  <div className="row">
    <div className="col-md-12">
      <div className="card card-body bg-info text-white mb-3">
        <div className="row">
          <div className="col-4 col-md-3 m-auto">
            <img
              className="rounded-circle"
              src={profile.user.avatar}
              alt={profile.user.name}
            />
          </div>
        </div>
        <div className="text-center">
          <h1 className="display-4 text-center">{profile.user.name}</h1>
          <p className="lead text-center">
            {profile.status}{' '}
            {isEmpty(profile.company) ? null : (
              <span>at {profile.company}</span>
            )}
          </p>
          {isEmpty(profile.location) ? null : <p>at {profile.location}</p>}
          <p>
            {!isEmpty(profile.website) && (
              <a
                className="text-white p-2"
                href={profile.website}
                rel="noopener noreferrer"
                target="_blank">
                <i className="fas fa-globe fa-2x" />
              </a>
            )}
            {!isEmpty(profile.social && profile.social.twitter) && (
              <a
                className="text-white p-2"
                href={profile.social.twitter}
                rel="noopener noreferrer"
                target="_blank">
                <i className="fab fa-twitter fa-2x" />
              </a>
            )}
            {!isEmpty(profile.social && profile.social.facebook) && (
              <a
                className="text-white p-2"
                href={profile.social.facebook}
                rel="noopener noreferrer"
                target="_blank">
                <i className="fab fa-facebook fa-2x" />
              </a>
            )}
            {!isEmpty(profile.social && profile.social.linkedin) && (
              <a
                className="text-white p-2"
                href={profile.social.linkedin}
                rel="noopener noreferrer"
                target="_blank">
                <i className="fab fa-linkedin fa-2x" />
              </a>
            )}
            {!isEmpty(profile.social && profile.social.youtube) && (
              <a
                className="text-white p-2"
                href={profile.social.youtube}
                rel="noopener noreferrer"
                target="_blank">
                <i className="fab fa-youtube fa-2x" />
              </a>
            )}
            {!isEmpty(profile.social && profile.social.instagram) && (
              <a
                className="text-white p-2"
                href={profile.social.instagram}
                rel="noopener noreferrer"
                target="_blank">
                <i className="fab fa-instagram fa-2x" />
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  </div>
);

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileHeader;
