import Navbar from "../components/Navbar";
import Head from "next/head";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-white max-w-[100rem] mx-auto overflow-hidden">
        <Head>
          <title>Ableton - Clone</title>
        </Head>
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    </>
  )
}
