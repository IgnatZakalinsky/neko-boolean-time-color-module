import {IUser} from "../../users-3-dal/UsersAPI";

export const USERS_LOADING = 'USERS/LOADING';
export const USERS_ERROR = 'USERS/ERROR';
export const USERS_SUCCESS = 'USERS/SUCCESS';

export const USERS_ACTION_NAMES = [USERS_LOADING, USERS_ERROR, USERS_SUCCESS];

export const SET_USERS = 'USERS/SET_USERS';

interface ISetUsers {
    type: typeof SET_USERS;
    users: IUser[];
}

export type IUsersActions = ISetUsers;

export const setUsers = (users: IUser[]): ISetUsers => ({
    type: SET_USERS,
    users,
});
