import React from "react";
import HeroSection from "../components/HeroSection";
import AppBanner from "../components/Banners/AppBanner";
import PaymentBanner from "../components/Banners/PaymentBanner";
import TextBanner from "../components/Banners/TextBanner";
import FeatureBanner from "../components/Banners/FeatureBanner";
import CategoryGrid from "../components/CategoryGrid";
import CampaignSlider from "../components/Banners/CampaignSlider";

const LandingPage = () => {
  return (
    <div className="m-0 p-0 bg-black">
      <HeroSection />
      <FeatureBanner />
      <CampaignSlider />
      <div className="text-left  my-4 px-5 ">
        <h2 className="text-2xl font-bold mb-4 text-white ml-3">
          OUR PRODUCTS
        </h2>
      </div>
      <CategoryGrid />
      <AppBanner />
      <TextBanner />
      <PaymentBanner />
    </div>
  );
};

export default LandingPage;
