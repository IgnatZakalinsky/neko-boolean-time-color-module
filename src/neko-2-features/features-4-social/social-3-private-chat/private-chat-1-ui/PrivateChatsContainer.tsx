import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {useBooleanSelector} from "../../../features-3-common/common-1-boolean-reducer/useBooleanSelectors";
import PrivateChats from "./PrivateChats";
import {getPrivateChats} from "../private-chat-2-bll/getPrivateChatsThunks";
import {getMessages} from "../private-chat-2-bll/getMessagesThunks";
import {sendMessage} from "../private-chat-2-bll/sendMessageThunks";

const PrivateChatContainer: React.FC = () => {
    // const [loading, error, success] = useBooleanSelector(USERS_ACTION_NAMES);
    const {chats, users} = useSelector((store: IAppStore) => store.chats);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPrivateChats());
    }, []);

    const getMessagesCallback = (chatId: string) => () => {
        dispatch(getMessages(chatId));
        dispatch(sendMessage(chatId, 'some message'));
    };

    const chatMap = chats.map(c => (
        <div key={c._id}>
            <button onClick={getMessagesCallback(c._id)}>{c._id}</button>
        </div>
    ));

    console.log('render PrivateChatContainer');
    return (
        <>
            <PrivateChats
                // loading={loading.value} error={error.data.message || ''}
                //
                // users={users}
                // startPrivateChatCallback={startPrivateChatCallback}
            />
            {chatMap}
        </>
    );
};

export default PrivateChatContainer;
