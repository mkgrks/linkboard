import * as actions from '../actions';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import urlReducer from './urlReducer';
import userReducer from './userReducer';
import { loadingReducer, errorReducer } from './utilsReducers';

const appReducer = combineReducers({
    router: routerReducer,
    url: urlReducer,
    user: userReducer,
    loading: loadingReducer,
    error: errorReducer,
});

const reducers = (state, action) => {
    (action.type === actions.USER_LOGOUT) && (state = undefined)

    return appReducer(state, action);
}

export default reducers;