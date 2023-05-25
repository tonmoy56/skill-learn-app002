import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config'




  export const UserContext=createContext()    

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const auth=getAuth(app)

    const signInGoogle=(provider)=>{
       return signInWithPopup(auth,provider)

    }
    const createuser=(email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
       return signOut(auth)
    }


    const github=(gitprovider)=>{

        return signInWithPopup(auth,gitprovider)

    }

 

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser)

        })

        return ()=>{
            unsubscribe()
        }

    },[])
    const authvalue={signInGoogle,user,createuser,signin,logOut,github}

    return (
        <UserContext.Provider value={authvalue}>
            {children}
            
        </UserContext.Provider>
    );
};

export default AuthProvider;