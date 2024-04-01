import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { Typography, Card, CardBody, Button } from "./../../gateStart";
import Image from "next/image";

const features = [
  {
    name: "Kamus Obat.",
    description:
      "Creativity starts with an empty calendar and ends with a full one.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Komunitas.",
    description:
      "Creativity starts with an empty calendar and ends with a full one.",
    icon: LockClosedIcon,
  },
  {
    name: "Aplikasi.",
    description:
      "Creativity starts with an empty calendar and ends with a full one.",
    icon: ServerIcon,
  },
];

export default function FeatureApplicationSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-8">
          <Card className="col-span-3 p-4 overflow-hidden" shadow={true}>
            <CardBody className="text-center p-0">
              <Image
                src={"/images/cobagratis.jpg"}
                alt={"cobagratis"}
                width={"800"}
                height={"500"}
                className="inline rounded-md"
              />
              <Typography
                variant="h5"
                className="font-bold text-gray-800 mt-6 mb-2 px-6"
              >
                Coba Gratis!
              </Typography>
              <Typography className="mb-4 max-w-md text-base font-normal leading-7 !text-gray-500 px-6">
                Rasakan langsung manfaat dari menggunakan POS Apotek secara
                langsung dengan mencoba langganan gratis selama satu bulan!
              </Typography>
              <Button size="md" className="bg-green500 text-white mb-4">
                Coba Sekarang!
              </Button>
            </CardBody>
          </Card>
          <div className="col-span-5 justify-center align-middle flex flex-col">
            <div className="lg:pl-8">
              <Typography
                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                style={{ lineHeight: "130%" }}
              >
                Fitur Unggulan <span className="text-green500">POS Apotek</span>
              </Typography>
              <Typography className="mt-6 text-lg leading-8 font-normal text-gray-600">
                Say goodbye to confusion of picking a best costume to attend
                some events! Our collection ensure you find the perfect costume
                that suits your needs.
              </Typography>

              <div className="mt-10 text-base leading-7 text-gray-600 grid grid-cols-1 lg:grid-cols-6 gap-6">
                {features.map((feature) => (
                  <div key={feature.name} className="col-span-2">
                    <feature.icon
                      className="h-8 w-8 text-indigo-600 mb-2"
                      aria-hidden="true"
                    />
                    <Typography
                      className="font-bold text-black mb-2"
                      variant="h5"
                    >
                      {feature.name}
                    </Typography>

                    <Typography className="font-normal">
                      {feature.description}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
