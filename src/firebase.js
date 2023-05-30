import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAlCy7MYdeR1X0XCq8jL1Wlq6ZPvMBNcWw",
    authDomain: "clone-cd4e1.firebaseapp.com",
    projectId: "clone-cd4e1",
    storageBucket: "clone-cd4e1.appspot.com",
    messagingSenderId: "859840236456",
    appId: "1:859840236456:web:1ea5b225ccaf9bad9b6b9d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};