import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


// const config = {
// 	 apiKey: process.env.FIREBASE_API_KEY,
// 	 authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// 	 databaseURL: process.env.FIREBASE_DATABASE_URL,
// 	 projectId: process.env.FIREBASE_PROJECT_ID,
// 	 storageBucket: process.env.FIREBASE_APP_STORAGE_BUCKET,
// 	 messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// 	 appId: process.env.FIREBASE_APP_ID
// };

var firebaseConfig = {
    apiKey: "AIzaSyCGSqInDORUqHEb_o69DKSU2JwtHR1Gt4A",
    authDomain: "doctorapp-96a1f.firebaseapp.com",
    databaseURL: "https://doctorapp-96a1f.firebaseio.com",
    projectId: "doctorapp-96a1f",
    storageBucket: "doctorapp-96a1f.appspot.com",
    messagingSenderId: "120731014978",
    appId: "1:120731014978:web:90a5fca15d607e0e"
  };

class Firebase { 
	constructor() {
		app.initializeApp(firebaseConfig);

		this.auth = app.auth();
	}

	// AUTH API
  doCreateUserWithEmailAndPassword = (email, password) =>
     this.auth.createUserWithEmailAndPassword(email, password);

	doSignInWithEmailAndPassword = (email, password) =>
     this.auth.doSignInWithEmailAndPassword(email, password);

	doSignOut = () => this.auth.signOut();

	doPasswordReset = (email) => this.auth.doPasswordReset(email);

	doPasswordUpdate = (password) => this.auth.doPasswordUpdate(password);
}

export default Firebase;
