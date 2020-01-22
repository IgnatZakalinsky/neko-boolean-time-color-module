import {useState} from "react";
import {Dispatch} from "redux";
import {registerClear} from "./registerBooleanCallbacks";
import {useBooleanSelector} from "../../../../features-3-common/common-1-boolean-reducer/useBooleanSelectors";
import {REGISTER_ERROR} from "../bll-2-redux/registerActions";

export const useRegisterLocalState = (dispatch: Dispatch) => {
    const [email, setEmail] = useState('test@email.nya');
    const [password, setPassword] = useState('test password nya');
    const [password2, setPassword2] = useState('test password nya2');

    const [redirect, setRedirect] = useState(false);

    const [error] = useBooleanSelector([REGISTER_ERROR]);

    const setEmailCallback = (emailC: string) => {
        setEmail(emailC);
        error.data.message && registerClear(dispatch);
    };
    const setPasswordCallback = (passwordC: string) => {
        setPassword(passwordC);
        error.data.message && registerClear(dispatch);
    };
    const setPassword2Callback = (password2C: string) => {
        setPassword2(password2C);
        error.data.message && registerClear(dispatch);
    };

    return {
        email, setEmailCallback,
        password, setPasswordCallback,
        password2, setPassword2Callback,

        redirect, setRedirect,
    }
};
