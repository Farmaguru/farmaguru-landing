import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody } from "./../../gateStart";

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Liliayuna",
      occupation: "Co CEO Tokisaki Holding Group",
      message:
        "Learn from the best. Our instructors are industry experts, academics, and seasoned professionals dedicated to helping you.",
      profileSrc: "testi1.jpg",
    },
    {
      name: "Xiaoyukiko",
      occupation: "CEO Tokisaki Cosplay",
      message:
        "Learn from the best. Our instructors are industry experts, academics, and seasoned professionals dedicated to helping you.",
      profileSrc: "testi1.jpg",
    },
    {
      name: "Akari Akase",
      occupation: "Voice Actress",
      message:
        "Learn from the best. Our instructors are industry experts, academics, and seasoned professionals dedicated to helping you.",
      profileSrc: "testi1.jpg",
    },
  ];

  return (
    <section className="lg:py-28 py-10 px-8">
      <div className="container mx-auto mb-10 text-center mb-20">
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
      <div className="mb-8 container mx-auto grid lg:gap-x-8 gap-y-12 grid-cols-1 lg:grid-cols-6">
        {testimonials.map((testimonial, index) => (
          <div className="col-span-2 sm: mt-8" key={index}>
            <div className="relative lg:p-8">
              <Image
                src={`/images/testimonial/${testimonial.profileSrc}`}
                alt={`testimonials-${testimonial.name}`}
                width={"150"}
                height={"150"}
                className="inline rounded-full absolute translate-x-[50%] translate-y-[-40%] z-10"
              />
            </div>
            <Card className="p-4" shadow={true}>
              <CardBody className="text-center">
                <Typography
                  variant="h5"
                  className="font-bold text-gray-800 lg:mt-8 mt-16 mb-1"
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="h6"
                  className="mb-4 font-normal text-gray-500"
                >
                  {testimonial.occupation}
                </Typography>
                <Typography className="mb-0 max-w-md text-base font-normal leading-7 !text-gray-500">
                  {testimonial.message}
                </Typography>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
export default TestimonialSection;
