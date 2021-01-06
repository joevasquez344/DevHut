import React from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";

const Landing = () => {
    const history = useHistory();
  return (
    <div className="container-fluid register">
      <div className="row mb-5">
        <div className="col-md-12">
          <h1>DevReminders</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="register-container">
            <h4 className="text-center mb-4">Register</h4>
            <form className="form mb-2" action="">
              <div className="grouping mb-4">
                <label className="label">Username</label>
                <input className="input" type="text" />
              </div>
              <div className="grouping mb-4">
                <label className="label">Password</label>
                <input className="input" type="text" />
              </div>
              <button className="register-button">Register</button>
            </form>
            <small className="small">
              Already have an account?{" "}
              <span onClick={() => history.push('/')} className="ml-2 alt-button">Login</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
