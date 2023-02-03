import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCC_7cjfdnasStlcChr7os814BUsZQ8-sg",
  authDomain: "whose-inn.firebaseapp.com",
  projectId: "whose-inn",
  storageBucket: "whose-inn.appspot.com",
  messagingSenderId: "659897271079",
  appId: "1:659897271079:web:bb7925c37071871467df02",
  measurementId: "G-W1RPFM3RSC",
};

const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
const auth = getAuth(app);
const db = getFirestore(app);
const store = getStorage(app);


const getLocations = async () => {
 
  const colRef = collection(db, "locations");
  // const query_ = await query(colRef, where('owner', '==', 'RUvdWw22QmYVqBF9VYxKmKtJPtI2'))
  const data = await getDocs(colRef)
  return data.docs.map((doc_) => ({
    ...doc_.data(),
    id: doc_.id,
  }));
};

export const checkUp_ = () => {
  return auth.currentUser == null;
};

export const signUp_ = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn_ = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOut_ = () => {
  return signOut(auth);
};

export const useAuth = () => {
  const [currentUser_, setCurrentUser_] = useState();

  useEffect(() => {
    // @ts-ignore
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser_(user));
    return unsub;
  }, []);
  return currentUser_;
};

  export { db, store, auth, analytics, getLocations };