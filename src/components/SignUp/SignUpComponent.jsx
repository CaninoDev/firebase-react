import React from 'react';

const SignUpComponent = ({onSubmit, onChange, onChangeCheckbox, account, isInvalid, isPatient, isPhysician, isAdmin}) => {
  const { username, email, password, passwordConfirm, error } = account;
  return (
     <form onSubmit={onSubmit}>
       <input
          name="isPatient"
          type="checkbox"
          checked={isPatient}
          onChange={onChangeCheckbox}
       />
       <input
          name="isPhysician"
          type="checkbox"
          checked={isPhysician}
          onChange={onChangeCheckbox}
       />
       <input
          name="isAdmin"
          type="checkbox"
          checked={isAdmin}
          onChange={onChangeCheckbox}
       />
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
       <button disabled={isInvalid} type="submit">Sign Up</button>

       {error && <p>{error.message}</p>}
     </form>
  );
};

export default SignUpComponent;
