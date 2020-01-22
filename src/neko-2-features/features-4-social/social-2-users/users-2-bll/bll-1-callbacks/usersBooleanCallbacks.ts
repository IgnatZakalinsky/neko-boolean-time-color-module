import {Dispatch} from "redux";
import {
    booleanLoading,
    booleanError,
    booleanSuccess,
    booleanClear
} from "../../../../features-3-common/common-1-boolean-reducer/booleanCallbacks";
import {USERS_ACTION_NAMES} from "../bll-2-redux/usersActions";

export const usersLoading = (dispatch: Dispatch, loading: boolean) => {
    booleanLoading(dispatch, USERS_ACTION_NAMES, loading);
};
export const usersError = (dispatch: Dispatch, error: string) => {
    booleanError(dispatch, USERS_ACTION_NAMES, error);
};
export const usersSuccess = (dispatch: Dispatch, success: boolean) => {
    booleanSuccess(dispatch, USERS_ACTION_NAMES, success);
};
export const usersClear = (dispatch: Dispatch) => {
    booleanClear(dispatch, USERS_ACTION_NAMES);
};
