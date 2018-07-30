import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReacRouterPropTypes from 'react-router-prop-types';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addExperience } from '../../actions/profileActions';

class AddExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      title: '',
      location: '',
      from: '',
      to: '',
      current: false,
      description: '',
      errors: {},
      disabled: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleSubmit(e) {
    const {
      company,
      title,
      location,
      from,
      to,
      current,
      description,
    } = this.state;
    const { addExperience, history } = this.props;
    e.preventDefault();

    const expData = {
      company,
      title,
      location,
      from,
      to,
      current,
      description,
    };

    addExperience(expData, history);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCheck() {
    const { disabled, current } = this.state;
    this.setState({
      disabled: !disabled,
      current: !current,
    });
  }

  render() {
    const {
      errors,
      company,
      title,
      location,
      from,
      to,
      disabled,
      current,
      description,
    } = this.state;
    return (
      <div className="add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Experience</h1>
              <p className="lead text-center">
                Add any job or position that you have had in the past or current
              </p>
              <small className="d-block pb-3">* - required fields</small>
              <form onSubmit={this.handleSubmit}>
                <TextFieldGroup
                  placeholder="* Company"
                  name="company"
                  value={company}
                  onChange={this.handleChange}
                  error={errors.company}
                />
                <TextFieldGroup
                  placeholder="* Job Title"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  error={errors.title}
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={location}
                  onChange={this.handleChange}
                  error={errors.location}
                />
                <h6>From Date</h6>
                <TextFieldGroup
                  name="from"
                  type="date"
                  value={from}
                  onChange={this.handleChange}
                  error={errors.from}
                />
                <h6>To Date</h6>
                <TextFieldGroup
                  name="to"
                  type="date"
                  value={to}
                  onChange={this.handleChange}
                  error={errors.to}
                  disabled={disabled ? 'disabled' : ''}
                />
                <div className="form-check mb-4">
                  <label htmlFor="current" className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="current"
                      value={current}
                      checked={current}
                      onChange={this.handleCheck}
                      id="current"
                    />
                    Current Job
                  </label>
                </div>
                <TextAreaFieldGroup
                  placeholder="Job Description"
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                  error={errors.description}
                  info="Tell us about the the position"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddExperience.propTypes = {
  errors: PropTypes.object.isRequired,
  addExperience: PropTypes.func.isRequired,
  history: ReacRouterPropTypes.history.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { addExperience },
)(withRouter(AddExperience));
