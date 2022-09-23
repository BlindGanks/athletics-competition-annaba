import Image from "next/image";
import Link from "next/link";
import { Error404Icon } from "../components/icons";
import bloblPic from "../public/blob.png";
const Custom404 = () => {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="relative px-[30px] w-full flex items-center justify-center">
        <div className="absolute h-[33rem] w-full md:max-w-[34.5rem] lg:h-[42.5rem] lg:max-w-[44.5rem] ">
          <Image alt="blob" src={bloblPic} layout="fill" objectFit="cover" />
        </div>
        <div className="h-80 w-full bg-white z-10 rounded-[26px] flex flex-col justify-between py-5 px-6 md:max-w-[327px] lg:py-16 lg:px-10 lg:max-w-[526px] lg:h-[476px]">
          <div className="flex flex-col items-center">
            <div className="h-[90px] w-[101px] lg:h-[111px] lg:w-[124px]">
              <Error404Icon />
            </div>
            <h1 className="font-poppins text-lg font-semibold lg:text-3xl mt-7 mb-2 lg:mb-6">
              Page Non Trouvée
            </h1>
            <span className="font-poppins text-xs font-semibold text-center lg:text-base">
              Le Lien Que Vous Avez Cliqué Peut Être Brisé Ou La Page Peut Avoir
              Été Supprimé
            </span>
          </div>
          <button className="h-11 w-36 bg-redPrimary font-poppins text-lg text-white font-semibold py-2 text-center rounded-[25px] lg:h-[50px] lg:w-[216px] self-center">
            <Link href="/">Accueil</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Custom404;
