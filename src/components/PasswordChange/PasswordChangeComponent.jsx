import React from 'react';

const PasswordChangeComponent = ({onSubmit, onChange, account, isInvalid}) => {
  const { password, passwordConfirm, error } = account;

  return (
     <form onSubmit={onSubmit}>
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
       <button disabled={isInvalid} type="submit">Reset My Password</button>

       {error && <p>{error.message}</p>}
     </form>
  )
};

export default PasswordChangeComponent;

