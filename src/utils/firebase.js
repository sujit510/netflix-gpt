// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIT0SzLeRi437Cdp0m8Q4w1VnPb0y-4f0",
  authDomain: "netflixgpt-f4f16.firebaseapp.com",
  projectId: "netflixgpt-f4f16",
  storageBucket: "netflixgpt-f4f16.appspot.com",
  messagingSenderId: "474196504042",
  appId: "1:474196504042:web:aeb2cdfb7ae7fd5fea9693"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const auth = getAuth();

export const signup = (email, password) => {
  console.log('email, password::', email, password);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Signup successful::', userCredential);
      // Signed up 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log('Signup failed::', error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export const signin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Login successful::', userCredential);
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log('Login error::', error);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}