import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCS7RfvychVVI-VuVHu5pfwQiqopyi_ZVw",
  authDomain: "crwn-db-650c0.firebaseapp.com",
  databaseURL: "https://crwn-db-650c0.firebaseio.com",
  projectId: "crwn-db-650c0",
  storageBucket: "crwn-db-650c0.appspot.com",
  messagingSenderId: "635986496930",
  appId: "1:635986496930:web:abbd371209e3394ebab6fb"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;