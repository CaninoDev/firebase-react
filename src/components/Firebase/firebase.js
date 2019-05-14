import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCGSqInDORUqHEb_o69DKSU2JwtHR1Gt4A",
    authDomain: "doctorapp-96a1f.firebaseapp.com",
    databaseURL: "https://doctorapp-96a1f.firebaseio.com",
    projectId: "doctorapp-96a1f",
    storageBucket: "doctorapp-96a1f.appspot.com",
    messagingSenderId: "120731014978",
    appId: "1:120731014978:web:90a5fca15d607e0e"
  };
/* The firebase listener, onAuthUserListener triggers a callback function every time the
authenticated user changes. authUser is either an object or null; within the function, the
passed condition() function is executed with the authUser. If authorization fails
(authUser is null), the user is redirected to the signin page. 
If it doesn't, the the higher order component does nothing. 
Notice also that it takes in two functions: next and fallback. This is so 
withAuthentication and withAuthorization can piggy back on the common 
implmenetation but instert its own domain as an effect.
While Firebase has internal functions for manipulating the authentication table, however, 
it would further lock this app in with using Firebase. Should we decide to decouple from 
Firebase and migrate to another database, it is prudent to merge the authentication table
with Firebase's database.
*/
class Firebase { 
	constructor() {
		app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.database();
	}

	// AUTH API
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.doSignInWithEmailAndPassword(email, password);

	doSignOut = () => this.auth.signOut();

	doPasswordReset = (email) => this.auth.doPasswordReset(email);

  doPasswordUpdate = (password) => this.auth.doPasswordUpdate(password);

  // Merge Auth and DB API
  onAuthUserListener = (next, fallback) => {
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then((snapshot) => {
              const dbUser = snapshot.val();

              // default to null ROLES
              if (!dbUser.roles) {
                  dbUser.roles = [];
              }

              // merge authUser and dbuser
              authUser = {
                  uid: authUser.uid,
                  email: authUser.email,
                  ...dbUser
              };
              next(authUser);
          });
        } else {
          fallback();
        }
    });
  };

  // USER API
  // The paths in ref correspond's to Firebase db structure
  user = (uid) => this.db.ref(`users/${uid}`);

  users = () => this.db.ref(`users`);
}

export default Firebase;
