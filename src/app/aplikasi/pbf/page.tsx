import ContactUsSection from "@/components/section/ContactUsSection";
import { FooterHomepage } from "@/components/footer/FooterHomepage";
import HeroDetailApplication from "@/components/hero/HeroDetailApplication";
import PricingSection from "@/components/section/PricingSection";
import FeatureApplicationSection from "@/components/section/FeatureApplicationSection";
import AboutApplicationSection from "@/components/section/AboutApplicationSection";

export default function Home() {
  return (
    <>
      <HeroDetailApplication application="pbf" />
      <AboutApplicationSection application="pbf" />
      <FeatureApplicationSection application="pbf" />
      <PricingSection />
      <ContactUsSection />
      <FooterHomepage />
    </>
  );
}
