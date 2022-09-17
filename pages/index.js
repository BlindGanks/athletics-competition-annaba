import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-[#EFEFEF]">
      <Head>
        <title>Compéetition Athlétique Annaba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
