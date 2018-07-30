import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  // label,
  error,
  info,
  type,
  onChange,
  disabled,
}) => (
  <div className="form-group">
    <input
      type={type}
      className={classnames('form-control form-control-lg', {
        'is-invalid': error,
      })}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
    {info && <small className="form-tex text-muted">{info}</small>}
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

TextFieldGroup.defaultProps = {
  type: 'text',
  placeholder: null,
  info: null,
  error: null,
  disabled: null,
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
};

export default TextFieldGroup;
