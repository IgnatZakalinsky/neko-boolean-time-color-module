import {ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../../neko-1-main/m-2-bll/store";
import {IBooleanActions} from "../../../../f-3-common/c-1-boolean-reducer/booleanActions";
import {emailValidator} from "../../../../f-2-helpers/h-1-authorization/emailValidator";
import {forgotError} from "./forgotBooleanCallbacks";
import {forgot} from "../forgotThunk";

type ExtraArgument = {};

export const forgotCallback = (
    dispatch: ThunkDispatch<IAppStore, ExtraArgument, IBooleanActions>,
    email: string,
) => () => {
    if (!emailValidator(email)) {
        forgotError(dispatch, 'Email not valid!');

    } else {
        dispatch(forgot(email));
    }
};
