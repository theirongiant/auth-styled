import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCge-E7eFRWD7CNyUX2gCNfaJ-9LNqwvQg',
  authDomain: 'fastr-27292.firebaseapp.com',
  databaseURL: 'https://fastr-27292.firebaseio.com',
  projectId: 'fastr-27292',
  storageBucket: 'fastr-27292.appspot.com',
  messagingSenderId: '141709905010'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};