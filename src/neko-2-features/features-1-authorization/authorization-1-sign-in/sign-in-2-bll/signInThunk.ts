import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {ISignInActions} from "./bll-2-redux/signInActions";
import {SignInAPI} from "../sign-in-3-dal/SignInAPI";
import {passwordCoding} from "../../../features-2-helpers/helpers-1-authorization/passwordCoding";
import {INekoActions, nekoSetName} from "../../../features-4-social/social-1-neko/neko-2-bll/bll-2-redux/nekoActions";
import {setCookie} from "../../../features-2-helpers/helpers-1-authorization/cookies";
import {IBooleanActions} from "../../../features-3-common/common-1-boolean-reducer/booleanActions";
import {signInError, signInLoading, signInSuccess} from "./bll-1-callbacks/signInBooleanCallbacks";
import { nekoClear } from "../../../features-4-social/social-1-neko/neko-2-bll/bll-1-callbacks/nekoBooleanCallbacks";

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
