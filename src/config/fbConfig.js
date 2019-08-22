import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDX725S3UGUW4YlACx74eIl61tpItih2pc",
	authDomain: "dismogas.firebaseapp.com",
	databaseURL: "https://dismogas.firebaseio.com",
	projectId: "dismogas",
	storageBucket: "",
	messagingSenderId: "302754116170",
	appId: "1:302754116170:web:480e989ada8856b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* @firebase/firestore: Firestore (6.3.5): 
  The timestampsInSnapshots setting now defaults to true and you no
  longer need to explicitly set it. In a future release, the setting
  will be removed entirely and so it is recommended that you remove it
	from your firestore.settings() call now. */
	
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;