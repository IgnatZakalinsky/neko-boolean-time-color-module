import React from 'react';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import './App.css';
import store from "./neko-1-main/m-2-bll/store";
import Main from "./neko-1-main/m-1-ui/Main";

// add context
const App: React.FC = () => {
    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </HashRouter>
        </div>
    );
};

export default App;
