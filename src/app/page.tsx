import NavbarDefault from "@/components/navbar/NavbarDefault";
import FeatureSection from "@/components/section/FeatureSection";
import HeroHomepage from "@/components/hero/HeroHomepage";
import Image from "next/image";
import ContactUsSection from "@/components/section/ContactUsSection";
import WhatFarmaguruSection from "@/components/section/WhatFarmaguruSection";
import OurActivitySection from "@/components/section/OurActivitySection";
import { FooterHomepage } from "@/components/footer/FooterHomepage";

export default function Home() {
  return (
    <>
      <HeroHomepage />
      <WhatFarmaguruSection />
      <FeatureSection />
      <OurActivitySection />
      <ContactUsSection />
      <FooterHomepage />
    </>
  );
}
