import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSignInLocalState} from "./useSignInLocalState";
import {useBooleanSelector} from "../../../../f-3-common/c-1-boolean-reducer/useBooleanSelectors";
import {IAppStore} from "../../../../../neko-1-main/m-2-bll/store";
import {NEKO_LOADING, NEKO_SUCCESS} from "../../../../f-4-social/s-1-neko/n-2-bll/b-2-redux/nekoActions";
import {SIGN_IN_ACTION_NAMES} from "../b-2-redux/signInActions";
import {getMe} from "../../../../f-4-social/s-1-neko/n-2-bll/nekoThunks";
import {signInCallback} from "./signInCallBacks";

export const useSignInContainerLogic = () => {
    // redux
    const [loading, error, success] = useBooleanSelector(SIGN_IN_ACTION_NAMES);
    const [nekoSuccess, nekoLoading] = useBooleanSelector([NEKO_SUCCESS, NEKO_LOADING]);
    const dispatch = useDispatch();
    const {name} = useSelector((store: IAppStore) => store.neko);

    // local state
    const {
        email, setEmailCallback,
        password, setPasswordCallback,
        rememberMe, setRememberMeCallback,

        redirect, setRedirect,
    } = useSignInLocalState(dispatch);

    // useEffects
    useEffect(() => {
        if (!name) dispatch(getMe());
    }, []);

    // callbacks
    const signIn = signInCallback(dispatch, email, password, rememberMe);

    return {
        loading, error, success, dispatch,
        nekoSuccess, nekoLoading,

        email, setEmailCallback,
        password, setPasswordCallback,
        rememberMe, setRememberMeCallback,

        redirect, setRedirect,

        signIn,
    }
};
