import React from 'react';
import {Redirect, Route} from "react-router-dom";
import SignInPage from '../../neko-2-features/f-1-authorization/a-1-sign-in/s-1-ui/SignInPage';
import RegisterPage from '../../neko-2-features/f-1-authorization/a-2-register/r-1-ui/RegisterPage';
import ForgotPage from '../../neko-2-features/f-1-authorization/a-3-forgot/f-1-ui/ForgotPage';
import NekoPage from "../../neko-2-features/f-4-social/s-1-neko/n-1-ui/NekoPage";
import ModalsPage from "../../neko-2-features/f-3-common/c-2-modals/modals-1-ui/ModalsPage";
import TimePage from "../../neko-2-features/f-3-common/c-3-time/t-1-ui/TimePage";
import ColorPage from '../../neko-2-features/f-3-common/c-4-color/c-1-ui/ColorPage';

// all project paths
export const SIGN_IN_PATH = '/sign-in';
export const REGISTER_PATH = '/register';
export const FORGOT_PATH = '/forgot';

export const NEKO_PATH = '/neko'; // profile

export const TEST_MODALS_PATH = '/test-modals';
export const TEST_TIME_PATH = '/test-time';
export const TEST_COLOR_PATH = '/test-color';

const Routes: React.FC = () => {
    return (
        <>
            <Route exact path={'/'} render={() => <Redirect to={SIGN_IN_PATH}/>}/>

            <Route path={SIGN_IN_PATH} render={() => <SignInPage/>}/>
            <Route path={REGISTER_PATH} render={() => <RegisterPage/>}/>
            <Route path={FORGOT_PATH} render={() => <ForgotPage/>}/>

            <Route path={NEKO_PATH} render={() => <NekoPage/>}/>

            <Route path={TEST_MODALS_PATH} render={() => <ModalsPage/>}/>
            <Route path={TEST_TIME_PATH} render={() => <TimePage/>}/>
            <Route path={TEST_COLOR_PATH} render={() => <ColorPage/>}/>
        </>
    );
};

export default Routes;
