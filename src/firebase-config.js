import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDNnLYbkRqXSDkqT6K1x7OfJqarBQ0vPtY",
  authDomain: "fb-practice0601.firebaseapp.com",
  projectId: "fb-practice0601",
  storageBucket: "fb-practice0601.appspot.com",
  messagingSenderId: "940292992371",
  appId: "1:940292992371:web:855003bab212c5a644e906",
  measurementId: "G-5RWP1H9YR6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
