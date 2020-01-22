import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {UsersAPI} from "../users-3-dal/UsersAPI";
import {setUsers, IUsersActions} from "./bll-2-redux/usersActions";
import {usersError, usersLoading, usersSuccess} from "./bll-1-callbacks/usersBooleanCallbacks";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const getUsers = (): ThunkAction<Return, IAppStore, ExtraArgument, IUsersActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IUsersActions>, getStore: IGetStore) => {

        usersLoading(dispatch, true);

        try {
            const data = await UsersAPI.getUsers();
            if (data.error) {
                usersError(dispatch, data.error);

                console.log('Neko Get Users Error!', data.error);
            } else {

                dispatch(setUsers(data.users));
                usersSuccess(dispatch, true);

                console.log('Neko Get Users Success!', data.users)
            }
        } catch (e) {
            usersError(dispatch, e.response.data.error);

            console.log('Neko Get Users Error!', {...e})
        }
    };
