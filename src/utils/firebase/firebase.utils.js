// * Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
}
    from 'firebase/auth';
// * db operations
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// * https://firebase.google.com/docs/web/setup#available-libraries

// * Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4gVlVD3b4ZSHHzS-EKU_4tksuYkBZOq8",
    authDomain: "crwn-clothing-db-445b4.firebaseapp.com",
    projectId: "crwn-clothing-db-445b4",
    storageBucket: "crwn-clothing-db-445b4.appspot.com",
    messagingSenderId: "1009788501885",
    appId: "1:1009788501885:web:5df8a1e2eb4dfae8c51614"
};

// * Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// * getting prompt to select account
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

// * database initialization
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    if(!userAuth) return;

    // ! get reference to userDoc from database using userAuth
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);
    // * get user snapshot
    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    // ! check if the instance of snapshot exists
    console.log(userSnapShot.exists());

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt });
        }
        catch (error) {
            console.log(error.message);
        }
    }

    // * if the userSnapShot exists then return Doc Reference 
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) { return; }

    return await createAuthUserWithEmailAndPassword(auth, email, password);
}