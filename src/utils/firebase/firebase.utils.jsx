import {initializeApp} from 'firebase/app';
import{getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider
,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth';
import App from '../../App';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAEpBEehv5qM__MVXCigIlHktXuVPG45mA",
    authDomain: "crwn-clothing-web-app-8a5f0.firebaseapp.com",
    projectId: "crwn-clothing-web-app-8a5f0",
    storageBucket: "crwn-clothing-web-app-8a5f0.appspot.com",
    messagingSenderId: "658763704868",
    appId: "1:658763704868:web:054a3223a4738618fc06b1"
  };
  
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const googleprovider = new GoogleAuthProvider();
  googleprovider.setCustomParameters({
    prompt:"select_account"
  });
  export const auth =getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,googleprovider);
  export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleprovider);
//setting db to databse in firestore
  export const db=getFirestore();

  export const createUserDocumentFromAuth=async(userAuth,additionalInformation={})=>{
      const userDocRef=doc(db,'users',userAuth.uid);
      console.log(userDocRef);
      const userSnapshot= await getDoc(userDocRef);
      console.log(userSnapshot);
      console.log(userSnapshot.exists());
      if(!userSnapshot.exists()){
        const{displayName,email}=userAuth;
        const createdAt=new Date();
        try{
          await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            additionalInformation
          });
        }catch(error){
          console.log('error');
        }

      }
      return userDocRef;
  };
  export const createAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
  }
  export const SignInAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password);
  }
  export const signOutUser=async()=>await signOut(auth);
  
  export const onAuthStateChangedListener=(callback)=>
  onAuthStateChanged(auth,callback);