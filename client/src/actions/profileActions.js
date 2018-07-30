import axios from 'axios';
import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
} from './types';

// profile loading
export const setProfileLoading = () => ({
  type: PROFILE_LOADING,
});

// clear profile
export const clearCurrentProfile = () => ({
  type: CLEAR_CURRENT_PROFILE,
});

// get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile')
    .then(res => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch(() => dispatch({ type: GET_PROFILE, payload: {} }));
};

// create profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('/api/profile', profileData)
    .then(() => history.push('/dashboard'))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
