import {ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../../neko-1-main/main-2-bll/store";
import {IBooleanActions} from "../../../../features-3-common/common-1-boolean-reducer/booleanActions";
import {emailValidator} from "../../../../features-2-helpers/helpers-1-authorization/emailValidator";
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
