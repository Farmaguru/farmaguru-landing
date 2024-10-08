"use client";

import { useState } from "react";
import { Input, Typography, Button } from "./../../gateStart";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import axios from "axios";

export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [repeatPasswordShown, setRepeatPasswordShown] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    repeatpassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputField = (e: any) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const toggleRepeatPasswordVisiblity = () =>
    setRepeatPasswordShown((cur) => !cur);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (inputValues.password !== inputValues.repeatpassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const data = {
      data: {
        email: inputValues.email,
        password: inputValues.password,
      },
    };

    try {
      const response = await axios.post(
        "https://lime.farmaguru.id/signup",
        data
      );

      if (response.status === 200) {
        console.log("Registration successful", response.data);
      }
    } catch (error) {
      console.error("Error during registration", error);
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <div className="overflow-hidden bg-white py-16 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="my-auto">
              <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-[24rem] text-left"
              >
                <Typography variant="h3" color="blue-gray" className="mb-2">
                  Register
                </Typography>
                <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
                  Isi data diri di bawah untuk dapat terdaftar di Farmaguru
                </Typography>

                <div className="mb-6">
                  <Input
                    id="email"
                    label="Your Email"
                    color="gray"
                    size="lg"
                    type="email"
                    onChange={handleInputField}
                    name="email"
                    className="w-full focus:border-gray-900 "
                  />
                </div>
                <div className="mb-6">
                  <Input
                    size="lg"
                    name="password"
                    id="password"
                    onChange={handleInputField}
                    // placeholder="********"
                    // labelProps={{
                    //   className: "hidden",
                    // }}
                    label="Password"
                    className="w-full focus:border-gray-900 "
                    type={passwordShown ? "text" : "password"}
                    icon={
                      <i onClick={togglePasswordVisiblity}>
                        {passwordShown ? (
                          <EyeIcon className="h-5 w-5" />
                        ) : (
                          <EyeSlashIcon className="h-5 w-5" />
                        )}
                      </i>
                    }
                  />
                </div>
                <div className="mb-6">
                  <Input
                    size="lg"
                    label="Repeat Password"
                    id="repeatpassword"
                    // labelProps={{
                    //   className: "text",
                    // }}
                    onChange={handleInputField}
                    name="repeatpassword"
                    className={`w-full focus:${
                      inputValues.password !== inputValues.repeatpassword
                        ? "border-t-red-500"
                        : "border-t-gray-900"
                    } focus:${
                      inputValues.password !== inputValues.repeatpassword
                        ? "border-red-500"
                        : "border-gray-900"
                    }`}
                    type={repeatPasswordShown ? "text" : "password"}
                    icon={
                      <i onClick={toggleRepeatPasswordVisiblity}>
                        {repeatPasswordShown ? (
                          <EyeIcon className="h-5 w-5" />
                        ) : (
                          <EyeSlashIcon className="h-5 w-5" />
                        )}
                      </i>
                    }
                  />
                </div>

                {/* <Typography
                  variant="small"
                  className={`font-semibold text-red-500 ${
                    inputValues.password == inputValues.repeatpassword
                      ? "hidden"
                      : ""
                  }`}
                >
                  Kedua password tidak sama!
                </Typography> */}

                {errorMessage && (
                  <Typography
                    variant="small"
                    className="font-semibold text-red-500"
                  >
                    {errorMessage}
                  </Typography>
                )}

                <Button
                  size="lg"
                  className="mt-16 bg-purple500"
                  fullWidth
                  type="submit"
                >
                  Register
                </Button>

                <Typography
                  variant="small"
                  color="gray"
                  className="!mt-4 text-center font-normal"
                >
                  Sudah punya akun?{" "}
                  <a href="login" className="font-bold text-purple500">
                    Login
                  </a>
                </Typography>
              </form>
            </div>
            <img className="sm:hidden md:block" src="/images/login.png"></img>
          </div>
        </div>
      </div>
    </>
  );
}
