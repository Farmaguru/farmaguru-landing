import { Button, Typography } from "./../../gateStart";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

export function ContactUsSection() {
  return (
    <section className="bg-green100">
      <div className="mb-10 lg:mb-20 m-10 p-10 rounded-l-xl rounded-xl bg-no-repeat lg:bg-contain bg-cover bg-right text-center">
        <Typography variant="h3" color="blue-gray">
          Hubungi Kami
        </Typography>
        <Typography className="mt-2 mb-6 !text-base font-normal text-gray-700">
          Ketahui lebih banyak, hubungi tim kami melalui kontak di bawah!
        </Typography>
        <div className="flex flex-row gap-4 justify-center">
          <Button className="flex-shrink-0 text-white" color="black">
            <div className="flex flex-row gap-2 align-middle justify-center">
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
              <Typography variant="h6" className="text-bold text-sm">
                WHATSAPP
              </Typography>
            </div>
          </Button>
          <Button className="flex-shrink-0 text-white" color="black">
            <div className="flex flex-row gap-2 align-middle justify-center">
              <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
              <Typography variant="h6" className="text-bold text-sm">
                EMAIL
              </Typography>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
export default ContactUsSection;
