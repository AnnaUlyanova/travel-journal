import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyD0SCMl6nPSTnoa0cWvCnrauf5u4yJpcoo-Jxw",
  authDomain: "traveljournal-1507a.firebaseapp.com",
  databaseURL: "https://traveljournal-1507a.firebaseio.com",
  projectId: "traveljournal-1507a",
  storageBucket: "traveljournal-1507a.appspot.com",
  messagingSenderId: "315573168607"
};
firebase.initializeApp(config);
export default firebase;