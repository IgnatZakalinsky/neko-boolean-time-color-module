import React, {useState} from 'react';

interface ISortButtonProps {
    // loading: boolean;
    // error: string;
    //
    // name: string;
    //
    // logoutCallback: () => void;


}

const SortButton: React.FC<ISortButtonProps> = (
    {
        // loading,
        // error,
        //
        // name,
        //
        // logoutCallback,

    }
) => {
    const [sort, setSort] = useState(0);

    return (
        <div
            style={{
                // margin: '0 10px',
                // minHeight: '50px',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <button style={{background: sort === 1 ? 'lime' : undefined}} onClick={() => setSort(1)}>/\</button>
            <button style={{background: sort === 2 ? 'lime' : undefined}} onClick={() => setSort(2)}>\/</button>
        </div>
    );
};

export default SortButton;
