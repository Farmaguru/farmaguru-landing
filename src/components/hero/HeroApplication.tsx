"use client";

import NavbarDefault from "../navbar/NavbarDefault";
import { Carousel, Typography, Button } from "./../../gateStart";

function HeroApplication() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 z-50">
        <NavbarDefault />
      </div>

      <div className="relative h-screen bg-cover bg-center">
        <img
          src="images/carousel/3.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-3/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl font-normal"
              style={{ lineHeight: "130%" }}
            >
              Memperkenalkan{" "}
              <span className="font-bold">
                {" "}
                Aplikasi Farmaguru, <br />
              </span>
              Sebuah Sistem <span className="font-bold">One-Stop Farmasi </span>
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Permudah usaha kefarmasian anda dengan aplikasi kami yang andal!
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Selengkapnya
              </Button>
              <Button variant="text" size="lg" color="white">
                Coba Gratis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroApplication;
