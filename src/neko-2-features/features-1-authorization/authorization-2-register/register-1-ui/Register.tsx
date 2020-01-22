import React from 'react';
import {NavLink} from "react-router-dom";
import {FlexColumnCenterCenter} from "../../../../neko-3-styles/flex-containers";
import {SIGN_IN_PATH} from "../../../../neko-1-main/main-1-ui/Routes";

interface IRegisterProps {
    loading: boolean;
    error: string;
    success: boolean;

    email: string;
    password: string;
    password2: string;

    setEmailCallback: (email: string) => void;
    setPasswordCallback: (password: string) => void;
    setPassword2Callback: (password: string) => void;

    registerCallback: () => void;
}

const Register: React.FC<IRegisterProps> = (
    {
        loading, error, success,

        email, setEmailCallback,
        password, setPasswordCallback,
        password2, setPassword2Callback,

        registerCallback
    }
) => {

    console.log('render Register');
    return (
        <div
            style={{
                ...FlexColumnCenterCenter,
                height: '80vh',
            }}
        >
            register

            {loading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : success
                        ? <div style={{color: 'lime'}}>Success!</div>
                        : <div><br/></div>
            }

            <input value={email} onChange={e => setEmailCallback(e.currentTarget.value)}/>
            <input value={password} onChange={e => setPasswordCallback(e.currentTarget.value)} type={'password'}/>
            <input value={password2} onChange={e => setPassword2Callback(e.currentTarget.value)} type={'password'}/>

            <button onClick={registerCallback} disabled={loading || success}>Register</button>

            <NavLink to={SIGN_IN_PATH}>Sign In</NavLink>
        </div>
    );
};

export default Register;
