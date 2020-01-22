import React from 'react';
import {Redirect} from "react-router-dom";
import {SIGN_IN_PATH} from "../../../../neko-1-main/m-1-ui/Routes";
import {useNekoContainerLogic} from "../n-2-bll/b-1-callbacks/useNekoContainerLogic";
import Neko from "./Neko";
import {FlexColumnCenterCenter} from "../../../../neko-3-styles/flex-containers";

const NekoContainer: React.FC = () => {
    const {
        loading, error, success, dispatch,
        name,

        show, setShow,

        redirect, setRedirect,

        logout,
    } = useNekoContainerLogic();

    // redirect logic
    if (redirect) {
        return <Redirect to={SIGN_IN_PATH}/>;
    }

    console.log('render NekoContainer');
    if (!show) return (
        <div
            style={{
                ...FlexColumnCenterCenter,
                height: '80vh',
                color: 'orange',
            }}
        >
            Loading...
        </div>
    );

    return (
        <Neko
            loading={loading.value}
            error={error.data.message || ''}

            name={name}

            logoutCallback={logout}
        />
    );
};

export default NekoContainer;
