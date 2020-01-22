import {useSelector} from "react-redux";
import {IAppStore} from "../../../neko-1-main/main-2-bll/store";
import {IBooleanObject} from "./booleanInitialState";

export const selectBooleans = (store: IAppStore, names: string[]): IBooleanObject[] => {
    const result: IBooleanObject[] = [];
    for (const n of names) {
        result.push(store.booleans.booleans.find(b => b.name === n) || {name: n, value: false, data: {}});
    }
    return result;
};

export const useBooleanSelector = (names: string[]): IBooleanObject[] => {
    return useSelector((store: IAppStore) => selectBooleans(store, names));
};
