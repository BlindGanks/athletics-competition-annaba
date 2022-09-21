import Image from "next/image";
import React from "react";
import Contact from "../components/Contact";
import texturePic from "../public/texture.png";
import {
  AvatarIcon,
  BuldingIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "../components/icons";
const contacts = {
  siegeSocial: {
    content: (
      <span>
        Ligue d’athlétisme de la wilaya d’Annaba Stade chabou Abdelkader Annaba
      </span>
    ),
    title: "siege social",
    icon: <BuldingIcon />,
  },
  adressePostale: {
    content: <span>Stade chabou Abdelkader Rue Layachi Salah, Annaba</span>,
    title: "adresse postale",
    icon: <LocationIcon />,
  },
  adresseEmail: {
    content: <span>.............</span>,
    title: "adresse email",
    icon: <MailIcon />,
  },
  Secrétariat: {
    content: (
      <>
        <span className="block">
          Le secrétariat est ouvert du samedi au jeudi
        </span>
        <span>Contacter au numéro : 0662-14-73-72</span>
      </>
    ),
    title: "Le Secrétariat",
    icon: <AvatarIcon />,
  },
  phoneNumbers: {
    content: (
      <>
        <span>Président de Ligue : 0662-14-72-86</span>
        <span>Secrétaire Général : 0673-53-25-40</span>
        <span>Directeur Exécutif : 0674-56-02-81</span>
      </>
    ),
    title: "Téléphone De Responsables",
    icon: <PhoneIcon />,
  },
};

const contact = () => {
  return (
    <main>
      <div className="relative h-20 w-full bg-redSecondary/90 pl-[30px] flex items-center font-helvetica font-bold text-2xl text-white overflow-hidden 2xl:h-[154px] xl:pl-[14rem] xl:text-[40px]">
        <div className="mix-blend-color-burn absolute inset-0 h-64 w-full">
          <Image src={texturePic} layout="fill" objectFit="cover" />
        </div>
        Contact
      </div>
      <div className="w-full py-10 px-[30px] space-y-[36px] flex flex-col xl:px-[14rem] xl:py-20">
        <div className="flex flex-col space-y-[36px] lg:flex-row lg:space-x-[55px] lg:items-start lg:space-y-0">
          <Contact {...contacts.siegeSocial} />
          <Contact {...contacts.adressePostale} />
          <Contact {...contacts.adresseEmail} />
        </div>
        <span className="font-helvetica font-bold text-3xl my-5 ">
          Pour Les Clubs
        </span>
        <div className="flex flex-col space-y-[36px] lg:flex-row lg:space-x-[55px] lg:items-start lg:space-y-0">
          <Contact {...contacts.Secrétariat} />
          <Contact {...contacts.phoneNumbers} />
        </div>
      </div>
    </main>
  );
};

export default contact;
