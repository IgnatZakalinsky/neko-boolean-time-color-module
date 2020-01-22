import React from 'react';
import Table, {ITableModel} from "./Table";
import {useSelector} from "react-redux";
import {IAppStore} from "../../../../../neko-1-main/main-2-bll/store";

const testModel: ITableModel[] = [
    {
        title: (i: number) => (<div key={i} style={{width: '70%'}}>product</div>),
        render: (d: any, i: number) => (<div key={i} style={{width: '70%'}}>{d.productName}</div>)
    },
    {
        title: (i: number) => (<div key={i} style={{width: '30%'}}>price</div>),
        render: (d: any, i: number) => (<div key={i} style={{width: '30%'}}>{d.price}</div>)
    },

];

const TableContainer: React.FC = () => {
    // const {
    //     loading, error, success, dispatch,
    //     name,
    //
    //     show,
    //     setShow,
    //
    //     redirect,
    //     setRedirect,
    //
    //     logout,
    // } = useNekoContainerLogic();

    const {shop} = useSelector((store: IAppStore) => store.tables);

    return (
        <Table
            data={shop.items}
            model={testModel}
        />
    );
};

export default TableContainer;
