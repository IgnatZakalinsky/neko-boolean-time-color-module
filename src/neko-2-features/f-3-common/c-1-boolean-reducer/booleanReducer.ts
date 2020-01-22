import {booleanInitialState} from "./booleanInitialState";
import {BOOLEAN_SET_VALUE, IBooleanActions} from "./booleanActions";

export const booleanReducer = (state = booleanInitialState, action: IBooleanActions) => {
    switch (action.type) {
        case BOOLEAN_SET_VALUE: {
            const newBooleans = state.booleans.map(stateB => {
                const findB = action.booleans.find(actionB => actionB.name === stateB.name);
                return findB ? findB : stateB;
            });
            for (const actionB of action.booleans) {
                if (!newBooleans.find(stateB => stateB.name === actionB.name)) {
                    newBooleans.push(actionB);
                }
            }

            return {
                ...state,
                booleans: newBooleans,
            }
        }

        default: {
            return state;
        }
    }
};
