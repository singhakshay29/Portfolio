import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const headerSocial = () => {
  return (
    <div className="header__Socials">
      <a href="https://www.linkedin.com/in/akshaysingh29/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/singhakshay29">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/_a.k.s.h.a.y.s.i.n.g.h_/">
        <BsInstagram />
      </a>
    </div>
  );
};

export default headerSocial;
