import {ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../../neko-1-main/m-2-bll/store";
import {IBooleanActions} from "../../../../f-3-common/c-1-boolean-reducer/booleanActions";
import {emailValidator} from "../../../../f-2-helpers/h-1-authorization/emailValidator";
import {passwordValidator} from "../../../../f-2-helpers/h-1-authorization/passwordValidator";
import {signIn} from "../signInThunk";
import {signInError} from "./signInBooleanCallbacks";

type ExtraArgument = {};

export const signInCallback = (
    dispatch: ThunkDispatch<IAppStore, ExtraArgument, IBooleanActions>,
    email: string,
    password: string,
    rememberMe: boolean
) => () => {
    if (!emailValidator(email)) {
        signInError(dispatch, 'Email not valid!');

    } else if (!passwordValidator(password)) {
        signInError(dispatch, 'Password not valid! must be more than 7 characters...');

    } else {
        dispatch(signIn(email, password, rememberMe));
    }
};
