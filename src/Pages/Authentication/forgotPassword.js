import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/button";
import InputField from "../../Components/FormFields/input_field";
import { useForgotPasswordMutation } from "../../features/Auth_Api_Slice";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [getOtp, { isLoading }] = useForgotPasswordMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email.trim().length) {
      toast.error("Please provide email address.");
      return;
    }
    try {
      const response = await getOtp({ email }).unwrap();
      toast.success(response?.message || "Admin deleted successfully.");
      navigate("/reset-password");
      console.log(response);
    } catch (err) {
      console.log(err);

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
                type="email"
                value={email}
                label="Email"
                name="email"
                placeholder="Write Your Email"
                col_size="12"
                className="form-control form-control-lg"
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="col-md-12 d-flex justify-content-end">
                <Button
                  name={isLoading ? "Please wait..." : "Get OTP"}
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

export default ForgotPassword;
