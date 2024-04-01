import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody } from "./../../gateStart";
import Link from "next/link";

export function FeatureSection() {
  return (
    <section className="lg:py-28 py-10 px-8">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <Typography color="blue-gray" className="mb-2 font-bold">
          Layanan Farmaguru
        </Typography>
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-black lg:!text-4xl"
        >
          Aplikasi Farmaguru
        </Typography>
        <Typography variant="lead" className="mx-auto max-w-2xl !text-gray-500">
          Kami menyediakan berbagai macam aplikasi yang dapat Anda pilih dan
          sesuaikan dengan kebutuhan usaha farmasi Anda!
        </Typography>
      </div>
      <div className="mb-8 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-4">
        <Card className="col-span-2 overflow-hidden" shadow={false}>
          <Link href={"aplikasi/apotek"}>
            <CardBody className="">
              <Image
                src={"/logo/farma-apotek.svg"}
                alt={"farmaguru-apotek-logo"}
                width={"259"}
                height={"56"}
              />
              <Typography
                variant="h4"
                className="mb-2 font-bold text-gray-800 mt-6"
              >
                POS Apotek
              </Typography>
              <Typography className="mb-0 max-w-md text-base font-normal leading-7 !text-gray-500">
                Learn from the best. Our instructors are industry experts,
                academics, and seasoned professionals dedicated to helping you.
              </Typography>
              <div className="flex flex-row gap-4 align-middle mt-4 hover:gap-8 transition-gap">
                <Typography variant="h6" className="font-bold text-gray-700">
                  Selengkapnya
                </Typography>
                <Image
                  src={"icons/arrow-circle-right.svg"}
                  alt={"arrow-icon"}
                  width={"20"}
                  height={"20"}
                ></Image>
              </div>
            </CardBody>
          </Link>
        </Card>
        <Card className="col-span-2 overflow-hidden" shadow={false}>
          <CardBody className="">
            <Image
              src={"/logo/farma-supply.svg"}
              alt={"farmaguru-apotek-logo"}
              width={"259"}
              height={"56"}
            />
            <Typography
              variant="h4"
              className="mb-2 font-bold text-gray-800 mt-6"
            >
              POS PBF
            </Typography>
            <Typography className="mb-0 max-w-md text-base font-normal leading-7 !text-gray-500">
              Learn from the best. Our instructors are industry experts,
              academics, and seasoned professionals dedicated to helping you.
            </Typography>
            <div className="flex flex-row gap-4 align-middle mt-4 hover:gap-8 transition-gap">
              <Typography variant="h6" className="font-bold text-gray-700">
                Selengkapnya
              </Typography>
              <Image
                src={"icons/arrow-circle-right.svg"}
                alt={"arrow-icon"}
                width={"20"}
                height={"20"}
              ></Image>
            </div>
          </CardBody>
        </Card>
        <Card className="col-span-2 overflow-hidden" shadow={false}>
          <CardBody className="">
            <Image
              src={"/logo/farma-medical.svg"}
              alt={"farmaguru-apotek-logo"}
              width={"259"}
              height={"56"}
            />
            <Typography
              variant="h4"
              className="mb-2 font-bold text-gray-800 mt-6"
            >
              Farmaguru Medical
            </Typography>
            <Typography className="mb-0 max-w-md text-base font-normal leading-7 !text-gray-500">
              Learn from the best. Our instructors are industry experts,
              academics, and seasoned professionals dedicated to helping you.
            </Typography>
            <div className="flex flex-row gap-4 align-middle mt-4 hover:gap-8 transition-gap">
              <Typography variant="h6" className="font-bold text-gray-700">
                Selengkapnya
              </Typography>
              <Image
                src={"icons/arrow-circle-right.svg"}
                alt={"arrow-icon"}
                width={"20"}
                height={"20"}
              ></Image>
            </div>
          </CardBody>
        </Card>
        <Card className="col-span-2 overflow-hidden" shadow={false}>
          <CardBody className="">
            <Image
              src={"/logo/farma-edu.svg"}
              alt={"farmaguru-apotek-logo"}
              width={"259"}
              height={"56"}
            />
            <Typography
              variant="h4"
              className="mb-2 font-bold text-gray-800 mt-6"
            >
              Kamus Obat
            </Typography>
            <Typography className="mb-0 max-w-md text-base font-normal leading-7 !text-gray-500">
              Learn from the best. Our instructors are industry experts,
              academics, and seasoned professionals dedicated to helping you.
            </Typography>
            <div className="flex flex-row gap-4 align-middle mt-4 hover:gap-8 transition-gap">
              <Typography variant="h6" className="font-bold text-gray-700">
                Selengkapnya
              </Typography>
              <Image
                src={"icons/arrow-circle-right.svg"}
                alt={"arrow-icon"}
                width={"20"}
                height={"20"}
              ></Image>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
export default FeatureSection;
