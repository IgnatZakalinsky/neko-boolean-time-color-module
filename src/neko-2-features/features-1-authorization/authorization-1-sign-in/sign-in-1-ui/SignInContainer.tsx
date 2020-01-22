import React from 'react';
import {Redirect} from "react-router-dom";
import {NEKO_PATH} from "../../../../neko-1-main/main-1-ui/Routes";
import {signInClear} from "../sign-in-2-bll/bll-1-callbacks/signInBooleanCallbacks";
import {useSignInContainerLogic} from "../sign-in-2-bll/bll-1-callbacks/useSignInContainerLogic";
import SignIn from "./SignIn";
import Disconnect from "./Disconnect";

const SignInContainer: React.FC = () => {
    const {
        loading, error, success, dispatch,
        nekoSuccess, nekoLoading,

        email, setEmailCallback,
        password, setPasswordCallback,
        rememberMe, setRememberMeCallback,

        redirect, setRedirect,

        signIn,
    } = useSignInContainerLogic();

    // redirect logic
    if (success.value) setTimeout(() => setRedirect(true), 500);
    if (redirect) {
        setTimeout(() => signInClear(dispatch), 500);
        return <Redirect to={NEKO_PATH}/>;
    }

    console.log('render SignInContainer');
    if (nekoSuccess.value) return <Disconnect/>;

    return (
        <SignIn
            loading={loading.value || nekoLoading.value}
            error={error.data.message || ''}
            success={success.value}

            email={email} setEmailCallback={setEmailCallback}
            password={password} setPasswordCallback={setPasswordCallback}
            rememberMe={rememberMe} setRememberMeCallback={setRememberMeCallback}

            signInCallback={signIn}
        />
    );
};

export default SignInContainer;
