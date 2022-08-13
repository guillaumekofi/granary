// import styles
import './Signup.css'

import React, {useState} from 'react';
import useSignup from "../../hooks/useSignup";
import Alert from "../../components/Alert";

const Signup = () => {
  // create states to handle form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // get signup, error, and isPending
  const { error, setError, isPending, signup } = useSignup();

  // function to handle form submission
  // includes form error handling
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent browser default action
    /* handle form errors */
    if (!firstName) {
      // reject submitting an empty firstname input field
      setError("Firstname cannot be empty!");
      return
    }

    if (firstName.length > 20) {
      // reject submitting a firstname field with a text > 20 chars
      setError("Firstname is too long. Must be less than 21 characters!");
      return
    }

    if (!lastName) {
      // reject submitting an empty lastname input field
      setError("Lastname cannot be empty!");
      return
    }

    if (lastName.length > 20) {
      // reject submitting a lastname field with a text > 20 chars
      setError("Lastname is too long. Must be less than 21 characters!");
      return
    }

    signup(email, password, firstName, lastName)
  }

  return (
    // signup form
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        <span>Firstname:</span>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </label>
      <label>
        <span>Lastname:</span>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {/*display error*/}
      {error && <Alert type="error" message={error}/>}

      {/* show loading if isPending or show signup button*/}
      {!isPending && <button className="btn">Signup</button>}
      {isPending && <p className="text-info">Please wait ...</p>}
    </form>
  );
};

export default Signup;