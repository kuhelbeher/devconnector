const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateExperienceInput(data) {
  const errors = {};

  const school = !isEmpty(data.school) ? data.school : '';
  const degree = !isEmpty(data.degree) ? data.degree : '';
  const field = !isEmpty(data.field) ? data.field : '';
  const from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(school)) {
    errors.school = 'School field is required';
  }

  if (Validator.isEmpty(degree)) {
    errors.degree = 'Degree is required';
  }

  if (Validator.isEmpty(field)) {
    errors.field = 'Field of study field is required';
  }

  if (Validator.isEmpty(from)) {
    errors.from = 'From date field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
