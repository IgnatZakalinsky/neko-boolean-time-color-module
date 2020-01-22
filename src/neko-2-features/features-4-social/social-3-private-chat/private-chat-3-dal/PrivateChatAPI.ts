import {instance} from "../../../../base-url";
import {IUser} from "../../social-2-users/users-3-dal/UsersAPI";

export interface IChat {
    _id: string;
    user1Id: string;
    user2Id: string;

    messages: string[];
}

export interface IAddedPrivateChatData {
    addedPrivateChat: IChat;
    success: boolean;

    error: string;
}
export interface IPrivateChatsData {
    privateChats: IChat[];
    users: IUser[];

    error: string;
}

export const PrivateChatAPI = {
    startChat: async (token: string, userId: string) => {
        const response = await instance.post<IAddedPrivateChatData>('/private-chats', {token, userId});
        return response.data;
    },
    getChats: async (token: string) => {
        const response = await instance.get<IPrivateChatsData>(`/private-chats?token=${token}`);
        return response.data;
    },
    getMessages: async (token: string, chatId: string) => {
        const response = await instance
            .get<IPrivateChatsData>(`/private-chats/messages?token=${token}&chatId=${chatId}`);
        return response.data;
    },
    sendMessage: async (token: string, chatId: string, message: string) => {
        const response = await instance
            .post<IAddedPrivateChatData>('/private-chats/messages', {token, chatId, message});
        return response.data;
    },

};
