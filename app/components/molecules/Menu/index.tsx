import React from "react";
import Navtitle from "@/app/components/atoms/Navtitle";

const Index = () => {
  return (
    <div className="flex flex-row items-center justify-around">
      <Navtitle text="Products" />
      <Navtitle text="Solutions" />
      <Navtitle text="Resources" />
      <Navtitle text="Pricing" />
    </div>
  );
};

export default Index;
