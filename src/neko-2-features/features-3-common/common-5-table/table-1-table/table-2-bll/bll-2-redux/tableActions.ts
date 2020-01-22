import {ITables, IShopTable, IShopSettings} from "./tableInitialState";

export const TABLE_LOADING = 'TABLE/LOADING';
export const TABLE_ERROR = 'TABLE/ERROR';
export const TABLE_SUCCESS = 'TABLE/SUCCESS';

export const TABLE_ACTION_NAMES = [TABLE_LOADING, TABLE_ERROR, TABLE_SUCCESS];

export const TABLE_SET_TABLE = 'TABLE/SET_TABLE';
export const TABLE_ADD_ITEM = 'TABLE/ADD_ITEM';
export const TABLE_DELETE_ITEM = 'TABLE/DELETE_ITEM';
export const TABLE_UPDATE_ITEM = 'TABLE/UPDATE_ITEM';

export const TABLE_SET_MIN_MAX_PRICE = 'TABLE/SET_MIN_MAX_PRICE';
export const TABLE_SET_SEARCH_NAME = 'TABLE/SET_SEARCH_NAME';

interface ISetTable {
    type: typeof TABLE_SET_TABLE;
    table: ITables;
    items: IShopTable[];
    settings: IShopSettings;
}
// interface IAddItem {
//     type: typeof TABLE_ADD_ITEM;
//     table: ITables;
//     item: any;
// }
// interface IDeleteItem {
//     type: typeof TABLE_DELETE_ITEM;
//     table: ITables;
//     item: any;
// }
// interface IUpdateItem {
//     type: typeof TABLE_UPDATE_ITEM;
//     table: ITables;
//     item: any;
// }
interface ISetMinMax {
    type: typeof TABLE_SET_MIN_MAX_PRICE;
    table: ITables;
    min: number;
    max: number;
}
interface ISetSearchName {
    type: typeof TABLE_SET_SEARCH_NAME;
    table: ITables;
    searchName: string;
}

export type ITableActions = ISetTable | ISetMinMax | ISetSearchName; // | IAddItem | IDeleteItem | IUpdateItem;

export const setTable = (table: ITables, items: IShopTable[], settings: IShopSettings): ISetTable => ({
    type: TABLE_SET_TABLE,
    table,
    items,
    settings,
});
export const setMinMax = (table: ITables, min: number, max: number): ISetMinMax => ({
    type: TABLE_SET_MIN_MAX_PRICE,
    table,
    min,
    max,
});
export const setSearchName = (table: ITables, searchName: string): ISetSearchName => ({
    type: TABLE_SET_SEARCH_NAME,
    table,
    searchName,
});
