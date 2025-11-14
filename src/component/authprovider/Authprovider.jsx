import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../auth.';
export const AuthContext=createContext();

const Authprovider = ({children}) => {
   
    const [user,setUser]=useState(null);

 const googleProvider=new GoogleAuthProvider();

 const signWithGoogle=()=>{
    return signInWithPopup(auth,googleProvider)
 }
 
 const signUpWithUser=(email,pass)=>{
   return createUserWithEmailAndPassword(auth,email,pass);
 }

 useEffect(()=>{
   const unsubscriber= onAuthStateChanged(auth,(currentUser)=>{
              setUser(currentUser);
   })
   return ()=>{
    unsubscriber()
   }
 },[])

  const signinWithUser=(email,pass)=>{
     return signInWithEmailAndPassword(auth,email,pass)
  }



 const signout=()=>{
    return signOut(auth);
 }
   const userInfo={
            signWithGoogle,
            user,
            signout,
            signUpWithUser,
            signinWithUser
   }

    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    );
};

export default Authprovider;