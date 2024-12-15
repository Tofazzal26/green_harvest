import Banner from "@/Components/Banner/Banner";
import BrandSlider from "@/Components/BrandSlider/BrandSlider";
import GrowthHarvest from "@/Components/GrowthHarvest/GrowthHarvest";
import OurBenefits from "@/Components/OurBenefits/OurBenefits";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <BrandSlider />
      <GrowthHarvest />
      <OurBenefits />
    </div>
  );
}
