export interface IShopTable {
    id: string;
    productName: string;
    price: number;
}

export interface IShopSettings {
    minPrice: number;
    maxPrice: number;
    min: number;
    max: number;

    searchName: string;

    productTotalCount: number;
    page: number;
    pageCount: number;
}

export interface ITableState {
    shop: {
        items: IShopTable[];
        settings: IShopSettings;
    }

}

export type ITables = 'shop';

export const tableInitialState: ITableState = {
    shop: {
        items: [
            // {
            //     id: '0,234535325',
            //     productName: 'Tesla Cybertruck',
            //     price: 40000,
            // },
            // {
            //     id: '0,234535326',
            //     productName: 'Tesla X',
            //     price: 35000,
            // },

        ],
        settings: {
            minPrice: 1000,
            maxPrice: 9000,
            min: 1000,
            max: 9000,

            searchName: '',

            productTotalCount: 7,
            page: 1,
            pageCount: 4,
        }
    }
};
