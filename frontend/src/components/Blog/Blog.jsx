import React from "react";
import imgLaptop from "../../../assets/images/minionsLaptop.gif";
import imgPhone from "../../../assets/images/minionsPhone.gif";

const Blog = () => {
  const isMobile = () => {
    return /Mobi|Android/i.test(window.navigator.userAgent);
  };

  return (
    <div>
      <img src={isMobile() ? imgPhone : imgLaptop} alt="Minions" />
    </div>
  );
};

export default Blog;
