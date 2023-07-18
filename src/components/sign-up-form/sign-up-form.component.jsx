import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        };

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Cannot create user as email already exists");
            }
            else {
                console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div>
            <h1>Sign up with email and password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="DisplayName"
                    inputOptions = {{
                            type:"text",
                            required : true, 
                            onChange:handleChange,
                            name:'displayName',
                            value:'displayName' 
                        }}
                        />

                {/* <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    value={email} />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    value={password} />

                <FormInput
                    label="ConfirmPassword"
                    type="password"
                    required
                    onChange={handleChange}
                    value={confirmPassword} /> */}

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );

};
export default SignUpForm;