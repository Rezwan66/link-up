import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = () => {
    const data = { username, password };
    axios.post('http://localhost:3001/auth/login', data).then(res => {
      console.log(res.data);
    });
  };
  return (
    <>
      <h2>Login Now Here</h2>
      <div className="loginContainer">
        <label>Username:</label>
        <input
          type="text"
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>Login</button>
        <Link to="/register">Register</Link>
      </div>
    </>
  );
};
export default Login;
