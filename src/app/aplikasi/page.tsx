import FeatureSection from "@/components/section/FeatureSection";
import Image from "next/image";
import ContactUsSection from "@/components/section/ContactUsSection";
import WhatFarmaguruSection from "@/components/section/WhatFarmaguruSection";
import OurActivitySection from "@/components/section/OurActivitySection";
import { FooterHomepage } from "@/components/footer/FooterHomepage";
import HeroApplication from "@/components/hero/HeroApplication";
import TestimonialSection from "@/components/section/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroApplication />
      <FeatureSection />
      <TestimonialSection />
      <ContactUsSection />
      <FooterHomepage />
    </>
  );
}
