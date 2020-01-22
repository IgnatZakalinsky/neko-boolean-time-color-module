import {IChat} from "../../private-chat-3-dal/PrivateChatAPI";
import {IUser} from "../../../social-2-users/users-3-dal/UsersAPI";

export const CHATS_LOADING = 'CHATS/LOADING';
export const CHATS_ERROR = 'CHATS/ERROR';
export const CHATS_SUCCESS = 'CHATS/SUCCESS';

export const CHATS_ACTION_NAMES = [CHATS_LOADING, CHATS_ERROR, CHATS_SUCCESS];

export const SET_CHATS = 'CHATS/SET_CHATS';

interface ISetChats {
    type: typeof SET_CHATS;
    chats: IChat[];
    users: IUser[];
}

export type IChatsActions = ISetChats;

export const setChats = (chats: IChat[], users: IUser[]): ISetChats => ({
    type: SET_CHATS,
    chats,
    users,
});
