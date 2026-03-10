import React from "react";
import Menu from "@/app/components/molecules/Menu";
import Image from "next/image";
import LoginButtom from "@/app/components/atoms/Buttoms/Login";
import PrincipalButtom from "@/app/components/atoms/Buttoms/Principal";

const Index = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div>
        <Image src="Logo_White.svg" alt="Logo" width={100} height={50} />
      </div>
      <div>
        <Menu />
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <LoginButtom />
        <PrincipalButtom />
      </div>
    </div>
  );
};

export default Index;
