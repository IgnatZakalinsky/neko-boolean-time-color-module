import React from 'react';
import {NavLink} from "react-router-dom";
import {FlexColumnCenterCenter} from "../../../../neko-3-styles/flex-containers";
import {SIGN_IN_PATH} from "../../../../neko-1-main/main-1-ui/Routes";

interface IForgotProps {
    loading: boolean;
    error: string;
    success: boolean;

    email: string;

    setEmailCallback: (email: string) => void;

    forgotCallback: () => void;
}

const Forgot: React.FC<IForgotProps> = (
    {
        loading, error, success,

        email, setEmailCallback,

        forgotCallback
    }
) => {

    console.log('render Forgot');
    return (
        <div
            style={{
                ...FlexColumnCenterCenter,
                height: '80vh',
            }}
        >
            forgot

            {loading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : success
                        ? <div style={{color: 'lime'}}>Success!</div>
                        : <div><br/></div>
            }

            <input value={email} onChange={e => setEmailCallback(e.currentTarget.value)}/>

            <button onClick={forgotCallback} disabled={loading || success}>Send email</button>

            <NavLink to={SIGN_IN_PATH}>Sign In</NavLink>
        </div>
    );
};

export default Forgot;
