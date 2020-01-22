import {useState} from "react";
import {Dispatch} from "redux";

export const useNekoLocalState = (dispatch: Dispatch) => {
    const [show, setShow] = useState(false);

    const [redirect, setRedirect] = useState(false);

    return {
        show, setShow,

        redirect, setRedirect,
    }
};
