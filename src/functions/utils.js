export const urlValidity = url => {
    // return url.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/)
}

export const fetchUrlInfo = url => {
	return 'Title will be returned';
    // fetch(url, {
		// 	mode: 'no-cors',
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// })
    // 	.then(res => {
		// 		debugger;
		// 		res.text();
		// 	})
		// 	.then(res => {
		// 		debugger;
		// 	})
}