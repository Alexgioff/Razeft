import {GET_SHOWS_HOME_PEDDING,
        GET_SHOWS_HOME_SUCCESS,
        GET_SHOWS_HOME_FAILED,
        GET_SHOWS_MOVIES_PEDDING,
        GET_SHOWS_MOVIES_SUCCESS,
        GET_SHOWS_MOVIES_FAILED,
        GET_SHOWS_TV_PEDDING,
        GET_SHOWS_TV_SUCCESS,
        GET_SHOWS_TV_FAILED} from '../actions/constants';

const initialStateShow = {
    isPedding: true,
    data: [],
    error: ""
}



export const getShowsHome = (state=initialStateShow, action={}) => {
    switch(action.type) {
        case GET_SHOWS_HOME_PEDDING:
            return Object.assign({}, state, {isPedding: true, data: []});
        case GET_SHOWS_HOME_SUCCESS:
            return Object.assign({}, state, {
                                    data: action.payload,
                                    isPedding: false
                                });
        case GET_SHOWS_HOME_FAILED:
            return Object.assign({}, state, {error: action.payload, isPedding: true});
        default:
        return state;
    }
}

const initialStateMovies = {
    isPedding: true,
    movies: [],
    error: ""
}


export const getShowsMovies = (state=initialStateMovies, action={}) => {
    switch(action.type) {
        case GET_SHOWS_MOVIES_PEDDING:
            return Object.assign({}, state, {isPedding: true, movies: []});
        case GET_SHOWS_MOVIES_SUCCESS:
            return Object.assign({}, state, {isPedding: false, movies: action.payload});
        case GET_SHOWS_MOVIES_FAILED:
            return Object.assign({}, state, {isPedding: true, error: action.payload});
        default:
            return state;
    }
}


const initialStateSeries = {
    isPedding: true,
    series: [],
    error: ""
}

export const getShowsTv = (state=initialStateSeries, action={}) => {
    switch(action.type) {
        case GET_SHOWS_TV_PEDDING:
            return Object.assign({}, state, {isPedding: true, series: []});
        case GET_SHOWS_TV_SUCCESS:
            return Object.assign({}, state, {isPedding: false, series: action.payload});
        case GET_SHOWS_TV_FAILED:
            return Object.assign({}, state, {isPedding: true, error: action.payload});
        default:
            return state;
    }
}