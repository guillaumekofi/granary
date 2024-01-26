import {initializeApp} from "firebase/app";
import {getFirestore, Timestamp} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
initializeApp(firebaseConfig);

// initialize services
const db = getFirestore();
const Auth = getAuth();
const Storage = getStorage();

// timestamp
const timestamp = Timestamp;

// exports
export { db, Auth, Storage, timestamp }
