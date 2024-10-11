import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyAhBErH_MxSEm9F9eevk1dQhKmf-cJ-8m8",
     authDomain: "my-tolist.firebaseapp.com",
     projectId: "my-tolist",
     storageBucket: "my-tolist.appspot.com",
     messagingSenderId: "1017372656070",
     appId: "1:1017372656070:web:b24c895c82e3696dddf2c7",
     measurementId: "G-8FXWMVEKQZ",
     databaseURL: " https://my-tolist-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app }