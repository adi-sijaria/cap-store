import { async } from '@firebase/util';
import React from 'react'
import Forminput from '../Form-input/form-input';
import { createAuthUserWithEmailAndPassword,SignInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { useState } from 'react';
import Button from '../button-component/button.component';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { useContext } from 'react';
import { UserContext } from '../../Context/user.context';
import './signup.scss'
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};



export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const {setCurrentUser}=useContext(UserContext);

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  // const signupfunction=async()=>{
  //   const userDocRef=await createAuthUserWithEmailAndPassword();

  // };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password != confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email, password
      );
      setCurrentUser(user);
      const userDocRef = await createUserDocumentFromAuth(user, { displayName });
      // console.log(response);
      resetFormFields();

    } catch (error) {
      if (error.code == 'auth/email-already-in-use') {
        alert("cannot create user,email already in use");
      }
      else {
        console.log("user creation encountered an error", error);
      }

    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Dont have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
      
      
        <Forminput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name='displayName'
          value={displayName} />

       
       
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

       
       
        <Forminput 
        label="confirm-password"
        type='password' 
        required onChange={handleChange} 
        name='confirmPassword' 
        value={confirmPassword} />

        <Button buttonType="submit">Sign Up</Button>

      </form>
    </div>

  )
}
