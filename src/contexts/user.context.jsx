import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}; 

    //auth will be available when component runs so that we can access it when user signs in
    // and sign out
    useEffect(()=> {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
        })
        return unsubscribe;

    },[]);

    //the value parameter will hold UserContext value
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}