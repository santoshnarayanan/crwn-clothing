// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4gVlVD3b4ZSHHzS-EKU_4tksuYkBZOq8",
    authDomain: "crwn-clothing-db-445b4.firebaseapp.com",
    projectId: "crwn-clothing-db-445b4",
    storageBucket: "crwn-clothing-db-445b4.appspot.com",
    messagingSenderId: "1009788501885",
    appId: "1:1009788501885:web:5df8a1e2eb4dfae8c51614"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup =  () => signInWithPopup(auth, provider);