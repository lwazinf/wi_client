import { GoogleMap, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { db, getLocations } from "../firebase";
import { useRecoilState } from "recoil";
import { SelectState } from "./atoms/atoms";

interface Map_Props {}

const Map_ = ({}: Map_Props) => {
  const [data_, setData_] = useState([]);
  const [select_, setSelect_] = useRecoilState(SelectState);
  useEffect(() => {
    const y_ = async () => {
      const x_ = await getLocations();
      // @ts-ignore
      setData_(x_);
    };
    y_();
  }, []);

  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center`}
    >
      <GoogleMap
        zoom={13}
        center={{
          // @ts-ignore
          lat: -29.12,
          // @ts-ignore
          lng: 26.23,
        }}
        mapContainerClassName={`w-full h-full opacity-80 transition-all duration-200`}
        options={{ disableDefaultUI: true }}
      >
        {data_?.map((obj) => {
          return (
            <Marker
            // @ts-ignore
              key={obj.uid}
              position={{
                // @ts-ignore
                lat: obj?.location.lat,
                // @ts-ignore
                lng: obj?.location.lng,
              }}
              onClick={() => {
                setSelect_(obj)
              }}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
};

export default Map_;
