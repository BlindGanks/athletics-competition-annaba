import Image from "next/image";
import React from "react";
import heroPic from "../public/heroPic.jpg";
import Countdown from "./Countdown";
const Hero = () => {
  return (
    <div className="relative h-[471px] lg:h-[940px] w-full bg-blue-400">
      <Image
        alt="marathon image"
        priority
        src={heroPic}
        objectFit="cover"
        layout="fill"
        className="filter brightness-50 absolute inset-0"
      />
      <div className="absolute -bottom-[250px] md:-bottom-[160px] lg:bottom-0 w-full">
        <div className="h-[23rem] md:h-72 lg:h-[517px] lg:w-[886px] w-full bg-white mb-10 -ml-[30px] pl-[60px] lg:ml-0 lg:pl-[10rem] xl:pl-[14rem]">
          <div className="h-full flex flex-col justify-center">
            <h2 className="text-redPrimary font-futura text-[25px] lg:text-[47px]">
              La Ligue D&apos;athlétisme <br />
              De La Wilaya <br className="md:hidden" /> De Annaba
            </h2>
            <p className="font-helvetica text-[17px] lg:text-[27px] font-normal mb-4 md:mb-10 lg:mb-14">
              L&apos;affiliation a la ligue d&apos;athlétisme de la wilaya de
              Annaba est ouverte a toutes association loi 12/06 ayant pour objet
              la pratique de l&apos;athlétisme. <br /> S&apos;affilier a la
              ligue permet de bénéficier de nombreux avantages sur le plan
              administratif,sportif et technique.
            </p>
            <button className="self-center lg:self-auto w-[173px] h-[36px] lg:w-[279px] lg:h-[58px] bg-redPrimary text-white font-futura text-[13px] lg:text-[22px] uppercase">
              montre plus
            </button>
          </div>
        </div>
        {/* timer */}
        <div className="h-[68px] md:h-[108px] lg:h-[163px] xl:h-[210px] w-full lg:w-[85%] xl:w-[75%] 2xl:w-[60%] mx-auto lg:px-0 px-[30px]">
          <Countdown />
        </div>
      </div>
    </div>
  );
};

export default Hero;
