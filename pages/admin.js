import Image from "next/image";
import React from "react";
import AdminForm from "../components/AdminForm";
import texturePic from "../public/texture.png";
const admin = () => {
  return (
    <main className="h-full w-full">
      <div className="hidden relative h-20 w-full bg-redSecondary/90 pl-[30px] items-center font-helvetica font-bold text-2xl text-white overflow-hidden 2xl:h-[154px] xl:pl-[14rem] xl:text-[40px]">
        <div className="mix-blend-color-burn absolute inset-0 h-64 w-full">
          <Image
            alt="texture image"
            src={texturePic}
            layout="fill"
            objectFit="cover"
          />
        </div>
        Contact
      </div>
      <div className="px-[30px] h-full">
        <AdminForm />
      </div>
    </main>
  );
};

export default admin;
