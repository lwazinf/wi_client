import { GoogleMap, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { db, getLocations } from "../firebase";
import { useRecoilState } from "recoil";
import { SelectState, LocationState } from "./atoms/atoms";

interface Map_Props {}

const Map_ = ({}: Map_Props) => {
  const [data_, setData_] = useState([]);
  const [locations_, setLocations_] = useRecoilState(LocationState);
  const [select_, setSelect_] = useRecoilState(SelectState);
  useEffect(() => {
    const y_ = async () => {
      const x_ = await getLocations();
      // @ts-ignore
      setData_(x_);
      return x_
    };
    y_().then((e) =>
      {
      setData_(e)
      console.log(data_)
    });
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
        options={{
          disableDefaultUI: true,
          styles: [
            {
              elementType: 'geometry',
              stylers: [
                {
                  color: '#242f3e',
                },
              ],
            },
            {
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#746855',
                },
              ],
            },
            {
              elementType: 'labels.text.stroke',
              stylers: [
                {
                  color: '#242f3e',
                },
              ],
            },
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#d59563',
                },
              ],
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#d59563',
                },
              ],
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#263c3f',
                },
              ],
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#6b9a76',
                },
              ],
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#38414e',
                },
              ],
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [
                {
                  color: '#212a37',
                },
              ],
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#9ca5b3',
                },
              ],
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [
                {
                  color: '#746855',
                },
              ],
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [
                {
                  color: '#1f2835',
                },
              ],
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [
                {
                  color: '#f3d19c',
                },
              ],
            }
          ]
        }}
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
                setSelect_(obj);
              }}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
};

export default Map_;
