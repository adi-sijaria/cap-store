import { async } from '@firebase/util';
import React from 'react'
import Forminput from '../Form-input/form-input';

import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { useState,useContext } from 'react';


import Button from '../button-component/button.component';
import { createUserDocumentFromAuth,createAuthUserWithEmailAndPassword,SignInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import './sign-in.scss'
const defaultFormFields = {
  email: '',
  password: '',
};



export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;
  
  

  const signInWithGoogle=async()=>{
    const response= await signInWithGooglePopup();
    
    
     
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  // const signupfunction=async()=>{
  //   const userDocRef=await createAuthUserWithEmailAndPassword();

  // };
  const handleSubmit = async (event) => {
    event.preventDefault();


    
    try {
      const response=await SignInAuthUserWithEmailAndPassword(email,password);
      // console.log(response);
      resetFormFields();
      
      
  
      
    } catch (error) {
      console.log(error);
      if(error.code=="auth/wrong-password"){
        alert('wrong-password');
        
      }
      else if(error.code=="auth/user-not-found"){
        alert('user not found');
        
      }
      
      
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>     
        <Forminput 
        label="email"
        type="email" 
        required 
        onChange={handleChange} 
        name='email' value={email} />
        <Forminput 
        label="password"
        type="password" 
        required 
        onChange={handleChange} 
        name='password' 
        value={password} />
      <div className='buttons-container'>
        <Button buttonType="submit">Sign In</Button>
        <Button buttonType='button' onClick={signInWithGoogle}>GOOGLE SIGN-IN</Button>
        </div>
      </form>
    </div>

  )
}
