import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody } from "./../../gateStart";

export function TestimonialSection() {
  return (
    <section className="lg:py-28 py-10 px-8">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-black lg:!text-4xl"
        >
          Testimonial
        </Typography>
        <Typography variant="lead" className="mx-auto max-w-2xl !text-gray-500">
          Apa yang mereka katakan tentang aplikasi Farmaguru?
        </Typography>
      </div>
      <div className="mb-8 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-6">
        <Card className="col-span-2 p-4 overflow-hidden" shadow={true}>
          <CardBody className="text-center">
            <Image
              src={"/images/testimonial/testi1.jpg"}
              alt={"testimonials-1"}
              width={"150"}
              height={"150"}
              className="inline rounded-full"
            />
            <Typography
              variant="h5"
              className="font-bold text-gray-800 mt-6 mb-1"
            >
              Liliayuna
            </Typography>
            <Typography variant="h6" className="mb-4 font-normal text-gray-500">
              Co CEO Tokisaki Holding Group
            </Typography>
            <Typography className="mb-0 max-w-md text-base font-normal leading-7 !text-gray-500">
              Learn from the best. Our instructors are industry experts,
              academics, and seasoned professionals dedicated to helping you.
            </Typography>
          </CardBody>
        </Card>
        <Card className="col-span-2 p-4 overflow-hidden" shadow={true}>
          <CardBody className="text-center">
            <Image
              src={"/images/testimonial/testi1.jpg"}
              alt={"testimonials-1"}
              width={"150"}
              height={"150"}
              className="inline rounded-full"
            />
            <Typography
              variant="h5"
              className="font-bold text-gray-800 mt-6 mb-1"
            >
              Liliayuna
            </Typography>
            <Typography variant="h6" className="mb-4 font-normal text-gray-500">
              Co CEO Tokisaki Holding Group
            </Typography>
            <Typography className="mb-0 max-w-md text-base font-normal leading-7 !text-gray-500">
              Learn from the best. Our instructors are industry experts,
              academics, and seasoned professionals dedicated to helping you.
            </Typography>
          </CardBody>
        </Card>
        <Card className="col-span-2 p-4 overflow-hidden" shadow={true}>
          <CardBody className="text-center">
            <Image
              src={"/images/testimonial/testi1.jpg"}
              alt={"testimonials-1"}
              width={"150"}
              height={"150"}
              className="inline rounded-full"
            />
            <Typography
              variant="h5"
              className="font-bold text-gray-800 mt-6 mb-1"
            >
              Liliayuna
            </Typography>
            <Typography variant="h6" className="mb-4 font-normal text-gray-500">
              Co CEO Tokisaki Holding Group
            </Typography>
            <Typography className="mb-0 max-w-md text-base font-normal leading-7 !text-gray-500">
              Learn from the best. Our instructors are industry experts,
              academics, and seasoned professionals dedicated to helping you.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
export default TestimonialSection;
