import {Dispatch} from "redux";
import {
    booleanClear,
    booleanError,
    booleanLoading,
    booleanSuccess
} from "../../../../f-3-common/c-1-boolean-reducer/booleanCallbacks";
import {REGISTER_ACTION_NAMES} from "../b-2-redux/registerActions";

export const registerLoading = (dispatch: Dispatch, loading: boolean) => {
    booleanLoading(dispatch, REGISTER_ACTION_NAMES, loading);
};
export const registerError = (dispatch: Dispatch, error: string) => {
    booleanError(dispatch, REGISTER_ACTION_NAMES, error);
};
export const registerSuccess = (dispatch: Dispatch, success: boolean) => {
    booleanSuccess(dispatch, REGISTER_ACTION_NAMES, success);
};
export const registerClear = (dispatch: Dispatch) => {
    booleanClear(dispatch, REGISTER_ACTION_NAMES);
};
