import React from "react";
import Feature from "@/app/components/molecules/Feature";
import Image from "next/image";

interface Information {
  firstWord: string;
  secondWord: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  orientation: boolean;
}

const Index = ({
  firstWord,
  secondWord,
  description,
  buttonText,
  imageSrc,
  orientation,
}: Information) => {
  return (
    <div
      className={
        orientation
          ? "flex flex-row items-center justify-center gap-10 "
          : "flex flex-row-reverse items-center justify-center gap-10"
      }
    >
      <div>
        <Feature
          firstWord={firstWord}
          secondWord={secondWord}
          description={description}
          buttonText={buttonText}
        />
      </div>
      <div className="w-1/2">
        <Image src={imageSrc} alt="Description" width={500} height={500} />
      </div>
    </div>
  );
};

export default Index;
