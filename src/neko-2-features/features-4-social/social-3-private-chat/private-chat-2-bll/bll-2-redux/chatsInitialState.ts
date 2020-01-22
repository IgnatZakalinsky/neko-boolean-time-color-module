import {IUser} from "../../../social-2-users/users-3-dal/UsersAPI";
import {IChat} from "../../private-chat-3-dal/PrivateChatAPI";

export interface IChatsState {
    chats: IChat[];
    users: IUser[];
}

export const chatsInitialState: IChatsState = {
    chats: [],
    users: [],
};
