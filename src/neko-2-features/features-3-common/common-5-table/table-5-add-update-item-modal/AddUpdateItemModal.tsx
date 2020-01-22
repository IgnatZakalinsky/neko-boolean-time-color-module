import React, {useState} from 'react';
import ModalInput from '../../common-2-modals/modals-1-ui/input/ModalInput';
import {useDispatch} from "react-redux";
import {addProduct} from "../../../features-5-shop/shop-1-table-page/table-page-2-bll/addProductThunks";

interface IAddUpdateItemModalProps {
    // loading: boolean;
    // error: string;
    //
    // name: string;
    //
    // logoutCallback: () => void;


}

const AddUpdateItemModal: React.FC<IAddUpdateItemModalProps> = (
    {
        // loading,
        // error,
        //
        // name,
        //
        // logoutCallback,

    }
) => {
    const [show, setShow] = useState(false);
    const [value1, setValue1] = useState('test product name');
    const [value2, setValue2] = useState('0');
    const dispatch = useDispatch();
    const setValue2end = (newValue2: string) => {
        setValue2(newValue2);
        dispatch(addProduct(value1, Number(newValue2)));
    };

    return (
        <>
            <button onClick={() => setShow(true)}>add</button>
            <ModalInput
                show={show}
                close={() => setShow(false)}

                inputData={[[value1, setValue1], [value2, setValue2end]]}

                enableBackground={true}
                backgroundOnClick={() => setShow(false)}

                width={300}
                height={200}
            >
                add new product:
            </ModalInput>
        </>
    );
};

export default AddUpdateItemModal;
