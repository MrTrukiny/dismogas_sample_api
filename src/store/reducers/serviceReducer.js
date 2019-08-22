const initState = {
	services: [
		{id: '1', title: 'I love you', content: 'blah, blah, blah'},
		{id: '2', title: 'I do not love you', content: 'blah, blah, blah'},
		{id: '3', title: 'I miss you', content: 'blah, blah, blah'}
	]
};

const serviceReducer = (state = initState, action) => {
	switch(action.type) {
		case 'CREATE_SERVICE':
			console.log('service created', action.service);
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('create service error', action.err);
			return state;
		default:
			return state;
	}
}

export default serviceReducer;