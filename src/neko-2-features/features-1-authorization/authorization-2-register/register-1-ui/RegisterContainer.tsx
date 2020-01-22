import React from 'react';
import {Redirect} from "react-router";
import {SIGN_IN_PATH} from "../../../../neko-1-main/main-1-ui/Routes";
import {useRegisterContainerLogic} from '../register-2-bll/bll-1-callbacks/useRegisterContainerLogic';
import {registerClear} from "../register-2-bll/bll-1-callbacks/registerBooleanCallbacks";
import Register from './Register';

const RegisterContainer: React.FC = () => {
    const {
        loading, error, success, dispatch,

        email, setEmailCallback,
        password, setPasswordCallback,
        password2, setPassword2Callback,

        redirect, setRedirect,

        register,
    } = useRegisterContainerLogic();

    // redirect logic
    if (success.value) setTimeout(() => setRedirect(true), 500);
    if (redirect) {
        setTimeout(() => registerClear(dispatch), 500);
        return <Redirect to={SIGN_IN_PATH}/>;
    }

    console.log('render RegisterContainer');
    return (
        <Register
            loading={loading.value}
            error={error.data.message || ''}
            success={success.value}

            email={email} setEmailCallback={setEmailCallback}
            password={password} setPasswordCallback={setPasswordCallback}
            password2={password2} setPassword2Callback={setPassword2Callback}

            registerCallback={register}
        />
    );
};

export default RegisterContainer;
