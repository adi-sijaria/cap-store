import { createContext,useState } from "react";
import { onAuthStateChangedListener,signOutUser,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { useEffect } from "react";
//as the actual value youu want to access
export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null,


});
export const UserProvider=({children})=>{
    const[currentUser,setCurrentUser]=useState(null);
    const value={currentUser,setCurrentUser};
    // signOutUser();
    useEffect(() => {
        const unsubscribe=onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
                // setCurrentUser(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    
        
    }, []);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
