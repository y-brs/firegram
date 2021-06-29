import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCDzbDdC5vtO51VtlG6yG9PjfgXaQipN9g",
  authDomain: "firegram-46aca.firebaseapp.com",
  projectId: "firegram-46aca",
  storageBucket: "firegram-46aca.appspot.com",
  messagingSenderId: "199054002195",
  appId: "1:199054002195:web:ad979bad8abd2984e597e6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
