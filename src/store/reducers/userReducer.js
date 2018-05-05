import { USER_LOGIN, USER_LOGOUT } from '../actions';

const userReducer = (state = {}, action) => {
    const { user, type } = action;
debugger;
    switch (type) {
        case USER_LOGIN:
            state = user
            break;

        default:
        // not a thing

    }

    return state;
}

export default userReducer;