import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMW3gATyKHVvuE3AaWvFKFm7iHamuIvCY",
    authDomain: "crwn-clothing-db-a6d79.firebaseapp.com",
    projectId: "crwn-clothing-db-a6d79",
    storageBucket: "crwn-clothing-db-a6d79.appspot.com",
    messagingSenderId: "729169036433",
    appId: "1:729169036433:web:8660cd83d53454c0fbeb30"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);


  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    propmt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);