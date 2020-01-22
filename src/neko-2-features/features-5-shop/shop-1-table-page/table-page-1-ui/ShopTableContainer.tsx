import React, {useEffect} from 'react';
// import TableContainer from "../../../features-3-common/common-5-table/table-1-ui/TableContainer";
import Table from "../../../features-3-common/common-5-table/table-1-table/table-1-ui/Table";
import {useDispatch, useSelector} from "react-redux";
import {IAppStore} from "../../../../neko-1-main/main-2-bll/store";
import {getProducts} from "../table-page-2-bll/getProductsThunks";
import {shopTableModel} from "./shopTableModel";
import {addProduct} from "../table-page-2-bll/addProductThunks";
import {updateProduct} from "../table-page-2-bll/updateProductThunks";
import {deleteProduct} from "../table-page-2-bll/deleteProductThunks";


const ShopTableContainer: React.FC = () => {
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
    const dispatch = useDispatch();

    const model = shopTableModel(
        (id: string) => dispatch(updateProduct(id)),
        (id: string) => dispatch(deleteProduct(id)),
        // () => dispatch(addProduct()),
    );

    useEffect(() => {
        dispatch(getProducts())
    }, []);

    // // redirect logic
    // if (redirect) {
    //     return <Redirect to={SIGN_IN_PATH}/>;
    // }
    // if (!show) return (
    //     <div
    //         style={{
    //             height: '80vh',
    //             display: 'flex',
    //             flexFlow: 'column',
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //             color: 'orange',
    //         }}
    //     >
    //         Loading...
    //     </div>
    // );

    return (
        <Table
            model={model}
            data={shop.items}
        />
    );
};

export default ShopTableContainer;
