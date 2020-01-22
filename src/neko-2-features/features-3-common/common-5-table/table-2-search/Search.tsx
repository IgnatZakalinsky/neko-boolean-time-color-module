import React, {useState} from 'react';
import PriceRange from "./PriceRange";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../../features-5-shop/shop-1-table-page/table-page-2-bll/getProductsThunks";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {setSearchName} from "../table-1-table/table-2-bll/bll-2-redux/tableActions";

export interface ISearchModel {

}

interface ISearchProps {
    // loading: boolean;
    // error: string;
    //
    // name: string;
    //
    // logoutCallback: () => void;


}

const Search: React.FC<ISearchProps> = (
    {
        // loading,
        // error,
        //
        // name,
        //
        // logoutCallback,

    }
) => {
    const {shop} = useSelector((store: IAppStore) => store.tables);
    const {searchName} = shop.settings;
    const dispatch = useDispatch();

    const search = () => dispatch(getProducts());
    const setName = (n: string) => dispatch(setSearchName('shop', n));

    return (
        <div
            style={{
                margin: '0 10px',
                minHeight: '100px',
                display: 'flex',
                flexFlow: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            Search
            <input value={searchName} onChange={e => setName(e.currentTarget.value)} placeholder={'product name'}/>
            {/*<input type={'range'} min={3000} max={9000} list={'il'} step={1000} multiple={true}/>*/}
            {/*<datalist id={'il'}>*/}
                {/*<option value={'0'} label={'3000'}/>*/}
                {/*<option value={'50'} label={'6000'}/>*/}
                {/*<option value={'100'} label={'9000'}/>*/}
            {/*</datalist>*/}
            <PriceRange/>
            <button onClick={search}>Search</button>
        </div>
    );
};

export default Search;
