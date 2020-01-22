import {tableInitialState} from "./tableInitialState";
import {ITableActions, TABLE_SET_MIN_MAX_PRICE, TABLE_SET_SEARCH_NAME, TABLE_SET_TABLE} from "./tableActions";

export const tableReducer = (state = tableInitialState, action: ITableActions) => {
    switch (action.type) {
        case TABLE_SET_TABLE: {
            return {
                ...state,
                [action.table]: {
                    items: action.items,
                    settings: action.settings,
                },
            }
        }
        // case TABLE_ADD_ITEM: {
        //     return {
        //         ...state,
        //         [action.table]: {items: [...state[action.table].items, action.item]},
        //     }
        // }
        // case TABLE_DELETE_ITEM: {
        //     return {
        //         ...state,
        //         [action.table]: action.item,
        //     }
        // }
        // case TABLE_UPDATE_ITEM: {
        //     return {
        //         ...state,
        //         [action.table]: action.item,
        //     }
        // }
        case TABLE_SET_MIN_MAX_PRICE:{
            return {
                ...state,
                [action.table]: {
                    ...state[action.table],
                    settings: {...state[action.table].settings, min: action.min, max: action.max}
                }
            }
        }
        case TABLE_SET_SEARCH_NAME: {
            return {
                ...state,
                [action.table]: {
                    ...state[action.table],
                    settings: {...state[action.table].settings, searchName: action.searchName}
                }
            }
        }

        default: {
            return state;
        }
    }
};
