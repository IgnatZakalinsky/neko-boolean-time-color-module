import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useBooleanSelector} from "../../../../features-3-common/common-1-boolean-reducer/useBooleanSelectors";
import {useNekoLocalState} from "./useNekoLocalState";
import {IAppStore} from "../../../../../neko-1-main/main-2-bll/store";
import {NEKO_ACTION_NAMES} from "../bll-2-redux/nekoActions";
import {logoutCallback} from "./nekoCallBacks";
import {getMe} from "../nekoThunks";
import {getCookie} from "../../../../features-2-helpers/helpers-1-authorization/cookies";


export const useNekoContainerLogic = () => {
    // redux
    const [loading, error, success] = useBooleanSelector(NEKO_ACTION_NAMES);
    const {name} = useSelector((store: IAppStore) => store.neko);
    const dispatch = useDispatch();

    // local state
    const {
        show, setShow,

        redirect, setRedirect,
    } = useNekoLocalState(dispatch);

    // useEffects
    useEffect(() => {
        if (!name) dispatch(getMe());
    }, []);

    useEffect(() => {
        if (!getCookie('token')) setRedirect(true);

        else setShow(true);
    }, [name, error]);

    // callbacks
    const logout = logoutCallback(dispatch);

    return {
        loading, error, success, dispatch,
        name,

        show, setShow,

        redirect, setRedirect,

        logout,
    }
};
