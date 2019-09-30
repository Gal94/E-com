import React, {Component} from 'react';
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss';
import CustomButton from "../costum-button/custom-button.component";
import { auth, signInWithGoogle} from "../../firebase/firebase.utils";

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
            <div className='sign-in'>
                <h2 className='title'>Login to your account</h2>
                {/* <span>Sign in with your email and password</span> */}

                <form className="group" onSubmit={this.handleSubmit}>
                    <FormInput
                        className="form-input"
                        id="edName"
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />
                    <FormInput
                        className="form-input"
                        type="password"
                        name="password"
                        value={this.state.password}
                        label="password"
                        handleChange={this.handleChange}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;