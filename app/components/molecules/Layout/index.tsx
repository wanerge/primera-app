import React from "react";
import Image from "next/image";

const Index = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative flex flex-col w-full h-screen items-center justify-center bg-blanco">
      <div className="absolute top-1/5 left-0 z-0">
        <Image
          src="/BACKGROUND.svg"
          alt="BACKGROUND"
          width={603}
          height={450}
        />
      </div>
      <div className="absolute z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Index;
