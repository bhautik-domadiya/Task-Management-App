import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

interface FirebaseApp {
  auth: () => firebase.auth.Auth;
  firestore: () => firebase.firestore.Firestore;
}

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app: FirebaseApp = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const firestore = app.firestore();

export { auth, firestore };
