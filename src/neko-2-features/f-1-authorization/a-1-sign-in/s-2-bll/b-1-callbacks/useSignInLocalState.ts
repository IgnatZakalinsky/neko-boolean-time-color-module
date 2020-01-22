import {useState} from "react";
import {Dispatch} from "redux";
import {signInClear} from "./signInBooleanCallbacks";
import {useBooleanSelector} from "../../../../f-3-common/c-1-boolean-reducer/useBooleanSelectors";
import {SIGN_IN_ERROR} from "../b-2-redux/signInActions";

export const useSignInLocalState = (dispatch: Dispatch) => {
    const [email, setEmail] = useState('test@email.nya');
    const [password, setPassword] = useState('test password nya');
    const [rememberMe, setRememberMe] = useState(false);

    const [redirect, setRedirect] = useState(false);

    const [error] = useBooleanSelector([SIGN_IN_ERROR]);

    const setEmailCallback = (emailC: string) => {
        setEmail(emailC);
        error.data.message && signInClear(dispatch);
    };
    const setPasswordCallback = (passwordC: string) => {
        setPassword(passwordC);
        error.data.message && signInClear(dispatch);
    };
    const setRememberMeCallback = (rememberMeC: boolean) => {
        setRememberMe(rememberMeC);
        error.data.message && signInClear(dispatch);
    };

    return {
        email, setEmailCallback,
        password, setPasswordCallback,
        rememberMe, setRememberMeCallback,

        redirect, setRedirect,
    }
};
