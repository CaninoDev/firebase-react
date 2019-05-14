import React from 'react';

const SignInComponent = ({ onSubmit, error }) => {
    return (
        <form onSubmit={onSubmit}>
            <button type="submit">Sign In with Google</button>
        </form>
    )
}

export default SignInComponent;
