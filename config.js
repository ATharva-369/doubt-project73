import * as firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyCWJ-EnED6n2qazrcDT_s9qxil7mivgQBs",
  authDomain: "storyhub-25503.firebaseapp.com",
  databaseURL: "https://storyhub-25503-default-rtdb.firebaseio.com",
  projectId: "storyhub-25503",
  storageBucket: "storyhub-25503.appspot.com",
  messagingSenderId: "759182400419",
  appId: "1:759182400419:web:68004aa8d7dd4062459816"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  export default firebase.firestore()