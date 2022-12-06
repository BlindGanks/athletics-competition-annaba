import Image from "next/image";
import Hero from "../components/Hero";
import ParticipateButton from "../components/ParticipateButton";
import { db } from "../firebase";
import heroPic from "../public/heroPic.jpg";
import { doc, getDoc } from "firebase/firestore";

export default function Home({ competitionDateMillis }) {
  return (
    <main className="relative mb-12 md:mb-20">
      <ParticipateButton />
      <Hero competitionDate={new Date(competitionDateMillis)} />
      <div className="w-full pt-[280px] md:pt-[200px] lg:pt-[80px] px-[30px] lg:px-[3rem] xl:px-[14rem]">
        <div className="w-full mx-auto bg-white">
          <div className="bg-redPrimary w-full h-12 pl-4 py-3 text-white font-poppins font-bold text-base mb-5 lg:mb-10">
            Compétitions
          </div>
          <div className="w-full lg:max-w-[398px] h-72">
            <div className="relative w-full h-48">
              <Image
                alt="marathon image"
                priority
                src={heroPic}
                objectFit="cover"
                layout="fill"
                className="absolute inset-0"
              />
            </div>
            <div className="w-full h-24 border-[#BBBBBB] border-[1px] pl-3 py-2">
              <h3 className="font-helvetica font-bold text-xl">
                La Ligue D’athlétisme De La Wilaya De Annaba
              </h3>
              <span className="font-helvetica font-normal text-sm text-[#757575]">
                Dernier DELAI : 06/12/2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  let competitionDateMillis = null;
  const docRef = doc(db, "dates", "competition-date");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) competitionDateMillis = docSnap.data().date.toMillis();

  return {
    props: { competitionDateMillis },
  };
}
