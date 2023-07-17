import React from 'react';

import User from "../User/User";
import {useSelector} from "react-redux";

function UsersList(props) {
    const users = useSelector(state => state.users);

    return (
        <div className="container">
                    <ul className="content-list">
                        {[...users].map(user =>
                            <User key={user.id}
                                  firstName={user.firstName}
                                  lastName={user.lastName}
                                  age={user.age}
                                  email={user.email}
                                  id={user.id}
                                  handleOpenForm={props.handleOpenForm}/>
                        )}
                    </ul>
        </div>
    );
}

export default UsersList;
