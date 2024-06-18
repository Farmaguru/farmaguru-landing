"use client";

import { useState } from "react";
import { Input, Typography, Button } from "./../../gateStart";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [repeatPasswordShown, setRepeatPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const toggleRepeatPasswordVisiblity = () =>
    setRepeatPasswordShown((cur) => !cur);
  return (
    <>
      <div className="overflow-hidden bg-white py-16 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="my-auto">
              <form action="#" className="mx-auto max-w-[24rem] text-left">
                <Typography variant="h3" color="blue-gray" className="mb-2">
                  Register
                </Typography>
                <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
                  Isi data diri di bawah untuk dapat terdaftar di Farmaguru
                </Typography>
                <div className="mb-6">
                  <label htmlFor="email">
                    <Typography
                      variant="small"
                      className="mb-2 block font-medium text-gray-900"
                    >
                      Username
                    </Typography>
                  </label>
                  <Input
                    id="username"
                    color="gray"
                    size="lg"
                    type="text"
                    name="username"
                    placeholder="masukkan username"
                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email">
                    <Typography
                      variant="small"
                      className="mb-2 block font-medium text-gray-900"
                    >
                      Your Email
                    </Typography>
                  </label>
                  <Input
                    id="email"
                    color="gray"
                    size="lg"
                    type="email"
                    name="email"
                    placeholder="name@mail.com"
                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="password">
                    <Typography
                      variant="small"
                      className="mb-2 block font-medium text-gray-900"
                    >
                      Password
                    </Typography>
                  </label>
                  <Input
                    size="lg"
                    name="password"
                    id="password"
                    placeholder="********"
                    labelProps={{
                      className: "hidden",
                    }}
                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
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
                  <label htmlFor="repeatpassword">
                    <Typography
                      variant="small"
                      className="mb-2 block font-medium text-gray-900"
                    >
                      Ulangi Password
                    </Typography>
                  </label>
                  <Input
                    size="lg"
                    id="repeatpassword"
                    name="repeatpassword"
                    placeholder="********"
                    labelProps={{
                      className: "hidden",
                    }}
                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
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
                <Button color="gray" size="lg" className="mt-16" fullWidth>
                  Log In
                </Button>

                <Typography
                  variant="small"
                  color="gray"
                  className="!mt-4 text-center font-normal"
                >
                  Sudah punya akun?{" "}
                  <a href="login" className="font-medium text-gray-900">
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
