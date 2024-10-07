import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/button";
import InputField from "../../Components/FormFields/input_field";

function Login() {
  return (
    <div className="content-wrapper d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-5 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 ">
            <div className="brand-logo d-flex justify-content-center">
              <img src="./logo.ico" alt="logo" />
            </div>
            <h4 className="font-weight-dark">Sign in to continue.</h4>
            <form className="pt-3">
              <InputField
                type="email"
                value=""
                label="Email"
                name="email"
                placeholder="Write Your Email"
                col_size="12"
                className="form-control form-control-lg"
                onChange=""
                onBlur=""
                errors=""
                touched=""
              />
              <InputField
                type="password"
                value=""
                label="Password"
                name="password"
                placeholder="Write Your password"
                col_size="12"
                className="form-control form-control-lg"
                onChange=""
                onBlur=""
                errors=""
                touched=""
              />
              <div className="my-2 d-flex justify-content-between align-items-center">
                <Link to="/forgot-password" className="auth-link text-black">
                  Forgot password?
                </Link>
              </div>
              <div className="col-md-12 d-flex justify-content-end">
                <Button
                  name="Sign in"
                  type="submit"
                  color="primary"
                  width="100%"
                  disabled=""
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
