import {IUser} from "../../users-3-dal/UsersAPI";

export interface IUsersState {
    users: IUser[];
}

export const usersInitialState: IUsersState = {
    users: [],
};
