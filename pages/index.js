import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className="bg-[#EFEFEF] h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Compéetition Athlétique Annaba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal />
      <Header />
      <main className="">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
