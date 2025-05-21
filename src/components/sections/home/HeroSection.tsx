import React from "react";
import HeroContent from "./components/HeroContent";
import HeroMapsGrid from "./components/HeroMapsGrid";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center pb-30 pt-12">
      <HeroContent />
      <HeroMapsGrid />
    </section>
  )
}

export default HeroSection;