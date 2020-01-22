import React from 'react';
import {IUser} from "../users-3-dal/UsersAPI";
import Table, {ITableModel} from "../../../features-3-common/common-5-table/table-1-table/table-1-ui/Table";

interface IUsersProps {
    loading: boolean;
    error: string;

    users: IUser[];
    startPrivateChatCallback: (userId: string) => () => void;
}

const Users: React.FC<IUsersProps> = (
    {
        loading, error,

        users,
        startPrivateChatCallback
    }
) => {
    // const usersMap = users.map(u => <div key={u._id}>{u.email}</div>);
    const usersModel: ITableModel[] = [
        {
            title: (i: number) => (<div key={i} style={{width: '70%'}}>users</div>),
            render: (d: IUser, i: number) => (<div key={i} style={{width: '70%'}}>{d.email}</div>)
        },
        {
            title: (i: number) => (<div key={i} style={{width: '30%'}}>actions</div>),
            render: (d: IUser, i: number) => (
                <div key={i} style={{width: '30%'}}>
                    <button onClick={startPrivateChatCallback(d._id)}>send private message</button>
                </div>
            )
        },

    ];

    console.log('render Users');
    return (
        <>
            users

            {loading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : <div><br/></div>
            }

            {/*{usersMap}*/}
            <Table
                data={users}
                model={usersModel}
            />
        </>
    );
};

export default Users;
