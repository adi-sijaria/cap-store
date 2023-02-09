import React from 'react'
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import {signInWithGooglePopup,signInWithGoogleRedirect} from '../../../utils/firebase/firebase.utils'
import { UserAuth } from '../../../Context/AuthContext';
import { createUserDocumentFromAuth,auth } from '../../../utils/firebase/firebase.utils';
import SignUpForm from '../../../Components/sign-up/signup.component';
import SignInForm from '../../../Components/sign-in/sign-in';
import { async } from '@firebase/util';
import './authentication.scss'
export default function Authentication() {
  // useEffect(async ()=>{
  //   const response=await getRedirectResult(auth);
  //   if(response){
  //     const userDocRef=await createUserDocumentFromAuth(response.user);

  //   }
  // },[]);
  const {googleSignIn}=UserAuth();
  const logGoogleUser=async()=>{
    const response= await signInWithGooglePopup();
    const userDocRef= await createUserDocumentFromAuth(response.user);
    console.log(response);
  };
  // const logGoogleRedirectUser=async()=>{
  //   const response= await signInWithGoogleRedirect();
  //   // const userDocRef= await createUserDocumentFromAuth(response.user);
  //   console.log(response);
  // };
  return (
    <>
      <h1 >Sign in Page</h1>
    <div className='authentication-container'>
      {/* <GoogleButton onClick={logGoogleUser}/> */}
      <SignInForm/>
      {/* <button onClick={signInWithGoogleRedirect}>hello</button> */}
      <SignUpForm/>
    </div>
    </>
  )
}
