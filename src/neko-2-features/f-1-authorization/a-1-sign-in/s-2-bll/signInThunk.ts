import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import {ISignInActions} from "./b-2-redux/signInActions";
import {SignInAPI} from "../s-3-dal/SignInAPI";
import {passwordCoding} from "../../../f-2-helpers/h-1-authorization/passwordCoding";
import {INekoActions, nekoSetName} from "../../../f-4-social/s-1-neko/n-2-bll/b-2-redux/nekoActions";
import {setCookie} from "../../../f-2-helpers/h-1-authorization/cookies";
import {IBooleanActions} from "../../../f-3-common/c-1-boolean-reducer/booleanActions";
import {signInError, signInLoading, signInSuccess} from "./b-1-callbacks/signInBooleanCallbacks";
import { nekoClear } from "../../../f-4-social/s-1-neko/n-2-bll/b-1-callbacks/nekoBooleanCallbacks";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const signIn =
    (email: string, password: string, rememberMe: boolean)
        : ThunkAction<Return, IAppStore, ExtraArgument, ISignInActions> =>
        async (
            dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISignInActions | INekoActions | IBooleanActions>,
            getStore: IGetStore
        ) => {
            nekoClear(dispatch);
            signInLoading(dispatch, true);

            try {
                const data = await SignInAPI.signIn(email, passwordCoding(password), rememberMe);

                if (data.error) {
                    signInError(dispatch, data.error);

                } else {
                    setCookie('token', data.token, Math.floor(data.tokenDeathTime / 1000) - 180);

                    dispatch(nekoSetName(data.name));
                    signInSuccess(dispatch, true);

                    console.log('Neko Sign-in Success!', data)
                }
            } catch (e) {
                signInError(dispatch, e.response.data.error);

                console.log('Neko Sign-in Error!', {...e})
            }
        };
