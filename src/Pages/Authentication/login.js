import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import Button from "../../Components/Button/button";
import InputField from "../../Components/FormFields/input_field";
import { useLoginMutation } from "../../features/Auth_Api_Slice";
import { setUserToken } from "../../features/Auth_Slice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { isLoading }] = useLoginMutation();
  const dispatech = useDispatch();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!email.trim().length || !password.trim().length) {
      toast.error("Please provide user credientials");
      return;
    }
    try {
      const res = await loginUser({ email, password });
      if (res.error) {
        throw new Error(res.error?.data?.msg);
      }
      dispatech(setUserToken(res.data.token));
      // console.log(res.data.token);
      setEmail("");
      setPassword("");
    } catch (err) {
      toast.error(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="content-wrapper d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-5 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 ">
            <div className="brand-logo d-flex justify-content-center">
              <img src="./logo.ico" alt="logo" />
            </div>
            <h4 className="font-weight-dark">Sign in to continue.</h4>
            <form className="pt-3" onSubmit={onSubmitHandler}>
              <InputField
                type="email"
                value={email}
                label="Email"
                name="email"
                placeholder="Write Your Email"
                col_size="12"
                className="form-control form-control-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                type="password"
                value={password}
                label="Password"
                name="password"
                placeholder="Write Your password"
                col_size="12"
                className="form-control form-control-lg"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="my-2 d-flex justify-content-between align-items-center">
                <Link to="/forgot-password" className="auth-link text-black">
                  Forgot password?
                </Link>
              </div>
              <div className="col-md-12 d-flex justify-content-end">
                <Button
                  name={isLoading ? "Please wait" : "Sign in"}
                  type="submit"
                  color="primary"
                  width="100%"
                  disabled={isLoading}
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
