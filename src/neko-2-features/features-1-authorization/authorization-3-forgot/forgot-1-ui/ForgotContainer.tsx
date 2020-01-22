import React from 'react';
import {Redirect} from "react-router";
import {SIGN_IN_PATH} from "../../../../neko-1-main/main-1-ui/Routes";
import {useForgotContainerLogic} from "../forgot-2-bll/bll-1-callbacks/useForgotContainerLogic";
import {forgotClear} from "../forgot-2-bll/bll-1-callbacks/forgotBooleanCallbacks";
import Forgot from './Forgot';

const ForgotContainer: React.FC = () => {
    const {
        loading, error, success, dispatch,

        email, setEmailCallback,

        redirect, setRedirect,

        forgot,
    } = useForgotContainerLogic();

    // redirect logic
    if (success.value) setTimeout(() => setRedirect(true), 500);
    if (redirect) {
        setTimeout(() => forgotClear(dispatch), 500);
        return <Redirect to={SIGN_IN_PATH}/>;
    }

    console.log('render ForgotContainer');
    return (
        <Forgot
            loading={loading.value}
            error={error.data.message || ''}
            success={success.value}

            email={email} setEmailCallback={setEmailCallback}

            forgotCallback={forgot}
        />
    );
};

export default ForgotContainer;
