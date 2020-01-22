export interface IBooleanDataObject {
    message?: string;
}

export interface IBooleanObject {
    name: string;
    value: boolean;
    data: IBooleanDataObject;
}

export interface IBooleanState {
    booleans: IBooleanObject[];
}

export const booleanInitialState: IBooleanState = {
    booleans: [],
};
