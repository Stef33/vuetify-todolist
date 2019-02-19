import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBQnDlVzlVGFnEaLwKC_HfaFcnUwwDfW6A",
    authDomain: "vuetify-todolist.firebaseapp.com",
    databaseURL: "https://vuetify-todolist.firebaseio.com",
    projectId: "vuetify-todolist",
    storageBucket: "vuetify-todolist.appspot.com",
    messagingSenderId: "209051368539"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true })

  export default db