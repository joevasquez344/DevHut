import React, {useState} from 'react';
import './Landing.css';
import {useHistory} from 'react-router-dom';

const Landing = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Username: ', username)
    console.log('Password: ', password)

    history.push('/')
  }

  return (
    <div className="container-fluid landing">
      <div className="row mb-5">
        <div className="col-md-12">
          <h1>DevReminders</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="login-container">
            <h4 className="text-center mb-4">Login</h4>
            <form onSubmit={handleSubmit} className="form mb-2" action="">
              <div className="grouping mb-4">
                <label className="label">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} className="input" type="text" />
              </div>
              <div className="grouping mb-4">
                <label className="label">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="input" type="text" />
              </div>
              <button onClick={handleSubmit} className="login-button">Login</button>
            </form>
            <small className="small">
              Don't have an account?{' '}
              <span
                onClick={() => history.push('/register')}
                className="ml-2 alt-button"
              >
                Register
              </span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
