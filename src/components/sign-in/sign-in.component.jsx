import React, {Component} from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../costum-button/custom-button.component";
import { auth, signInWithGoogle} from "../../firebase/firebase.utils";

import { SignInContainer, Title, ButtonsContainer } from "./sign-in.styles";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password); //triggers onAuthStateChange in app.js
            //clear the form if managed to log in
            this.setState({email: '', password: ''});
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    };

    render() {
        return (
            <SignInContainer>
                <Title>Login to your account</Title>
                {/* <span>Sign in with your email and password</span> */}

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        id="edName"
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        label="password"
                        handleChange={this.handleChange}
                        required
                    />
                    <ButtonsContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;