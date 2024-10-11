import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/button";
import InputField from "../../Components/FormFields/input_field";
import { useResetPasswordMutation } from "../../features/Auth_Api_Slice";
import { toast } from "react-toastify";

function ResetPassword() {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email.trim().length || !password || !otp.trim().length) {
      toast.error("Please provide valid data.");
      return;
    }
    try {
      const response = await resetPassword({ email, otp, password }).unwrap();
      toast.success(response?.message || "Password reset successfully.");
      navigate("/login");
    } catch (err) {
      toast.error(err?.data?.msg || "Something went wrong.");
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
            <h4 className="font-weight-dark">Enter Email For OTP</h4>
            <form className="pt-3" onSubmit={submitHandler}>
              <InputField
                type="text"
                value={otp}
                label="OTP"
                name="otp"
                placeholder="Otp from email"
                col_size="12"
                className="form-control form-control-lg"
                onChange={(e) => setOtp(e.target.value)}
              />
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
                label="New Password"
                name="passwrod"
                placeholder="Write your new password"
                col_size="12"
                className="form-control form-control-lg"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="col-md-12 d-flex justify-content-end">
                <Button
                  name={isLoading ? "Please wait.." : "Reset Password"}
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

export default ResetPassword;
