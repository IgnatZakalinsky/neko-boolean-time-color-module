import {chatsInitialState} from "./chatsInitialState";
import {IChatsActions, SET_CHATS} from "./chatsActions";


export const chatsReducer = (state = chatsInitialState, action: IChatsActions) => {
    switch (action.type) {
        case SET_CHATS: {
            return {
                ...state,
                users: action.users,
                chats: action.chats,
            }
        }

        default: {
            return state;
        }
    }
};
