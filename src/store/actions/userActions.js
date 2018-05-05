import { USER_LOGIN, USER_LOGOUT, ERROR } from '.';
import { register } from '../../api';

export const userLogin = user => {
		return {
			type: USER_LOGIN,
			user,
		}
	
};

export const userLogout = () => {
	return {
		type: USER_LOGOUT,
		user: {}
	}
};