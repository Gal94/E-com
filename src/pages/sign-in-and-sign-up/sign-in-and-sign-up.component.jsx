import React from 'react';
import { PageContainer } from "./sign-in-and-sign-up.styles";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/signup.component";

const SignInAndSignUpPage = () => (
    <PageContainer>
        <SignIn/>
        <SignUp/>
    </PageContainer>
);

export default SignInAndSignUpPage;