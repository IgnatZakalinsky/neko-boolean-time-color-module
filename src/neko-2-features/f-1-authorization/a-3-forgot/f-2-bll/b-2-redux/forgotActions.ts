export const FORGOT_LOADING = 'FORGOT/LOADING';
export const FORGOT_ERROR = 'FORGOT/ERROR';
export const FORGOT_SUCCESS = 'FORGOT/SUCCESS';

export const FORGOT_ACTION_NAMES = [FORGOT_LOADING, FORGOT_ERROR, FORGOT_SUCCESS];

export const FORGOT = 'FORGOT/SOME';

interface IForgotSome { // blank
    type: typeof FORGOT;
}

export type IForgotActions = IForgotSome;

export const forgotSome = (): IForgotSome => ({ // blank
    type: FORGOT,
});

