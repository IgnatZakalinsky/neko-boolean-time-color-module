export const REGISTER_LOADING = 'REGISTER/LOADING';
export const REGISTER_ERROR = 'REGISTER/ERROR';
export const REGISTER_SUCCESS = 'REGISTER/SUCCESS';

export const REGISTER_ACTION_NAMES = [REGISTER_LOADING, REGISTER_ERROR, REGISTER_SUCCESS];

export const REGISTER = 'REGISTER/SOME';

interface IRegisterSome { // blank
    type: typeof REGISTER;
}

export type IRegisterActions = IRegisterSome;

export const registerSome = (): IRegisterSome => ({ // blank
    type: REGISTER,
});
