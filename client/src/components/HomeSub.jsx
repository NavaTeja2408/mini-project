import React from "react";
import home from "../assets/home.jpg";

const HomeSub = ({ setValue }) => {
  return (
    <div className="m-0 p-0 w-full flex flex-col">
      <div className="w-full flex items-center justify-left ml-8 sm:text-3xl md:text-8xl">
        <h1>Welcome!!!</h1>
      </div>
      <div className="flex sm:flex-col md:flex-row">
        {" "}
        <div className="sm:w-full md:w-2/3 ">
          <img
            src="https://res.cloudinary.com/dojwaepbj/image/upload/v1718256711/rhnpplshwq7sg91efzft.jpg"
            alt="Home"
            className="m-0 w-full "
          />
        </div>
        <div className="sm:w-full md:w-1/3 ml-5 ">
          <h1 className="text-2xl p-2  border-b-2 border-black">Services</h1>
          <p
            className="ml-3 text-white cursor-pointer hover:underline hover:font-bold hover:text-blue-700 mt-5"
            onClick={() => setValue("2")}
          >
            Want to Apply?
          </p>
          <p
            className=" ml-3 text-white cursor-pointer hover:underline hover:font-bold hover:text-blue-700 mt-5"
            onClick={() => setValue("3")}
          >
            Track your Application?
          </p>
          <p
            className=" ml-3 text-white cursor-pointer hover:underline hover:font-bold hover:text-blue-700 mt-5"
            onClick={() => setValue("5")}
          >
            Admin?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSub;
