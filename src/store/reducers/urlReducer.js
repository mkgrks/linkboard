import { URL_PASTED } from '../actions';
import { urlValidity } from '../../functions/utils';

const urlReducer = (state = {value: '', isURL: false}, action) => {
    const { url, type } = action;

    switch (type) {
        case URL_PASTED:
            state = {
                value: url.replace(/\s/g, ''),
                isURL: true,
            }
            break;

        default:
        // not a thing

    }

    return state;
}

export default urlReducer;