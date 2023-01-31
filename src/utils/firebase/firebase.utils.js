import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {displayName, email, createdAt});
        }catch(error) {
            console.log('Error creating the user', error.message);
        }
    }

    return userDocRef;
  }