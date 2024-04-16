import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVyEzAogTMzI-3N7lgdhNdCzhR3azTVJ0",
  authDomain: "restaurant-website-90600.firebaseapp.com",
  databaseURL: "https://restaurant-website-90600-default-rtdb.firebaseio.com",
  projectId: "restaurant-website-90600",
  storageBucket: "restaurant-website-90600.appspot.com",
  messagingSenderId: "666655402232",
  appId: "1:666655402232:web:c4804bb325259fa877730d",
  measurementId: "G-PF182F1W3R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
export default app;
