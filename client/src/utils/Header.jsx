import React from "react";
import headerLogo from "../assets/headerLogo.jpg";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-18 md:h-32 bg-grayTop flex items-center">
      <img
        src={headerLogo}
        className="h-16 md:h-28 m-3 pr-7 md:max-w-lg mix-blend-darken"
        alt="header"
      />
    </div>
  );
};

export default Header;
