import React from "react";
import { Link } from "react-router-dom";
import imgLaptop from "../../../assets/images/minionsLaptop.gif";
import imgPhone from "../../../assets/images/minionsPhone.gif";
import "./Blog.css";

const Blog = () => {
  const isMobile = () => {
    return /Mobi|Android/i.test(window.navigator.userAgent);
  };

  return (
    <div className="blog">
      <img src={isMobile() ? imgPhone : imgLaptop} alt="Minions" />
      <Link to="/">Home</Link>
      <div>UNDER CONSTRUCTION</div>
    </div>
  );
};

export default Blog;
