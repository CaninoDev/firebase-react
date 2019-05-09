import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
	 apiKey: process.env.FIREBASE_API_KEY,
	 authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	 databaseURL: process.env.FIREBASE_DATABASE_URL,
	 projectId: process.env.FIREBASE_PROJECT_ID,
	 storageBucket: process.env.FIREBASE_APP_STORAGE_BUCKET,
	 messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

class Firebase { 
	constructor(props) {
		app.initializeApp(config);
	}
}

export default Firebase;

