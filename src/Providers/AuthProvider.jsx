import { createContext, useEffect, useState } from "react";
import { auth } from '../firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types'
export const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {
    const [loading,setLoading] =useState(true)

    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>unSubscribe();

    },[]);
    const logOut =()=>{
      return  signOut(auth)
    }
    const signIn=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password) 
    }




    const authInfo = { user, createUser,logOut,signIn,loading};


    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes={
    children:PropTypes.node
}