import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const TouchSection = (map, maps) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="max-w-7xl mx-auto bg-black my-20">
      <div className="flex flex-col lg:flex-row items-center text-white gap-4 p-20">
        <div className="w-full lg:w-[50%] ">
          <div style={{ height: "500px", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>
        <div className="w-full lg:w-[50%] ">
          <h2 className="uppercase lg:text-4xl font-bold mb-5">GET IN TOUCH</h2>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              className="border hover:border-red-600 p-4 bg-gray-900"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className="border hover:border-red-600 p-4 bg-gray-900"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Write Your Message"
              className="border hover:border-red-600 bg-gray-900 p-4"
            ></textarea>
          </div>
          <div className="my-10">
            <a className="px-5 py-4  bg-red-700  font-bold text-xl text-white hover:bg-black uppercase">
              learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouchSection;
