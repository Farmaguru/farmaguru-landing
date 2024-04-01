import FeatureSection from "@/components/section/FeatureSection";
import Image from "next/image";
import ContactUsSection from "@/components/section/ContactUsSection";
import WhatFarmaguruSection from "@/components/section/WhatFarmaguruSection";
import OurActivitySection from "@/components/section/OurActivitySection";
import { FooterHomepage } from "@/components/footer/FooterHomepage";
import TestimonialSection from "@/components/section/TestimonialSection";
import HeroDetailApplication from "@/components/hero/HeroDetailApplication";

export default function Home() {
  return (
    <>
      <HeroDetailApplication />
      <FeatureSection />
      <TestimonialSection />
      <ContactUsSection />
      <FooterHomepage />
    </>
  );
}
