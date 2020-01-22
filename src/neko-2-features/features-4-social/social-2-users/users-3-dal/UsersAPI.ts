import {instance} from "../../../../base-url";

export interface IUser {
    _id: string;
    email: string;
}

export interface IGetUsersData {
    users: IUser[];

    error: string;
}

export const UsersAPI = {
    getUsers: async () => {
        const response = await instance.get<IGetUsersData>('/users');
        return response.data;
    },

};
