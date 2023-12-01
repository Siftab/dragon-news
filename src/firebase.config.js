// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMQMLWR-8SD94Y7ubm_QoB1S-ONWHxMrY",
  authDomain: "dragon-news-ba854.firebaseapp.com",
  projectId: "dragon-news-ba854",
  storageBucket: "dragon-news-ba854.appspot.com",
  messagingSenderId: "283956047722",
  appId: "1:283956047722:web:1b308bee1dd23ebd183f13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);