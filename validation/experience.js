const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateExperienceInput(data) {
  const errors = {};

  const title = !isEmpty(data.title) ? data.title : '';
  const company = !isEmpty(data.company) ? data.company : '';
  const from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(title)) {
    errors.title = 'Job title field is required';
  }

  if (Validator.isEmpty(company)) {
    errors.company = 'Company field is required';
  }

  if (Validator.isEmpty(from)) {
    errors.from = 'From date field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
