import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody } from "./../../gateStart";
import Link from "next/link";

export function FeatureSection() {
  const products = [
    {
      name: "POS Apotek",
      imageSrc: "farma-apotek",
      linkHref: "apotek",
      detail:
        "Learn from the best. Our instructors are industry experts, academics, and seasoned professionals dedicated to helping you.",
    },
    {
      name: "POS PBF",
      imageSrc: "farma-supply",
      linkHref: "pbf",
      detail:
        "Learn from the best. Our instructors are industry experts, academics, and seasoned professionals dedicated to helping you.",
    },
    {
      name: "Farmaguru Medical",
      imageSrc: "farma-medical",
      linkHref: "medical",
      detail:
        "Learn from the best. Our instructors are industry experts, academics, and seasoned professionals dedicated to helping you.",
    },
    {
      name: "Kamus Obat",
      imageSrc: "farma-edu",
      linkHref: "kamusobat",
      detail:
        "Learn from the best. Our instructors are industry experts, academics, and seasoned professionals dedicated to helping you.",
    },
  ];

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
        {products.map((product, index) => (
          <Card
            className="col-span-2 overflow-hidden"
            shadow={false}
            key={index}
          >
            <Link href={`aplikasi/${product.linkHref}`}>
              <CardBody className="">
                <Image
                  src={`/logo/${product.imageSrc}.svg`}
                  alt={"farmaguru-apotek-logo"}
                  width={"259"}
                  height={"56"}
                />
                <Typography
                  variant="h4"
                  className="mb-2 font-bold text-gray-800 mt-6"
                >
                  {product.name}
                </Typography>
                <Typography className="mb-0 text-base font-normal leading-7 !text-gray-500">
                  {product.detail}
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
        ))}
      </div>
    </section>
  );
}
export default FeatureSection;
