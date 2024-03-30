"use client";

import NavbarDefault from "../navbar/NavbarDefault";
import { Carousel, Typography, Button } from "./../../gateStart";

function HeroHomepage() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 z-50">
        <NavbarDefault />
      </div>
      <Carousel
        className="h-screen bg-cover bg-center relative"
        loop={true}
        autoplay={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="relative h-full w-full">
          <img
            src="images/carousel/1.jpg"
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
                  Kamus Obat Farmaguru, <br />
                  One-Stop Resource{" "}
                </span>
                untuk Obat
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Sumber terpercaya dan lengkap untuk info obat-obat yang beredar.
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  Selengkapnya
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="images/carousel/2.jpg"
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
                Mari Bergabung dengan Kami,{" "}
                <span className="font-bold">
                  {" "}
                  Komunitas <br />
                  Farmaguru!{" "}
                </span>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Sumber terpercaya dan lengkap untuk info obat-obat yang beredar.
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  Selengkapnya
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
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
                Sebuah Sistem{" "}
                <span className="font-bold">One-Stop Farmasi </span>
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
      </Carousel>
    </>
  );
}

export default HeroHomepage;
