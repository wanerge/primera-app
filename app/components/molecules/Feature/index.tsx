import React from "react";
import Title from "@/app/components/atoms/Title";
import PrincipalButton from "@/app/components/atoms/Buttoms/Principal";

interface Information {
  firstWord: string;
  secondWord: string;
  description: string;
  buttonText: string;
}

const Index = ({
  firstWord,
  secondWord,
  description,
  buttonText,
}: Information) => {
  return (
    <div className="flex flex-col items-start justify-center gap-8 max-w-2xl">
      <div>
        <Title firstWord={firstWord} secondWord={secondWord} />
      </div>
      <div>
        <p className="text-lg text-negro mt-4 text-justify">{description}</p>
      </div>
      <div className="mt-5">
        <PrincipalButton text={buttonText} />
      </div>
    </div>
  );
};

export default Index;
