import Image from "next/image";
import texturePic from "../public/texture.png";
import affiliation1 from "../public/affiliation l'awa 2022-2023/affiliation  2022-2023 LAWA23BB-1.webp";
import affiliation2 from "../public/affiliation l'awa 2022-2023/affiliation  2022-2023 LAWA23BB-2.webp";
import affiliation3 from "../public/affiliation l'awa 2022-2023/affiliation  2022-2023 LAWA23BB-3.webp";
import affiliation4 from "../public/affiliation l'awa 2022-2023/affiliation  2022-2023 LAWA23BB-4.webp";
import affiliation5 from "../public/affiliation l'awa 2022-2023/affiliation  2022-2023 LAWA23BB-5.webp";
import affiliation6 from "../public/affiliation l'awa 2022-2023/affiliation  2022-2023 LAWA23BB-6.webp";
import affiliation7 from "../public/affiliation l'awa 2022-2023/affiliation  2022-2023 LAWA23BB-7.webp";
import affiliation8 from "../public/affiliation l'awa 2022-2023/affiliation  2022-2023 LAWA23BB-8.webp";
import affiliation9 from "../public/affiliation l'awa 2022-2023/affiliation  2022-2023 LAWA23BB-9.webp";
const status = () => {
  return (
    <main className="overflow-y-scroll h-full">
      <div className="relative h-20 w-full bg-redSecondary/90 pl-[30px] flex items-center font-helvetica font-bold text-2xl text-white overflow-hidden 2xl:h-[154px] xl:pl-[14rem] xl:text-[40px]">
        <div className="mix-blend-color-burn absolute inset-0 h-64 w-full">
          <Image
            alt="texture image"
            src={texturePic}
            layout="fill"
            objectFit="cover"
          />
        </div>
        S&apos;affilier
      </div>
      <div className="w-full flex flex-wrap space-y-4 py-4 px-4 lg:py-8 lg:px-8">
        <div className="relative  h-[30rem] lg:h-[41rem] xl:h-[58rem] 2xl:h-[75rem] w-full">
          <Image
            alt="image d'affiliation"
            layout="fill"
            objectFit="contain"
            src={affiliation1}
          />
        </div>
        <div className="relative h-[30rem] lg:h-[41rem] xl:h-[58rem] 2xl:h-[75rem] w-full">
          <Image
            alt="image d'affiliation"
            layout="fill"
            objectFit="contain"
            src={affiliation2}
          />
        </div>
        <div className="relative h-[30rem] lg:h-[41rem] xl:h-[58rem] 2xl:h-[75rem] w-full">
          <Image
            alt="status-image"
            layout="fill"
            objectFit="contain"
            src={affiliation3}
          />
        </div>
        <div className="relative h-[30rem] lg:h-[41rem] xl:h-[58rem] 2xl:h-[75rem] w-full">
          <Image
            alt="status-image"
            layout="fill"
            objectFit="contain"
            src={affiliation4}
          />
        </div>
        <div className="relative h-[30rem] lg:h-[41rem] xl:h-[58rem] 2xl:h-[75rem] w-full">
          <Image
            alt="status-image"
            layout="fill"
            objectFit="contain"
            src={affiliation5}
          />
        </div>
        <div className="relative h-[30rem] lg:h-[41rem] xl:h-[58rem] 2xl:h-[75rem] w-full">
          <Image
            alt="status-image"
            layout="fill"
            objectFit="contain"
            src={affiliation6}
          />
        </div>
        <div className="relative h-[30rem] lg:h-[41rem] xl:h-[58rem] 2xl:h-[75rem] w-full">
          <Image
            alt="status-image"
            layout="fill"
            objectFit="contain"
            src={affiliation7}
          />
        </div>
        <div className="relative h-[30rem] lg:h-[41rem] xl:h-[58rem] 2xl:h-[75rem] w-full">
          <Image
            alt="status-image"
            layout="fill"
            objectFit="contain"
            src={affiliation8}
          />
        </div>
        <div className="relative h-[30rem] lg:h-[41rem] xl:h-[58rem] 2xl:h-[75rem] w-full">
          <Image
            alt="status-image"
            layout="fill"
            objectFit="contain"
            src={affiliation9}
          />
        </div>
      </div>
    </main>
  );
};

export default status;
