import { ERROR, USER_LOGIN, LOADING } from '../actions';

export const loadingReducer = (state = false, action) => {
    const { loading, type } = action;
    debugger;
    switch (type) {
        case USER_LOGIN:
        case ERROR:
            state = false;
            break;
        case LOADING:
            state = loading;
            break;

        default:
        // not a thing

    }

    return state;
}


export const errorReducer = (state = '', action) => {
    const { error, type } = action;

    switch (type) {
        case ERROR:
            state = error;
            break;

        default:
        // not a thing

    }

    return state;
}