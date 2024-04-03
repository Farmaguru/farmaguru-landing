import FeatureSection from "@/components/section/FeatureSection";
import Image from "next/image";
import ContactUsSection from "@/components/section/ContactUsSection";
import WhatFarmaguruSection from "@/components/section/WhatFarmaguruSection";
import OurActivitySection from "@/components/section/OurActivitySection";
import { FooterHomepage } from "@/components/footer/FooterHomepage";
import TestimonialSection from "@/components/section/TestimonialSection";
import HeroDetailApplication from "@/components/hero/HeroDetailApplication";
import PricingSection from "@/components/section/PricingSection";
import FeatureApplicationSection from "@/components/section/FeatureApplicationSection";

export default function Home() {
  return (
    <>
      <HeroDetailApplication />
      <WhatFarmaguruSection />
      <FeatureApplicationSection />
      <PricingSection />
      <ContactUsSection />
      <FooterHomepage />
    </>
  );
}
