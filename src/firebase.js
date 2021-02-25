import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD5nyYR2puTiDawqimZXcQSU9JXMOVW1kE",
    authDomain: "slack-clone-challenge-59f76.firebaseapp.com",
    projectId: "slack-clone-challenge-59f76",
    storageBucket: "slack-clone-challenge-59f76.appspot.com",
    messagingSenderId: "552960409733",
    appId: "1:552960409733:web:b2d2948c191cb6e4c2e9ec"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;