import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import {IRegisterActions} from "./b-2-redux/registerActions";
import {RegisterAPI} from "../r-3-dal/RegisterAPI";
import {passwordCoding} from "../../../f-2-helpers/h-1-authorization/passwordCoding";
import {registerError, registerLoading, registerSuccess} from "./b-1-callbacks/registerBooleanCallbacks";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const register =
    (email: string, password: string): ThunkAction<Return, IAppStore, ExtraArgument, IRegisterActions> =>
        async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IRegisterActions>, getStore: IGetStore) => {

            registerLoading(dispatch, true);

            try {
                const data = await RegisterAPI.register(email, passwordCoding(password));

                if (data.error) {
                    registerError(dispatch, data.error);

                } else {
                    registerSuccess(dispatch, true);

                    console.log('Neko Register Success!', data)
                }
            } catch (e) {
                registerError(dispatch, e.response.data.error);

                console.log('Neko Register Error!', {...e})
            }
        };
