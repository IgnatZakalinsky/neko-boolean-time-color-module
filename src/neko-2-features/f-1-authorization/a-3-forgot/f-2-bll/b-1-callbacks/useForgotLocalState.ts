import {useState} from "react";
import {Dispatch} from "redux";
import {forgotClear} from "./forgotBooleanCallbacks";
import {useBooleanSelector} from "../../../../f-3-common/c-1-boolean-reducer/useBooleanSelectors";
import {FORGOT_ERROR} from "../b-2-redux/forgotActions";

export const useForgotLocalState = (dispatch: Dispatch) => {
    const [email, setEmail] = useState('test@email.nya');

    const [redirect, setRedirect] = useState(false);

    const [error] = useBooleanSelector([FORGOT_ERROR]);

    const setEmailCallback = (emailC: string) => {
        setEmail(emailC);
        error.data.message && forgotClear(dispatch);
    };

    return {
        email, setEmailCallback,

        redirect, setRedirect,
    }
};
