export const dynamic = "force-dynamic";
import Banner from "@/Components/Banner/Banner";
import BrandSlider from "@/Components/BrandSlider/BrandSlider";
import ClientBrand from "@/Components/ClientBrand/ClientBrand";
import Discover from "@/Components/Discover/Discover";
import GrowthHarvest from "@/Components/GrowthHarvest/GrowthHarvest";
import NewsInsight from "@/Components/NewsInsight/NewsInsight";
import OurBenefits from "@/Components/OurBenefits/OurBenefits";

export default function Home() {
  return (
    <div>
      <Banner />
      <BrandSlider />
      <GrowthHarvest />
      <OurBenefits />
      <NewsInsight />
      <ClientBrand />
      <Discover />
    </div>
  );
}
