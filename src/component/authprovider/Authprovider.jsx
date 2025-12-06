import React, { createContext, useEffect, useState } from 'react';

import { auth } from '../auth.';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
export const AuthContext=createContext();

const Authprovider = ({children}) => {
   
    const [user,setUser]=useState(null);

 const googleProvider=new GoogleAuthProvider();

 const signWithGoogle=()=>{
    return signInWithPopup(auth,googleProvider)
 }
 
 const signUpWithUser=async(email,pass,name,photoUrl)=>{
   console.log(email,pass);
   const createUser= await createUserWithEmailAndPassword(auth,email,pass);

   updateProfile(auth.currentUser,{

      displayName:name,
      photoURL:photoUrl
   })
   return createUser;
 }

 const userLogin=(email,pass)=>{
   console.log(email,pass);
   return signInWithEmailAndPassword(auth,email,pass);
 }

 useEffect(()=>{
   const unsubscriber= onAuthStateChanged(auth,(currentUser)=>{
              setUser(currentUser);
   })
   return ()=>{
    unsubscriber()
   }
 },[])

 const signout=()=>{
    return signOut(auth);
 }
   const userInfo={
            signWithGoogle,
            user,
            signout,
            signUpWithUser,
            userLogin
            
   }

    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    );
};

export default Authprovider;