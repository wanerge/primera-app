import React from "react";
import { Icon } from "@iconify/react";

const Index = ({ text }: { text: string }) => {
  return (
    <div
      className="flex flex-row items-center justify-center gap-2 hover:cursor-pointer transition duration-150 ease-in-out
       hover:-translate-y-1 hover:scale-110"
    >
      <span className="text-primary lg:text-blanco text-lg font-semibold py-2 px-4">
        {text}
      </span>
      <div className="text-blanco inline ml-1">
        <Icon
          icon="material-symbols:keyboard-arrow-down"
          width="24"
          height="24"
        />
      </div>
    </div>
  );
};

export default Index;
