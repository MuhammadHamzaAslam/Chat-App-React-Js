import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAT_hCMq92jwT3_57w3PjQuCa6qeiKP1Ks",
  authDomain: "react-js-db430.firebaseapp.com",
  projectId: "react-js-db430",
  storageBucket: "react-js-db430.appspot.com",
  messagingSenderId: "887998259277",
  appId: "1:887998259277:web:6dc50a65a32a4dc00afc04",
  measurementId: "G-QNCE6SJX9L",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { app, analytics, auth, db, storage };
