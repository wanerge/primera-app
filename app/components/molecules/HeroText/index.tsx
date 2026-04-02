import React from "react";
import PrincipalButtom from "@/app/components/atoms/Buttoms/Principal";

const Index = () => {
  return (
    <div className="flex flex-col justify-around items-start max-w-2xl px-4 gap-10">
      <div>
        <h1 className="text-blanco text-6xl font-bold">
          Get More Done with whitepace
        </h1>
      </div>
      <div>
        <p className="text-blanco text-lg">
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </p>
      </div>
      <div className="mt-7">
        <PrincipalButtom text="Try Whitepace free"></PrincipalButtom>
      </div>
    </div>
  );
};

export default Index;
