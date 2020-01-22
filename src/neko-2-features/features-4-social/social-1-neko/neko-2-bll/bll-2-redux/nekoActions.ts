export const NEKO_LOADING = 'NEKO/LOADING';
export const NEKO_ERROR = 'NEKO/ERROR';
export const NEKO_SUCCESS = 'NEKO/SUCCESS';

export const NEKO_ACTION_NAMES = [NEKO_LOADING, NEKO_ERROR, NEKO_SUCCESS];

export const NEKO_SET_NAME = 'NEKO/SET_NAME';

interface INekoSetName {
    type: typeof NEKO_SET_NAME;
    name: string;
}

export type INekoActions = INekoSetName;

export const nekoSetName = (name: string): INekoSetName => ({
    type: NEKO_SET_NAME,
    name,
});
