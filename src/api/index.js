export const register = (u) => {
	return fetch('/register', {
		body: JSON.stringify(u),
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	})
}