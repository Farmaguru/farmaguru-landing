"use client";

import React from "react";
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { MinusCircleIcon } from "@heroicons/react/24/outline";

interface PricingCardPropsType {
  title: string;
  desc: string;
  price: string[];
  options: {
    icon: React.ReactNode;
    info: string;
  }[];
  icon: React.ReactNode;
  children: React.ReactNode;
}

function PricingCard({ title, desc, price, options }: PricingCardPropsType) {
  return (
    <Card variant="gradient" color="white">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="!m-0 p-6"
      >
        <Typography
          variant="h6"
          color="blue-gray"
          className="capitalize font-bold mb-1"
        >
          {title}
        </Typography>
        <Typography variant="small" className="font-normal !text-gray-500">
          {desc}
        </Typography>
        <Typography
          variant="h3"
          color="blue-gray"
          className="mt-4 flex gap-1 !text-4xl"
        >
          {price[0]}
          {price[1]}
          <Typography
            as="span"
            color="blue-gray"
            className="-translate-y-0.5 self-end opacity-70 text-lg font-bold"
          >
            /{price[2]}
          </Typography>
        </Typography>
      </CardHeader>
      <CardBody className="pt-0">
        <ul className="flex flex-col gap-3 mb-6">
          {options.map((option, key) => (
            <li key={key} className="flex items-center gap-3 text-gray-700">
              {option.icon}
              <Typography variant="small" className="font-normal text-inherit">
                {option.info}
              </Typography>
            </li>
          ))}
        </ul>
        <Button fullWidth variant="gradient" color="gray">
          get started
        </Button>
      </CardBody>
    </Card>
  );
}

export function PricingSection() {
  const cards = [
    {
      title: "starter",
      desc: "Free access for 2 members",
      price: ["$", "129", "year"],
      options: [
        {
          icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "Complete documentation",
        },
        {
          icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "Working materials in Sketch",
        },
        {
          icon: (
            <MinusCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "Integration help",
        },
        {
          icon: (
            <MinusCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "40GB Cloud storage",
        },
        {
          icon: (
            <MinusCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "Support team full assist",
        },
      ],
    },
    {
      title: "premium",
      desc: "Free access for 30 members",
      price: ["$", "299", "year"],
      options: [
        {
          icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "Complete documentation",
        },
        {
          icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "Working materials in Sketch",
        },
        {
          icon: (
            <CheckCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "Integration help",
        },
        {
          icon: (
            <CheckCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "40GB Cloud storage",
        },
        {
          icon: (
            <MinusCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "Support team full assist",
        },
      ],
    },
    {
      title: "company",
      desc: "Free access for 200 members",
      price: ["$", "399", "year"],
      options: [
        {
          icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "Complete documentation",
        },
        {
          icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "Working materials in Sketch",
        },
        {
          icon: (
            <CheckCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "Integration help",
        },
        {
          icon: (
            <CheckCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "40GB Cloud storage",
        },
        {
          icon: (
            <CheckCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "Support team full assist",
        },
      ],
    },
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="container mx-auto text-center mb-10">
        <Typography className="mb-2 font-bold text-green500">
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
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ title, desc, options, price }, key) => (
          <PricingCard
            key={key}
            title={title}
            desc={desc}
            price={price}
            options={options}
          />
        ))}
      </div>
      <Typography variant="small" className="mt-10 font-normal !text-gray-500">
        You have Free Unlimited Updates and Premium Support on each package. You
        also have 30 days to request a refund.
      </Typography>
    </section>
  );
}

export default PricingSection;
