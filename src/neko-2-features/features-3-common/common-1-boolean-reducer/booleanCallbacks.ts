import {Dispatch} from "redux";
import {booleanSetValue} from "./booleanActions";

// ACTION_NAMES == [loading, error, success]

export const booleanLoading = (dispatch: Dispatch, ACTION_NAMES: string[], loading: boolean) => {
    dispatch(booleanSetValue([
        {name: ACTION_NAMES[0], value: loading, data: {}},
        {name: ACTION_NAMES[1], value: false, data: {}},
        {name: ACTION_NAMES[2], value: false, data: {}},
    ]))
};
export const booleanError = (dispatch: Dispatch, ACTION_NAMES: string[], error: string) => {
    dispatch(booleanSetValue([
        {name: ACTION_NAMES[0], value: false, data: {}},
        {name: ACTION_NAMES[1], value: true, data: {message: error}},
        {name: ACTION_NAMES[2], value: false, data: {}},
    ]))
};
export const booleanSuccess = (dispatch: Dispatch, ACTION_NAMES: string[], success: boolean) => {
    dispatch(booleanSetValue([
        {name: ACTION_NAMES[0], value: false, data: {}},
        {name: ACTION_NAMES[1], value: false, data: {}},
        {name: ACTION_NAMES[2], value: success, data: {}},
    ]))
};
export const booleanClear = (dispatch: Dispatch, ACTION_NAMES: string[]) => {
    dispatch(booleanSetValue([
        {name: ACTION_NAMES[0], value: false, data: {}},
        {name: ACTION_NAMES[1], value: false, data: {}},
        {name: ACTION_NAMES[2], value: false, data: {}},
    ]))
};
