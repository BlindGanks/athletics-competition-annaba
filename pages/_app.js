import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Modal from "../components/Modal";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <div className="bg-[#EFEFEF] h-screen overflow-y-scroll scrollbar-hide">
        <Head>
          <title>Compéetition Athlétique Annaba</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ToastContainer
          autoClose={false}
          position="bottom-right"
          theme="dark"
        />
        <Modal />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
