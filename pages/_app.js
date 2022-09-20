import Head from "next/head";
import { RecoilRoot } from "recoil";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Modal from "../components/Modal";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <div className="bg-[#EFEFEF] h-screen overflow-y-scroll scrollbar-hide">
        <Head>
          <title>Compéetition Athlétique Annaba</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Modal />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
