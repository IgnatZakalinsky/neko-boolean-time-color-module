import {ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../../neko-1-main/m-2-bll/store";
import {IBooleanActions} from "../../../../f-3-common/c-1-boolean-reducer/booleanActions";
import {INekoActions, nekoSetName} from "../b-2-redux/nekoActions";
import {nekoClear} from "./nekoBooleanCallbacks";
import {setCookie} from "../../../../f-2-helpers/h-1-authorization/cookies";

type ExtraArgument = {};

export const logoutCallback = (
    dispatch: ThunkDispatch<IAppStore, ExtraArgument, IBooleanActions | INekoActions>,
) => () => {
        setCookie('token', '', -1000);
        dispatch(nekoSetName(''));
        nekoClear(dispatch);
};
