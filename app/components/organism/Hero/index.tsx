import React from "react";
import Image from "next/image";
import HeroText from "@/app/components/molecules/HeroText";

const Index = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-primary">
      <div className="relative w-full h-1/2 flex items-center justify-center z-0">
        <Image
          src="/Element.svg"
          alt="Element"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="absolute w-full h-2/3 flex flex-row items-start justify-center z-10">
        <div className="h-full flex flex-col items-center justify-start mt-20">
          <HeroText />
        </div>
        <div>
          <Image
            src="/Image-container.svg"
            alt="Image Container"
            width={800}
            height={549}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
