import NavbarDefault from "@/components/navbar/NavbarDefault";
import FeatureSection from "@/components/section/FeatureSection";
import HeroHomepage from "@/components/hero/HeroHomepage";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroHomepage />
      <FeatureSection />
    </>
  );
}
