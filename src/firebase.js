
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQ1oXdWQOcSlBRU3NSZ1PvfZwkcF10RSg",
  authDomain: "disney-react-clone-app.firebaseapp.com",
  projectId: "disney-react-clone-app",
  storageBucket: "disney-react-clone-app.appspot.com",
  messagingSenderId: "933901369927",
  appId: "1:933901369927:web:175003fc8096b4a157e762"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;



