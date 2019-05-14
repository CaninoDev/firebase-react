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

        this.unsubscribe = firebase
            .users()
            .onSnapshot((snapshot) => {
                let users = [];

                snapshot.forEach(doc =>
                    users.push({ ...doc.data(), uid: doc.id })
                );

                this.setState({
                    users,
                    loading: false
                });
            });
    }

    componentWillUnmount() {
        this.unsubscribe();
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