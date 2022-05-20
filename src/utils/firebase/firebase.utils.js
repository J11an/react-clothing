// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth,
         signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut
        ,onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4M7aNSj2m02EwYmwdlcE1-U2kvamMd9c",
  authDomain: "react-clothing-9e653.firebaseapp.com",
  projectId: "react-clothing-9e653",
  storageBucket: "react-clothing-9e653.appspot.com",
  messagingSenderId: "898524145222",
  appId: "1:898524145222:web:6db393946305d2a23fcc47"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => {
    return signInWithPopup(auth,googleProvider)
}
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInfo={}) => {

    const userDocRef = doc(db,'users',userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInfo
                
            })
        }
        catch(error){
            console.log("Error in creating user",error)
        }
    }
    return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async (email,password) =>{

    if (!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth,email,password);


}

export const signInAuthUserWithEmailAndPassword = async (email,password) =>{

    if (!email || !password) return;
    
    return await signInWithEmailAndPassword(auth,email,password);


}

export const signOutUser = async() => signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    
    return onAuthStateChanged(auth,callback);
}