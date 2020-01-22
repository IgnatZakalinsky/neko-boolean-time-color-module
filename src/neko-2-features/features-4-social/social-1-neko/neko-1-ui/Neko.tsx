import React from 'react';
import {NavLink} from "react-router-dom";
import {
    NEKO_USERS_PATH,
    TEST_COLOR_PATH,
    TEST_MODALS_PATH,
    TEST_TIME_PATH
} from "../../../../neko-1-main/main-1-ui/Routes";
import {FlexColumnCenterCenter} from "../../../../neko-3-styles/flex-containers";

interface INekoProps {
    loading: boolean;
    error: string;

    name: string;

    logoutCallback: () => void;
}

const Neko: React.FC<INekoProps> = (
    {
        loading, error,

        name,

        logoutCallback,
    }
) => {

    console.log('render Neko');
    return (
        <div
            style={{
                ...FlexColumnCenterCenter,
                height: '80vh',
            }}
        >
            neko

            {loading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : name
                        ? <div style={{color: 'lime'}}>{name}</div>
                        : <div><br/></div>
            }

            <button onClick={logoutCallback} disabled={loading}>logout</button>

            {/*<NavLink to={TEST_MODALS_PATH}>Modals</NavLink>*/}
            {/*<NavLink to={TEST_TIME_PATH}>Time</NavLink>*/}
            {/*<NavLink to={TEST_COLOR_PATH}>Color</NavLink>*/}

            <NavLink to={NEKO_USERS_PATH}>Users</NavLink>
            <NavLink to={NEKO_USERS_PATH}>My private chats</NavLink>
            <NavLink to={NEKO_USERS_PATH}>Chats</NavLink>
            <NavLink to={NEKO_USERS_PATH}>Anonymous chats</NavLink>
        </div>
    );
};

export default Neko;
