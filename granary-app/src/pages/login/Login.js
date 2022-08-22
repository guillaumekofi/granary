// app components import
import Alert from "../../components/Alert";

// react component import
import React, {useState} from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //get useLogin hook returns
  const {error, isPending, login} = useLogin();

  // execute login function call
  // and log user in if everything is clear
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent browser default behavior
    // call login function
    login(email, password);
  }

  return (
    // login form
    <div className="auth-form">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        {!isPending && <button className="btn">Login</button>}
        {isPending && <p className="text-info">Please wait, We are logging you in ...</p>}
      </form>

      <p className="text-middle">Or signup with</p>

      <button className="btn-social google">G | Google</button>
      <button className="btn-social facebook">F | Facebook</button>
    </div>
  );
};

export default Login;
