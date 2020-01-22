import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import {IForgotActions} from "./b-2-redux/forgotActions";
import {ForgotAPI} from "../f-3-dal/ForgotAPI";
import {forgotError, forgotLoading, forgotSuccess} from "./b-1-callbacks/forgotBooleanCallbacks";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const forgot = (email: string): ThunkAction<Return, IAppStore, ExtraArgument, IForgotActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IForgotActions>, getStore: IGetStore) => {

        forgotLoading(dispatch, true);

        try {
            const data = await ForgotAPI.forgot(email);

            if (data.error) {
                forgotError(dispatch, data.error);

            } else {
                forgotSuccess(dispatch, true);

                console.log('Neko Forgot Success!', data)
            }
        } catch (e) {
            forgotError(dispatch, e.response.data.error);

            console.log('Neko Forgot Error!', {...e})
        }
    };
