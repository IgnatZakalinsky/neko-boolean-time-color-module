import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {getCookie, setCookie} from "../../../features-2-helpers/helpers-1-authorization/cookies";
import {PrivateChatAPI} from "../private-chat-3-dal/PrivateChatAPI";
import {setChats} from "./bll-2-redux/chatsActions";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const getPrivateChats = (): ThunkAction<Return, IAppStore, ExtraArgument, {type: any}> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, {type: any}>, getStore: IGetStore) => {
        const token = getCookie('token') || '';

        if (token) {
            // nekoLoading(dispatch, true);

            try {
                const data = await PrivateChatAPI.getChats(token);
                if (data.error) {
                    // nekoError(dispatch, data.error);
                    // setCookie('token', '', -1000);

                    console.log('Neko Get private chats Error!', data.error, token);
                } else {
                    dispatch(setChats(data.privateChats, data.users));
                    // nekoSuccess(dispatch, true);

                    console.log('Neko Get private chats Success!', data)
                }
            } catch (e) {
                // nekoError(dispatch, e.response.data.error);
                // setCookie('token', '', -1000);

                console.log('Neko Get private chats Error!', {...e})
            }
        }
    };
