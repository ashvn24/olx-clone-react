import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAOCV-fHHPVQL80L176xzlOEVjAPOM9NoY",
  authDomain: "fir-cd473.firebaseapp.com",
  projectId: "fir-cd473",
  storageBucket: "fir-cd473.appspot.com",
  messagingSenderId: "77239028349",
  appId: "1:77239028349:web:e929a168419494eba1ff14",
  measurementId: "G-CSTMPR1HK5"
  };

  export default firebase.initializeApp(firebaseConfig)