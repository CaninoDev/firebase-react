import React from 'react';

const PasswordForgetComponent = ({onSubmit, onChange, account, isInvalid}) => {
  const { email, error } = account;

  return (
     <form onSubmit={onSubmit}>
       <input
          name="email"
          value={email}
          onChange={onChange}
          type="text"
          placeholder="e-Mail"
       />
       <button disabled={isInvalid} type="submit">Reset My Password</button>

       {error && <p>{error.message}</p>}
     </form>
  )
};

export default PasswordForgetComponent;

