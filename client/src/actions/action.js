import {GET_SHOWS_HOME_PEDDING,GET_SHOWS_HOME_SUCCESS, GET_SHOWS_HOME_FAILED} from './constants';

export const getShows = () => (dispatch) => {
    dispatch({ type: GET_SHOWS_HOME_PEDDING })
    fetch('api/data')
        .then(response => response.json())
        .then(data => dispatch({ type: GET_SHOWS_HOME_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: GET_SHOWS_HOME_FAILED, payload: error }))
  }


