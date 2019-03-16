import {GET_SHOWS_HOME_PEDDING,GET_SHOWS_HOME_SUCCESS, GET_SHOWS_HOME_FAILED} from '../actions/constants';

const initialState = {
    isPedding: true,
    data: [],
    error: ""
}



export const getShowsHome = (state=initialState, action={}) => {
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

