import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM6-BnDy3FHVbui0hFCicFFO6LniYUphI",
  authDomain: "login-iris-chat-web.firebaseapp.com",
  projectId: "login-iris-chat-web",
  storageBucket: "login-iris-chat-web.appspot.com",
  messagingSenderId: "856396836609",
  appId: "1:856396836609:web:c5d75213b59f98fe597500"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);