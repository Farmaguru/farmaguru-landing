"use client";

import { useState } from "react";
import { Input, Typography, Button } from "./../../gateStart";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  return (
    <>
      <div className="overflow-hidden bg-white py-16 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="my-auto">
              <form action="#" className="mx-auto max-w-[24rem] text-left">
                <Typography variant="h3" color="blue-gray" className="mb-2">
                  Login
                </Typography>
                <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
                  Isi data di bawah untuk melanjutkan!
                </Typography>
                <div className="mb-6">
                  <Input
                    id="email"
                    color="gray"
                    size="lg"
                    type="email"
                    name="email"
                    label="Email"
                    // placeholder="name@mail.com"
                    className="w-full focus:border-t-primary border-t-blue-gray-200"
                    // labelProps={{
                    //   className: "hidden",
                    // }}
                  />
                </div>
                <div className="mb-6">
                  <Input
                    size="lg"
                    label="Password"
                    // placeholder="********"
                    // labelProps={{
                    //   className: "hidden",
                    // }}
                    className="w-full placeholder:opacity-100 focus:border-gray-900 border-t-blue-gray-200"
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
                <Button size="lg" className="mt-6 bg-purple500" fullWidth>
                  Log In
                </Button>
                <div className="!mt-4 flex justify-end">
                  <Typography
                    as="a"
                    href="#"
                    color="blue-gray"
                    variant="small"
                    className="font-medium"
                  >
                    Forgot password
                  </Typography>
                </div>
                <Button
                  variant="outlined"
                  size="lg"
                  className="mt-6 flex h-12 items-center justify-center gap-2"
                  fullWidth
                >
                  <img
                    src={`https://www.material-tailwind.com/logos/logo-google.png`}
                    alt="google"
                    className="h-6 w-6"
                  />{" "}
                  sign in with google
                </Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="!mt-4 text-center font-normal"
                >
                  Belum punya akun?{" "}
                  <a href="#" className="font-bold text-purple500">
                    Register
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
