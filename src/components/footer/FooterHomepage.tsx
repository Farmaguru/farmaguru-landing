import Image from "next/image";
import { Typography } from "./../../gateStart";

const LINKS = [
  {
    title: "Home",
    url: "/",
    items: [
      { display: "Tentang Farmaguru", url: "/" },
      { display: "Aktivitas Kami", url: "/" },
      { display: "Hubungi Kami", url: "/" },
    ],
  },
  {
    title: "Kamus Obat",
    url: "/",
    items: [],
  },
  {
    title: "Komunitas",
    url: "/",
    items: [],
  },
  {
    title: "Aplikasi",
    url: "/aplikasi",
    items: [
      { display: "POS Apotek", url: "/aplikasi/apotek" },
      { display: "PBF", url: "/aplikasi/pbf" },
      { display: "Kamus Obat", url: "/aplikasi/kamusobat" },
      { display: "Farmaguru Medical", url: "/aplikasi/medical" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export function FooterHomepage() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4 max-w-md">
            <Image
              src={"/logo/farma-default-lightmode.svg"}
              alt={"farmaguru-apotek-logo"}
              width={"163"}
              height={"24"}
            />
            <Typography
              variant="h6"
              className="mb-6 text-gray-500 text-sm font-normal leading-6"
            >
              Jalan Tukad Pancoran No. 2, Panjer, Denpasar Selatan, Dauh Puri
              Klod, Kec. Denpasar Bar., Kota Denpasar, Bali 80225
            </Typography>
          </div>

          <div className="grid grid-cols-4 justify-between gap-4">
            {LINKS.map(({ title, items, url }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                  href={url}
                >
                  {title}
                </Typography>
                {items.map((link, index) => (
                  <li key={index}>
                    <Typography
                      as="a"
                      href={link.url}
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link.display}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} Farmaguru. All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>

            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M17.2806 5.28988C16.4959 4.37944 16.0634 3.21022 16.0638 1.99988H12.5166V16.4665C12.4892 17.2494 12.164 17.9909 11.6094 18.535C11.0548 19.079 10.3142 19.3831 9.54337 19.3832C7.91326 19.3832 6.55867 18.0299 6.55867 16.3499C6.55867 14.3432 8.46429 12.8382 10.4273 13.4565V9.76988C6.46684 9.23321 3 12.3599 3 16.3499C3 20.2349 6.16837 22.9999 9.53189 22.9999C13.1365 22.9999 16.0638 20.0249 16.0638 16.3499V9.01154C17.5022 10.0614 19.2291 10.6246 21 10.6215V7.01654C21 7.01654 18.8418 7.12154 17.2806 5.28988Z"
                  fill-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 18"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.00390625 3.15156L11.9994 9.14856L23.9949 3.15156C23.9505 2.38723 23.6155 1.66879 23.0586 1.1434C22.5017 0.61801 21.765 0.325421 20.9994 0.325562H2.99941C2.23378 0.325421 1.49708 0.61801 0.940173 1.1434C0.383269 1.66879 0.0483124 2.38723 0.00390625 3.15156Z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
                <path
                  d="M24 6.50256L12 12.5026L0 6.50256V15.3256C0 16.1212 0.31607 16.8843 0.87868 17.4469C1.44129 18.0095 2.20435 18.3256 3 18.3256H21C21.7956 18.3256 22.5587 18.0095 23.1213 17.4469C23.6839 16.8843 24 16.1212 24 15.3256V6.50256Z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M12 0.325562C18.6276 0.325562 24 5.69796 24 12.3256C24 18.9531 18.6276 24.3255 12 24.3255C9.87934 24.329 7.796 23.7677 5.96401 22.6995L0.00481688 24.3255L1.62722 18.3639C0.558128 16.5314 -0.00352605 14.4472 1.66563e-05 12.3256C1.66563e-05 5.69796 5.37241 0.325562 12 0.325562ZM7.91041 6.68556L7.67041 6.69516C7.51504 6.70462 7.36319 6.74544 7.22401 6.81516C7.09384 6.88887 6.97501 6.98103 6.87121 7.08876C6.72721 7.22436 6.64561 7.34196 6.55801 7.45596C6.11416 8.03304 5.87518 8.74153 5.87881 9.46956C5.88121 10.0576 6.03481 10.63 6.27481 11.1652C6.76561 12.2476 7.57321 13.3936 8.63881 14.4556C8.89561 14.7112 9.14761 14.968 9.41881 15.2068C10.7429 16.3725 12.3207 17.2132 14.0268 17.662L14.7084 17.7663C14.9304 17.7784 15.1524 17.7616 15.3756 17.7507C15.7251 17.7327 16.0663 17.6381 16.3752 17.4736C16.5324 17.3926 16.6857 17.3045 16.8348 17.2096C16.8348 17.2096 16.8864 17.1759 16.9848 17.1015C17.1468 16.9816 17.2464 16.8964 17.3808 16.756C17.4804 16.6528 17.5668 16.5316 17.6328 16.3936C17.7264 16.198 17.82 15.8248 17.8584 15.514C17.8872 15.2764 17.8788 15.1468 17.8752 15.0664C17.8704 14.938 17.7636 14.8048 17.6472 14.7484L16.9488 14.4352C16.9488 14.4352 15.9048 13.9804 15.2664 13.69C15.1996 13.6608 15.128 13.6441 15.0552 13.6408C14.9731 13.6323 14.8901 13.6416 14.8119 13.6678C14.7337 13.6941 14.662 13.7369 14.6016 13.7932C14.5956 13.7908 14.5152 13.8592 13.6476 14.9104C13.5978 14.9773 13.5292 15.0278 13.4506 15.0556C13.3719 15.0834 13.2868 15.0871 13.206 15.0664C13.1278 15.0454 13.0512 15.0189 12.9768 14.9872C12.828 14.9248 12.7764 14.9008 12.6744 14.8576C11.9857 14.557 11.348 14.1509 10.7844 13.654C10.6332 13.522 10.4928 13.378 10.3488 13.2388C9.87671 12.7866 9.46528 12.2752 9.12481 11.7172L9.05401 11.6032C9.00316 11.5266 8.96204 11.4439 8.93161 11.3572C8.88601 11.1808 9.00481 11.0392 9.00481 11.0392C9.00481 11.0392 9.29641 10.72 9.43201 10.5472C9.56401 10.3792 9.67561 10.216 9.74761 10.0996C9.88921 9.87156 9.93361 9.63756 9.85921 9.45636C9.52321 8.63556 9.17521 7.81836 8.81761 7.00716C8.74681 6.84636 8.53681 6.73116 8.34601 6.70836C8.28121 6.70116 8.21641 6.69396 8.15161 6.68916C7.99046 6.68115 7.82897 6.68275 7.66801 6.69396L7.91041 6.68556Z"
                  fill-rule="evenodd"
                />
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
