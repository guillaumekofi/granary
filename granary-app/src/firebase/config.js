import {initializeApp} from "firebase/app";
import {getFirestore, Timestamp} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVCZah_mmV1FzmGMywYl2dzzqkUw6JytQ",
  authDomain: "granary-19b23.firebaseapp.com",
  databaseURL: "https://granary-19b23-default-rtdb.firebaseio.com",
  projectId: "granary-19b23",
  storageBucket: "granary-19b23.appspot.com",
  messagingSenderId: "1067468673886",
  appId: "1:1067468673886:web:3817aca004bcd69b4375cf"
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