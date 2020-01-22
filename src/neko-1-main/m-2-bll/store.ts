import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {signInReducer} from "../../neko-2-features/f-1-authorization/a-1-sign-in/s-2-bll/b-2-redux/signInReducer";
import {registerReducer} from "../../neko-2-features/f-1-authorization/a-2-register/r-2-bll/b-2-redux/registerReducer";
import {forgotReducer} from "../../neko-2-features/f-1-authorization/a-3-forgot/f-2-bll/b-2-redux/forgotReducer";
import {nekoReducer} from "../../neko-2-features/f-4-social/s-1-neko/n-2-bll/b-2-redux/nekoReducer";
import {booleanReducer} from "../../neko-2-features/f-3-common/c-1-boolean-reducer/booleanReducer";

const reducers = combineReducers({
    signIn: signInReducer,
    register: registerReducer,
    forgot: forgotReducer,

    booleans: booleanReducer,

    neko: nekoReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type IAppStore = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
