import {GET_SHOWS_HOME_PEDDING,
        GET_SHOWS_HOME_SUCCESS,
        GET_SHOWS_HOME_FAILED,
        GET_SHOWS_MOVIES_PEDDING,
        GET_SHOWS_MOVIES_SUCCESS,
        GET_SHOWS_MOVIES_FAILED,
        GET_SHOWS_TV_PEDDING,
        GET_SHOWS_TV_SUCCESS,
        GET_SHOWS_TV_FAILED} from './constants';

export const getShows = () => (dispatch) => {
    dispatch({ type: GET_SHOWS_HOME_PEDDING })
    fetch('api/data')
        .then(response => response.json())
        .then(data => dispatch({ type: GET_SHOWS_HOME_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: GET_SHOWS_HOME_FAILED, payload: "GET ERROR WITH API" }))
  }


export const getMovies = () => (dispatch) => {
    dispatch({type: GET_SHOWS_MOVIES_PEDDING})
    fetch('api/movies')
        .then(response => response.json())
        .then(data => dispatch({type: GET_SHOWS_MOVIES_SUCCESS, payload: data}))
        .catch(error => dispatch({type: GET_SHOWS_MOVIES_FAILED, payload: "GET ERROR WITH API"}))
}

export const getTvSeries = () => (dispatch) => {
    dispatch({type: GET_SHOWS_TV_PEDDING})
    fetch('api/series')
        .then(response => response.json())
        .then(data => dispatch({type: GET_SHOWS_TV_SUCCESS, payload: data}))
        .catch(error => dispatch({type: GET_SHOWS_TV_FAILED, payload: "GET ERROR WITH API"}))
}