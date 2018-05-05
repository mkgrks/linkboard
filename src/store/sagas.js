import { takeEvery, delay } from 'redux-saga';
import { all, call, put, select, race, take } from 'redux-saga/effects';

import * as api from '../api';
import * as actions from './actions';

function* userLogin(action) {
    const state = yield select();

    debugger;
    // return register({ id: googleId, email })
    //     .then(r => {
    //         return {
    //             ty pe: USER_LOGIN,  
    //             user,
    //         }
    //     });

}

function* rootSaga() {
    yield takeEvery(actions.USER_LOGIN, userLogin);
}

export default rootSaga;
