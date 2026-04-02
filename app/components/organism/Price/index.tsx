import React from "react";
import { Icon } from "@iconify/react";
import PrincipalButton from "@/app/components/atoms/Buttoms/Principal";
import Image from "next/image";

const Index = ({
  plantTitle = "Free",
  price = "0",
  description = "Capture ideas and find them quickly",
  textButton = "Get Started",
}: {
  plantTitle: string;
  price: string;
  description: string;
  textButton: string;
}) => {
  return (
    <div
      className="w-lg h-158.5 bg-white rounded-2xl border border-tertiary flex flex-col 
    items-start justify-evenly p-8"
    >
      <div className="flex flex-col justify-between gap-4">
        <h2 className="text-2xl font-bold text-black">{plantTitle}</h2>
        <span className="text-4xl font-bold">${price}</span>
        <h3 className="text-lg text-black">{description}</h3>
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          <ItemList text="Sync unlimited devices" />
          <ItemList text="10 GB monthly uploads" />
          <ItemList text="200 MB max. note size" />
          <ItemList text="Customize Home dashboard and access extra widgets" />
          <ItemList text="Connect primary Google Calendar account" />
          <ItemList text="Add due dates, reminders, and notifications to your tasks" />
        </ul>
      </div>
      <div>
        <PrincipalButton text={textButton} />
      </div>
    </div>
  );
};

const ItemList = ({ text = "Default Item" }: { text: string }) => {
  return (
    <li className="flex flex-row items-center gap-5 text-base text-black">
      {/* <Icon
        icon="material-symbols:check-circle-outline"
        width="24"
        height="24"
      /> */}
      <Image src="/Icon2.svg" alt="Icon" width={18} height={18} />
      <span>{text}</span>
    </li>
  );
};

export default Index;
