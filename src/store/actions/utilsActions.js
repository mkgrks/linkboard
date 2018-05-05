import { LOADING } from '.';

export const loader = (status) => {
	return {
		type: LOADING,
		loading: status,
	}
}