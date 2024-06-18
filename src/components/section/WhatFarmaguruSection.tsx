import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { Typography, Card, CardBody } from "./../../gateStart";
import Image from "next/image";

const features = [
  {
    name: "Kamus Obat.",
    description:
      "Kami memiliki kamus obat yang lengkap dan telah tersinkronisasi dengan Satu Sehat dari Kemkes sebagai bentuk program Indonesia Satu Data!",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Komunitas.",
    description:
      "Merasa bingung? Komunitas Farmaguru siap membantu untuk menemukan berbagai kemungkinan solusi untuk masalah kesehatan dan kefarmasian Anda!",
    icon: LockClosedIcon,
  },
  {
    name: "Aplikasi.",
    description:
      "Butuh aplikasi penunjang untuk usaha kefarmasian Anda? Aplikasi Farmaguru Solusinya! Kami memiliki aplikasi yang lengkap dan andal!",
    icon: ServerIcon,
  },
];

export default function WhatFarmaguruSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <Typography
                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                style={{ lineHeight: "130%" }}
              >
                Kenal Lebih Dekat{" "}
                <span className="text-green500">
                  <br />
                  Farmaguru
                </span>
              </Typography>
              <Typography className="mt-6 text-lg leading-8 font-normal text-gray-600">
                Kami adalah komunitas serta penyedia layanan aplikasi yang
                bergerak di bidang Kefarmasian. Berikut adalah layanan yang kami
                tawarkan:
              </Typography>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      <Typography className="inline font-bold">
                        {feature.name}
                      </Typography>
                    </dt>{" "}
                    <dd className="inline">
                      <Typography className="inline font-normal">
                        {feature.description}
                      </Typography>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/images/homepage-aboutfarmaguru.png"
            width={700}
            height={504}
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
}
