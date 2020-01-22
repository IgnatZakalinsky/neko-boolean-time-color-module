import React, {useEffect} from 'react';
import Users from "./Users";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../users-2-bll/usersThunks";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {useBooleanSelector} from "../../../features-3-common/common-1-boolean-reducer/useBooleanSelectors";
import {USERS_ACTION_NAMES} from "../users-2-bll/bll-2-redux/usersActions";
import {startPrivateChat} from "../../social-3-private-chat/private-chat-2-bll/startPrivateChatThunks";

const UsersContainer: React.FC = () => {
    const [loading, error, success] = useBooleanSelector(USERS_ACTION_NAMES);
    const {users} = useSelector((store: IAppStore) => store.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const startPrivateChatCallback = (userId: string) => () => dispatch(startPrivateChat(userId));

    console.log('render UsersContainer');
    return (
        <Users
            loading={loading.value} error={error.data.message || ''}

            users={users}
            startPrivateChatCallback={startPrivateChatCallback}
        />
    );
};

export default UsersContainer;
