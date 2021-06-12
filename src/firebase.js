
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;




// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyAPtWLG0bEsZEHfHYc2SxNPorDA_RjOysw",
//     authDomain: "disney-plus-app-clone.firebaseapp.com",
//     projectId: "disney-plus-app-clone",
//     storageBucket: "disney-plus-app-clone.appspot.com",
//     messagingSenderId: "137879099477",
//     appId: "1:137879099477:web:6b330e71698f904c655cdc"
//   };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export {auth, provider, storage};
// export default db;