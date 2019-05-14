import React from 'react';

const SignInComponent = ({onSubmit, onChange, account, isInvalid}) => {
  const { email, password } = account;

  return (
     <form onSubmit={onSubmit}>
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
       <button disabled={isInvalid} type="submit">Sign In</button>
     </form>
  )
};

export default SignInComponent;

