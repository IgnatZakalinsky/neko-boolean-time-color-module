import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {signInReducer} from "../../neko-2-features/features-1-authorization/authorization-1-sign-in/sign-in-2-bll/bll-2-redux/signInReducer";
import {registerReducer} from "../../neko-2-features/features-1-authorization/authorization-2-register/register-2-bll/bll-2-redux/registerReducer";
import {forgotReducer} from "../../neko-2-features/features-1-authorization/authorization-3-forgot/forgot-2-bll/bll-2-redux/forgotReducer";
import {nekoReducer} from "../../neko-2-features/features-4-social/social-1-neko/neko-2-bll/bll-2-redux/nekoReducer";
import {booleanReducer} from "../../neko-2-features/features-3-common/common-1-boolean-reducer/booleanReducer";
import {tableReducer} from "../../neko-2-features/features-3-common/common-5-table/table-1-table/table-2-bll/bll-2-redux/tableReducer";
import {usersReducer} from "../../neko-2-features/features-4-social/social-2-users/users-2-bll/bll-2-redux/usersReducer";
import {chatsReducer} from "../../neko-2-features/features-4-social/social-3-private-chat/private-chat-2-bll/bll-2-redux/chatsReducer";

const reducers = combineReducers({
    signIn: signInReducer,
    register: registerReducer,
    forgot: forgotReducer,

    booleans: booleanReducer,

    neko: nekoReducer,
    users: usersReducer,
    chats: chatsReducer,

    tables: tableReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type IAppStore = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
