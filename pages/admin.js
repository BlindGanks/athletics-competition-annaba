import Image from "next/image";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/userAtom";
import AdminForm from "../components/AdminForm";
import ParticipationsListDesktopView from "../components/ParticipationsListDesktopView";
import ParticipationsListMobileView from "../components/ParticipationsListMobileView";
import texturePic from "../public/texture.png";
const Admin = () => {
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
        Page D'administration
      </div>
      {!user && (
        <div className="px-[30px] h-full">
          <AdminForm />
        </div>
      )}
      {user && (
        <>
          <ParticipationsListMobileView />
          <ParticipationsListDesktopView />
        </>
      )}
    </main>
  );
};

export default Admin;
