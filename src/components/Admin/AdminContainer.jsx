import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import AdminComponent from './AdminComponent';


class AdminContainer extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            users: [],
        }
    }

    componentDidMount() {
        const { firebase } = this.props;

        this.setState({ loading: true });

        firebase
            .users()
            .on('value', (snapshot) => {
                const userObject = snapshot.val();

                const usersRoster = Object.keys(userObject).map((key) => ({
                    ...userObject[key],
                    uid: key,
                }));

                this.setState({
                    users: usersRoster,
                    loading: false,
                });
            });
    }

    render() {
        const { users, loading } = this.state;

        return (
            <React.Fragment>
                {loading && <h1>Loading...</h1>}
                <AdminComponent users={users} />
            </React.Fragment>
        )
    }
}

const Admin = withFirebase(AdminContainer);

export default Admin;