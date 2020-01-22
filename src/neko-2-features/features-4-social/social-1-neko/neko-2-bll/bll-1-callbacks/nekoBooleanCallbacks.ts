import {Dispatch} from "redux";
import {
    booleanLoading,
    booleanError,
    booleanSuccess,
    booleanClear
} from "../../../../features-3-common/common-1-boolean-reducer/booleanCallbacks";
import {NEKO_ACTION_NAMES} from "../bll-2-redux/nekoActions";

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
