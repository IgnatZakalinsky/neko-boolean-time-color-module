import {ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../../neko-1-main/main-2-bll/store";
import {IBooleanActions} from "../../../../features-3-common/common-1-boolean-reducer/booleanActions";
import {emailValidator} from "../../../../features-2-helpers/helpers-1-authorization/emailValidator";
import {passwordValidator} from "../../../../features-2-helpers/helpers-1-authorization/passwordValidator";
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
