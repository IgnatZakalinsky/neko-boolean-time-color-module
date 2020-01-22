import {usersInitialState} from "./usersInitialState";
import {IUsersActions, SET_USERS} from "./usersActions";

export const usersReducer = (state = usersInitialState, action: IUsersActions) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.users,
            }
        }

        default: {
            return state;
        }
    }
};
