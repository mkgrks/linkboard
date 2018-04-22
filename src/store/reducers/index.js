import * as actions from '../actions';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import urlReducer from './urlReducer';

const appReducer = combineReducers({
    router: routerReducer,
    url: urlReducer,
});

const reducers = (state, action) => {
    (action.type === actions.USER_LOGOUT) && (state = undefined)

    return appReducer(state, action);
}

export default reducers;