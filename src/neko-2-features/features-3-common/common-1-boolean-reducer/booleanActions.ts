import {IBooleanObject} from "./booleanInitialState";

export const BOOLEAN_SET_VALUE = 'BOOLEAN/SET_VALUE';

interface IBooleanSetValue {
    type: typeof BOOLEAN_SET_VALUE;
    booleans: IBooleanObject[];
}

export type IBooleanActions = IBooleanSetValue;

export const booleanSetValue = (booleans: IBooleanObject[]): IBooleanSetValue => ({
    type: BOOLEAN_SET_VALUE,
    booleans,
});
