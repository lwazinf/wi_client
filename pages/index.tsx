import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Map_ from "../components/Map_";
import HUD_ from "../components/HUD_";
import Form from "../components/Filters_";
import Filters_ from "../components/Filters_";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3x0RxMZbl6LRapAhKlegw6Xmp9rupr0g"></script>
      <Head>
        <title>WhoseInn - Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-col items-center justify-start p-2 mt-[50px]">
        <div
          className={`w-full h-[400px] rounded-[8px] relative overflow-hidden`}
        >
          <Map_ />
        </div>

        <div className={`w-full rounded-[8px] fixed bottom-0 p-2`}>
          <div className={`w-full h-[200px] flex flex-col justify-center items-center`}>
            <p
              className={`w-full mt-2 text-center text-[13px] font-medium text-black/50`}
            >
              Powered by ChatGPT
            </p>
          </div>
          <Filters_ />
          <p
            className={`w-full mt-2 text-center text-[13px] font-medium text-black/50`}
          >
            Powered by ChatGPT
          </p>
        </div>
        {/*
        <HUD_/> */}
      </main>
    </div>
  );
};

export default Home;
