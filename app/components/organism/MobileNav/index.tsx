import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export const Index = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full bg-primary shadow-md py-4 px-6 relative">
      <div>
        <Image
          src="/Logo_White.svg"
          alt="Logo"
          width={150}
          height={30}
          className="object-contain"
        />
      </div>
      <div>
        <Icon
          icon="material-symbols:menu-rounded"
          color="ffffff"
          width={42}
          height={24}
        />
      </div>
      <div className="bg-blanco shadow-md w-5/6 absolute inset-x-10 top-20">
        Menu
      </div>
    </div>
  );
};

export default Index;
