import Image from "next/image";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/userAtom";
import AdminForm from "../components/AdminForm";
import texturePic from "../public/texture.png";
const admin = () => {
  const [user, setUser] = useRecoilState(userState);
  return (
    <main className="h-full w-full">
      <div
        className={`${
          !user ? "hidden" : "flex"
        } relative h-20 w-full bg-redSecondary/90 pl-[30px] items-center font-helvetica font-bold text-2xl text-white overflow-hidden 2xl:h-[154px] xl:pl-[14rem] xl:text-[40px]`}
      >
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
      {!user && (
        <div className="px-[30px] h-full">
          <AdminForm />
        </div>
      )}
      {user && <h1>{user.email}</h1>}
    </main>
  );
};

export default admin;
