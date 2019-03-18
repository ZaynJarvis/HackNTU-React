import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DB_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
};

class FireApp {
	constructor(config) {
		firebase.initializeApp(config);
		this.firestore = firebase.firestore();
	}
	post(msg) {
		const time = new Date().toISOString();
		return this.firestore
			.collection('msg')
			.doc()
			.set({
				time,
				...msg,
			});
	}
	get(cb) {
		return this.firestore
			.collection('msg')
			.get()
			.then(cb);
	}
}

export default new FireApp(config);
