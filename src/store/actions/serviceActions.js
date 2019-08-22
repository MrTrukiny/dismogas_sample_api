export const createService = (service) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make async call to database
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;

		firestore.collection('services').add({
			...service,
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId: authorId,
			createdAt: new Date()
		}).then(() => {
			dispatch({
				type: 'CREATE_SERVICE',
				service
			});
		}).catch((err) => {
			dispatch({
				type: 'CREATE_SERVICE_ERROR',
				err
			});
		})
	}
};