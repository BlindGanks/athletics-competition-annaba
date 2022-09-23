import Image from "next/image";
import texturePic from "../public/texture.png";
import statusPage35 from "../public/status-page-35.jpg";
import statusPage36 from "../public/status-page-36.jpg";
const status = () => {
  return (
    <main>
      <div className="relative h-20 w-full bg-redSecondary/90 pl-[30px] flex items-center font-helvetica font-bold text-2xl text-white overflow-hidden 2xl:h-[154px] xl:pl-[14rem] xl:text-[40px]">
        <div className="mix-blend-color-burn absolute inset-0 h-64 w-full">
          <Image
            alt="texture image"
            src={texturePic}
            layout="fill"
            objectFit="cover"
          />
        </div>
        Status
      </div>
      <div className="w-full flex flex-col space-y-4 py-4 px-4 lg:py-8 lg:px-8 lg:flex-row lg:space-y-0 lg:justify-between">
        <div className="relative  h-[30rem] lg:h-[41rem] xl:h-[58rem] 2xl:h-[75rem] lg:w-full">
          <Image
            alt="status-image"
            layout="fill"
            objectFit="contain"
            src={statusPage35}
          />
        </div>
        <div className="relative h-[30rem] lg:h-[41rem] xl:h-[58rem] 2xl:h-[75rem] lg:w-full">
          <Image
            alt="status-image"
            layout="fill"
            objectFit="contain"
            src={statusPage36}
          />
        </div>
      </div>
    </main>
  );
};

export default status;
