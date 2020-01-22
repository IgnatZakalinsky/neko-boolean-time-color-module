import {nekoInitialState} from "./nekoInitialState";
import {INekoActions, NEKO_SET_NAME} from "./nekoActions";

export const nekoReducer = (state = nekoInitialState, action: INekoActions) => {
    switch (action.type) {
        case NEKO_SET_NAME: {
            return {
                ...state,
                name: action.name,
            }
        }

        default: {
            return state;
        }
    }
};
