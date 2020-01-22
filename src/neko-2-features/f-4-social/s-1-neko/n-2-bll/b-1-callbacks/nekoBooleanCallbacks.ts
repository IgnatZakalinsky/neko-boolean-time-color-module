import {Dispatch} from "redux";
import {
    booleanLoading,
    booleanError,
    booleanSuccess,
    booleanClear
} from "../../../../f-3-common/c-1-boolean-reducer/booleanCallbacks";
import {NEKO_ACTION_NAMES} from "../b-2-redux/nekoActions";

export const nekoLoading = (dispatch: Dispatch, loading: boolean) => {
    booleanLoading(dispatch, NEKO_ACTION_NAMES, loading);
};
export const nekoError = (dispatch: Dispatch, error: string) => {
    booleanError(dispatch, NEKO_ACTION_NAMES, error);
};
export const nekoSuccess = (dispatch: Dispatch, success: boolean) => {
    booleanSuccess(dispatch, NEKO_ACTION_NAMES, success);
};
export const nekoClear = (dispatch: Dispatch) => {
    booleanClear(dispatch, NEKO_ACTION_NAMES);
};
