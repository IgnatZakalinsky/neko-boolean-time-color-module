import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {getCookie, setCookie} from "../../../features-2-helpers/helpers-1-authorization/cookies";
import {PrivateChatAPI} from "../private-chat-3-dal/PrivateChatAPI";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const startPrivateChat = (userId: string): ThunkAction<Return, IAppStore, ExtraArgument, {type: any}> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, {type: any}>, getStore: IGetStore) => {
        const token = getCookie('token') || '';

        if (token) {
            // nekoLoading(dispatch, true);

            try {
                const data = await PrivateChatAPI.startChat(token, userId);
                if (data.error) {
                    // nekoError(dispatch, data.error);
                    // setCookie('token', '', -1000);

                    console.log('Neko Start private chat Error!', data.error, token);
                } else {
                    // dispatch(nekoSetName(data.addedPrivateChat));
                    // nekoSuccess(dispatch, true);

                    console.log('Neko Start private chat Success!', data)
                }
            } catch (e) {
                // nekoError(dispatch, e.response.data.error);
                // setCookie('token', '', -1000);

                console.log('Neko Start private chat Error!', {...e})
            }
        }
    };
