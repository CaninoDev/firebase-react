import React from 'react';

const SignUpComponent = ({onSubmit, onChange, account}) => {
  const { username, email, password, passwordConfirm, error } = account;
  return (
     <form onSubmit={onSubmit}>
       <input
          name="username"
          value={username}
          onChange={onChange}
          type="text"
          placeholder="Full Name"
       />
       <input
          name="email"
          value={email}
          onChange={onChange}
          type="text"
          placeholder="e-Mail"
       />
       <input
          name="password"
          value={password}
          onChange={onChange}
          type="text"
          placeholder="Password"
       />
       <input
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={onChange}
          type="text"
          placeholder="Confirm Password..."
       />
       <button type="submit">Sign Up</button>

       {error && <p>{error.message}</p>}
     </form>
  );
}

export default SignUpComponent;
