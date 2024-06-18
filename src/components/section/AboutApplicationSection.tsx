import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { Typography, Card, CardBody } from "./../../gateStart";
import Image from "next/image";

interface AboutApplicationProps {
  application: "posapotek" | "pbf" | "kamusobat" | "medical";
}

const datas = [
  {
    applicationId: "posapotek",
    applicationName: "Pos Apotek",
    applicationDescription:
      "Aplikasi POS Apotek, atau Point of Sale for Pharmacy, adalah sebuah perangkat lunak yang dirancang khusus untuk membantu pengelolaan apotek. Aplikasi ini bekerja layaknya kasir digital yang membantu mencatat transaksi penjualan obat, mengelola stok barang, dan menyajikan berbagai laporan penting untuk analisis bisnis.",
  },
  {
    applicationId: "pbf",
    applicationName: "POS PBF",
    applicationDescription:
      "Aplikasi POS PBF,  adalah sebuah perangkat lunak yang dirancang khusus untuk membantu pemesanan stok obat. Aplikasi ini bekerja layaknya kasir digital yang membantu mencatat transaksi penjualan obat, mengelola pembelian stok barang dan menyajikan berbagai laporan penting untuk analisis bisnis.",
  },
  {
    applicationId: "kamusobat",
    applicationName: "Kamus Obat",
    applicationDescription:
      "Aplikasi kamus obat merupakan aplikasi seperti layaknya kamus yang ditujukan untuk obat. Dalam aplikasi ini terdapat data-data detail terkait obat-obatan yang beredar di Indonesia",
  },
  {
    applicationId: "medical",
    applicationName: "Farmaguru Medical",
    applicationDescription:
      "Farmaguru Medical merupakan aplikasi yang dirancang khusus untuk mencatat dan mengelola rekam medis pasien dengan mudah dan aman. Aplikasi ini dilengkapi dengan berbagai fitur canggih yang membantu dokter, perawat, dan tenaga medis lainnya dalam memberikan layanan kesehatan yang optimal.",
  },
];

export default function AboutApplicationSection({
  application,
}: AboutApplicationProps) {
  let filteredFeature = datas.filter(
    (data) => data.applicationId === application
  );

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
                  {filteredFeature[0].applicationName}
                </span>
              </Typography>
              <Typography className="mt-6 text-lg leading-8 font-normal text-gray-600">
                {filteredFeature[0].applicationDescription}
              </Typography>
            </div>
          </div>
          <Image src="/images/bwf.webp" width={700} height={504} alt=""></Image>
        </div>
      </div>
    </div>
  );
}
