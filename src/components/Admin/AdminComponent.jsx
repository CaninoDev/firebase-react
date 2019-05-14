import React from 'react';

const AdminComponent = ({ users }) => {
    return (
        <ul>
        {users.map((user) => (
            <li key={user.uid}>
                <span>
                    ID: {user.uid}
                </span>
                <span>
                    email: {user.email}
                </span>
                <span>
                    username: {user.username}
                </span>
            </li>
        ))}
        </ul>
    );
};

export default AdminComponent;