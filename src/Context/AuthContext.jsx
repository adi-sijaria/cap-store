import { useContext ,createContext}  from "react";
// import { Value } from "sass";
import {auth} from "../utils/firebase/firebase.utils"
import { GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged
 } from "firebase/auth";
const AuthContext=createContext();
export const AuthContextProvider=({children})=>{
    const googleSignIn=()=>{
        const provider= AuthContext();
        signInWithPopup(auth,provider);
    }
    return (
        <AuthContext.Provider value={{googleSignIn}}>
            {children}

        </AuthContext.Provider>
    );
        
    
};
export const UserAuth=()=>{
    return useContext(AuthContext);
};