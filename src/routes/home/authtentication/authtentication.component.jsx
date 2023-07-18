
import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from "../../../utils/firebase/firebase.utils";

import SignUpForm from "../../../components/sign-up-form/sign-up-form.component";

const Authentication = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        //console.log(response);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign with Google Popup</button>
            <SignUpForm />
        </div>
    );
};

export default Authentication;