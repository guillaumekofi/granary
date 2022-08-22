// import styles
import './Signup.css'

import React, {useState} from 'react';
import useSignup from "../../hooks/useSignup";
import Alert from "../../components/Alert";
import useGoogleSignup from "../../hooks/useGoogleSignup";

const Signup = () => {
  // create states to handle form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [profileImg, setProfileImg] = useState(null);
  const [profileImgError, setProfileImgError] = useState(null);

  // get signup, error, and isPending
  const { error, setError, isPending, signup } = useSignup();
  // const { googleSignup } = useGoogleSignup();

  // handle image field
  // image is not required
  // onChange validate the image chosen by the user
  const handleFileChange = (event) => {
    setProfileImg(null)
    let selected = event.target.files[0]

    if (!selected) {
      setProfileImgError("Please select a profile picture!")
      return
    }
    if (!selected.type.includes("image")) {
      setProfileImgError("Please select an image file!")
      return
    }
    if (selected.size > 300000) {
      setProfileImgError("Image file size must be less than 300 Kb")
      return
    }

    setProfileImgError(null)
    setProfileImg(selected);
  }

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

    if (!username) {
      // reject submitting an empty username input field
      setError("Username cannot be empty!");
      return
    }

    if (username.length > 20) {
      // reject submitting a username field with a text > 20 chars
      setError("Username is too long. Must be less than 21 characters!");
      return
    }

    // signup if there is no error
    signup(email, password, firstName, lastName, username, profileImg);
  }

  return (
    // signup form
    <div className="auth-form">
      <form onSubmit={handleSubmit}>
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
          <span>Username:</span>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>
        <label>
          <span>Profile image:</span>
          <input
            type="file"
            onChange={handleFileChange}
          />
          {profileImgError && <div className="text-error">{profileImgError}</div>}
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

      <p className="text-middle">Or signup with</p>

      <button className="btn-social google">G | Google</button>
      <button className="btn-social facebook">F | Facebook</button>
    </div>
  );
};

export default Signup;