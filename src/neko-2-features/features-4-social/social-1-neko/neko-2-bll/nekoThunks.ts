import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {INekoActions, nekoSetName} from "./bll-2-redux/nekoActions";
import {NekoAPI} from "../neko-3-dal/NekoAPI";
import {getCookie, setCookie} from "../../../features-2-helpers/helpers-1-authorization/cookies";
import {nekoLoading, nekoError, nekoSuccess} from "./bll-1-callbacks/nekoBooleanCallbacks";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const getMe = (): ThunkAction<Return, IAppStore, ExtraArgument, INekoActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, INekoActions>, getStore: IGetStore) => {
        const token = getCookie('token') || '';

        if (token) {
            nekoLoading(dispatch, true);

            try {
                const data = await NekoAPI.getMe(token);
                if (data.error) {
                    nekoError(dispatch, data.error);
                    if (data.error === 'bad token!') setCookie('token', '', -1000);

                    console.log('Neko Get Me Error!', data.error, token);
                } else {
                    setCookie('token', data.token, Math.floor(data.tokenDeathTime / 1000) - 180);

                    dispatch(nekoSetName(data.name));
                    nekoSuccess(dispatch, true);

                    console.log('Neko Get Me Success!', data.name)
                }
            } catch (e) {
                nekoError(dispatch, e.response.data.error);
                if (e.response.data.error === 'bad token!') setCookie('token', '', -1000);

                console.log('Neko Get Me Error!', {...e})
            }
        }
    };
