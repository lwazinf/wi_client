import { useRecoilState } from "recoil";
import { LocState, SelectState } from "./atoms/atoms";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faLocationCrosshairs,
  faPhone,
  faShare,
  faShareAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

interface HUD_Props {}

const HUD_ = ({}: HUD_Props) => {
  const [select_, setSelect_] = useRecoilState(SelectState);
  const generateGoogleMapsLink = (address: any) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}&travelmode=driving`;
  };
  const [currentLink_, setCurrentLink_] = useState("");
  useEffect(() => {
    if (Object.keys(select_).length > 0) {
      // @ts-ignore
      setCurrentLink_(generateGoogleMapsLink(select_?.location.address));
    }
  }, [select_]);
  return (
    <>
      <BG_ />
      <div className={`px-3 w-full min-h-2 fixed top-3`}>
        <FG_ />
      </div>
      <div
        className={`mr-2 w-[120px] h-[120px] fixed bottom-3 right-2 grid grid-cols-2 gap-4 justify-center items-center transition-all duration-200 ${
          Object.keys(select_).length > 0 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <a href={currentLink_} className={`w-full h-full`} target="_blank" rel="noopener noreferrer">
        <div
          className={`w-full h-full bg-white cursor-pointer backdrop-blur-lg rounded-md flex flex-col justify-center items-center`}
        >
          <FontAwesomeIcon
            icon={faLocationCrosshairs}
            className={`h-[30px] w-[30px] text-black/50 transition-all duration-[2000ms]`}
          />
        </div>
        </a>
        {/* @ts-ignore */}
        <a href={`tel:${select_?.tel}`} className={`w-full h-full`} target="_blank" rel="noopener noreferrer">
        <div
          className={`w-full h-full bg-green-500/20 cursor-pointer backdrop-blur-lg rounded-md flex flex-col justify-center items-center`}
        >
          <FontAwesomeIcon
            icon={faPhone}
            className={`h-[25px] w-[25px] text-black/50 transition-all duration-[2000ms]`}
          />
        </div>
        </a>
        <a href={'https://www.twitter.com/LwaziNF'} className={`w-full h-full`} target="_blank" rel="noopener noreferrer">
        <div
          className={`w-[200px] h-full relative right-[150px] bg-blue-500/20 backdrop-blur-lg cursor-pointer rounded-md flex flex-col justify-center items-center`}
        >
          <p className={`text-[15px] font-black text-black/80`}>
            Contact Developer
          </p>
        </div>
        </a>
        <div
          className={`w-full h-full bg-white cursor-pointer bg-red-500/20 backdrop-blur-lg rounded-md flex flex-col justify-center items-center`}
          onClick={() => {
            setSelect_({});
          }}
        >
          <FontAwesomeIcon
            icon={faTimes}
            className={`h-[30px] w-[30px] text-black/50 transition-all duration-[2000ms]`}
          />
        </div>
      </div>
      {/* <div className={`w-full h-[100px] flex flex-row justify-end items-center absolute bottom-0 transition-all duration-200 ${
        Object.keys(select_).length > 0 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
      <div className={`mr-2 w-[200px] h-[200px] bg-white/60 backdrop-blur-lg rounded-md shadow-sm`}>

      </div>
    </div> */}
    </>
  );
};

export default HUD_;

interface BG_Props {}

const BG_ = ({}: BG_Props) => {
  const [data_, setData_] = useRecoilState(LocState);
  const [select_, setSelect_] = useRecoilState(SelectState);
  return (
    <div
      className={`w-full h-full backdrop-blur-sm bg-white/10 fixed bottom-0 flex flex-col justify-center items-end transition-all duration-200 ${
        Object.keys(select_).length > 0
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={() => {
        setSelect_({});
      }}
    ></div>
  );
};

interface FG_Props {}

const FG_ = ({}: FG_Props) => {
  const [select_, setSelect_] = useRecoilState(SelectState);
  return (
    <div
      className={`w-full min-h-[100px] bg-white rounded-[8px] shadow-md flex flex-col justify-center items-center p-2 relative transition-all duration-200 ${
        Object.keys(select_).length > 0
          ? "opacity-100 top-[0px]"
          : "opacity-0 top-[-150px]"
      }`}
    >
      
        <p className={`text-[13px] font-bold text-black/50 text-center`}>
          {/* @ts-ignore */}
          {Object.keys(select_).length > 0 ? select_?.location.address : ""}
        </p>
    
      <p className={`text-[15px] font-black text-black/80 text-center mt-3`}>
        Distance to UOFS: {/* @ts-ignore */}
        {Object.keys(select_).length > 0 ? select_?.location.distance : ""}km
      </p>
    </div>
  );
};
