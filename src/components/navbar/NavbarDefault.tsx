"use client";

import React from "react";
import Image from "next/image";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Input,
} from "./../../gateStart";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemPropsType {
  children: React.ReactNode;
  href: string;
}

function NavItem({ children, href }: NavItemPropsType) {
  return (
    <li>
      <Typography
        as="a"
        href={href}
        variant="paragraph"
        color="blue-gray"
        className="text-white flex items-center gap-2 font-medium hover:text-purple500"
      >
        {children}
      </Typography>
    </li>
  );
}

function NavbarDefault() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <>
      <Navbar
        shadow={false}
        fullWidth
        className="border-0 bg-transparent"
        blurred={false}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Image
            src={"/logo/farma-default-darkmode.svg"}
            alt={"farmaguru-apotek-logo"}
            width={"124"}
            height={"19"}
          />
          <ul className="ml-10 hidden items-center gap-10 lg:flex">
            <NavItem href="/">Home</NavItem>
            <NavItem>Kamus Obat</NavItem>
            <NavItem>Komunitas</NavItem>
            <NavItem href="/aplikasi">Aplikasi</NavItem>
          </ul>
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="text" className="text-purple500">
              Log in
            </Button>
            <Button className="bg-purple500">Register</Button>
          </div>
          <IconButton
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
            <ul className="flex flex-col gap-4">
              <NavItem href="/">Home</NavItem>
              <NavItem>Kamus Obat</NavItem>
              <NavItem>Komunitas</NavItem>
              <NavItem href="/aplikasi">Aplikasi</NavItem>
            </ul>
            <div className="mt-6 mb-4 flex items-center gap-4">
              <Button variant="text">Log in</Button>
              <Button color="gray">Register</Button>
            </div>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavbarDefault;
