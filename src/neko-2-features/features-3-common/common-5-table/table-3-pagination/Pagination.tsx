import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {getProducts} from "../../../features-5-shop/shop-1-table-page/table-page-2-bll/getProductsThunks";

interface IPaginationProps {
    // loading: boolean;
    // error: string;
    //
    // name: string;
    //
    // logoutCallback: () => void;


}

const Pagination: React.FC<IPaginationProps> = (
    {
        // loading,
        // error,
        //
        // name,
        //
        // logoutCallback,

    }
) => {
    // const [selectedItems, selectItems] = useState(7);
    // const [selectedPage, selectPage] = useState(1);

    const {shop} = useSelector((store: IAppStore) => store.tables);
    const {page, pageCount, productTotalCount} = shop.settings;
    const dispatch = useDispatch();

    const getPage = (p: number, pc: number) => {
        dispatch(getProducts(p, pc))
    };

    const pages = [];
    console.log(page, pageCount, productTotalCount, '!!!!!!!!!!!!!!!!!!!!')

    for (let i = 0; i <= productTotalCount / pageCount; i++) pages.push((
        <button
            style={{background: page === i + 1 ? 'lime' : undefined}}
            onClick={() => getPage(i + 1, pageCount)}
        >
            {i + 1}
        </button>
    ));

    return (
        <div
            style={{
                margin: '0 10px',
                minHeight: '50px',
                display: 'flex',
                flexFlow: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
            }}
        >
            Pagination

            <select value={pageCount} onChange={e => getPage(page, Number(e.currentTarget.value))}>
                <option value={4}>4</option>
                <option value={7}>7</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
            {pages}
        </div>
    );
};

export default Pagination;
