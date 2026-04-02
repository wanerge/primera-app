import React from "react";

const Index = ({
  firstWord = "Project",
  secondWord = "Management",
}: {
  firstWord: string;
  secondWord: string;
}) => {
  return (
    <div className="text-7xl font-extrabold text-negro">
      <span>{firstWord}</span>
      <div className="relative">
        <span className="relative z-10">{secondWord}</span>
        <img
          className="absolute -z-10 inset-x-0 -bottom-5"
          src="/Vector.svg"
          alt="resaltado"
        />
      </div>
    </div>
  );
};

export default Index;
