import React from "react";
import Image from "next/image";

const Index = ({ text = "Read more" }: { text?: string }) => {
  return (
    <button
      className="bg-secondary text-blanco text-lg font-medium py-4 px-6 rounded-lg h-15 hover:cursor-pointer
    hover:bg-tertiary hover:text-primary transition delay-150 duration-300  ease-in-out hover:-transalate-y-1 hover:scale-110
    flex items-center justify-center flex-row gap-2"
    >
      {text}
      <div>
        <Image src="/Icon.svg" alt="Icon" width={24} height={24} />
      </div>
    </button>
  );
};

export default Index;
