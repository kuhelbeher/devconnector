import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';

class Dashboard extends Component {
  static defaultProps = {
    profile: null,
  };

  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    const { getCurrentProfile } = this.props;
    getCurrentProfile();
  }

  handleDeleteClick() {
    const { deleteAccount } = this.props;
    deleteAccount();
  }

  render() {
    const { user, profile, loading } = this.props;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else if (Object.keys(profile).length > 0) {
      dashboardContent = (
        <div>
          <p className="lead text-muted">
            Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
          </p>
          <ProfileActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div style={{ marginBottom: '60px' }} />
          <button
            type="button"
            onClick={this.handleDeleteClick}
            className="btn btn-danger">
            Delete My Account
          </button>
        </div>
      );
    } else {
      // user is logged in but has no profile
      dashboardContent = (
        <div>
          <p className="lead text-muted">Welcome {user.name}</p>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-lg btn-info">
            Create profile
          </Link>
        </div>
      );
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile.profile,
  loading: state.profile.loading,
  user: state.auth.user,
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount },
)(Dashboard);
