"use client";

import Image from "next/image";
import NavbarDefault from "../navbar/NavbarDefault";
import { Carousel, Typography, Button } from "./../../gateStart";

function HeroDetailApplication() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 z-50">
        <NavbarDefault theme="light" />
      </div>

      <header className="bg-white p-8 lg:pt-20">
        <div className="grid mt-16 min-h-[82vh] w-full lg:h-[52rem] md:h-[34rem] place-items-stretch bg-[url('/assets/circles.svg')] bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto px-4 text-center">
            <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
              Aplikasi Farmaguru, Sistem One-Stop Farmasi
            </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              Memperkenalkan{" "}
              <span className="text-green-500 leading-snug ">POS Apotek</span>{" "}
              apikasi untuk usaha{" "}
              <span className="leading-snug text-green-500">Farmasi</span> Anda.
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base mb-8"
            >
              The time is now for it to be okay to be great. For being a bright
              color. For standing out.
            </Typography>
            <div className="flex justify-center gap-4 mb-8">
              <Button size="lg" className="bg-purple500 text-white">
                Selengkapnya
              </Button>
              <Button
                variant="text"
                size="lg"
                className="text-purple500 border border-gray-200 rounded-md"
              >
                Coba Gratis
              </Button>
            </div>
            <Image
              className="inline"
              src={"/images/carousel/apotek.png"}
              height={2000}
              width={1000}
              alt="posapotek"
            ></Image>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroDetailApplication;
