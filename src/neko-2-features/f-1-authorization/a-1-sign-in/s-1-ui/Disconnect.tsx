import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {FlexColumnCenterCenter} from "../../../../neko-3-styles/flex-containers";
import {NEKO_PATH} from "../../../../neko-1-main/m-1-ui/Routes";
import {logoutCallback} from "../../../f-4-social/s-1-neko/n-2-bll/b-1-callbacks/nekoCallBacks";

interface IDisconnectProps {

}

const Disconnect: React.FC<IDisconnectProps> = (
    {

    }
) => {
    const dispatch = useDispatch();

    console.log('render Disconnect');
    return (
        <div
            style={{
                ...FlexColumnCenterCenter,
                height: '80vh',
            }}
        >
            <button onClick={logoutCallback(dispatch)}>logout</button>
            <NavLink to={NEKO_PATH}>Neko Profile</NavLink>
        </div>
    )
};

export default Disconnect;
