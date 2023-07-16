/* import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth"; */

import {
    auth,
    signInWithGooglePopup,
    // signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
   /*  useEffect(() => {
        const responseData = async () =>{
            const data = await getRedirectResult(auth);
            if(data){
                const userDocRef = await  createUserDocumentFromAuth(data.user);
            }
            //console.log(data);
        } 
        // * calling method
        responseData().catch(console.error);
    }, []); */

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        //console.log(response);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign with Google Popup</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign with Google Redirect</button> */}
        </div>
    );
};

export default SignIn;