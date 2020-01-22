import React from 'react';
import ModalContainer from "./ModalContainer";
import ModalQuestionContainer from "./question/ModalQuestionContainer";
import ModalInputContainer from "./input/ModalInputContainer";
import ModalMessageContainer from "./message/ModalMessageContainer";
import ModalMessageStackContainer from "./message/ModalMessageStackContainer";
import ModalUp from "./up/ModalUp";
import {FlexColumnCenterCenter} from "../../../../neko-3-styles/flex-containers";

const ModalsPage: React.FC = () => {

    console.log('render ModalPage');
    return (
        <div style={{...FlexColumnCenterCenter}}>
            <div style={{height: '40vh'}}/>

            <ModalContainer/>
            <ModalQuestionContainer/>
            <ModalInputContainer/>
            <ModalMessageContainer/>
            <ModalMessageStackContainer/>
            <ModalUp/>

            <div style={{height: '300vh'}}/>
        </div>
    );
};

export default ModalsPage;
