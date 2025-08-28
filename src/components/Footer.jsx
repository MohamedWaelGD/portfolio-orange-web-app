import React from "react";
import { Dribbble, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className={
        "bg-fade-dark mt-20 flex flex-col items-center justify-center gap-4 p-6 text-center"
      }
    >
      <h1 className={"font-k2d logo text-3xl font-bold"}>
        <a href="#">LOGO</a>
      </h1>
      <ul
        className={
          "*:text-gray *:font-k2d hidden items-center justify-center gap-8 font-bold md:flex"
        }
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about_me">About me</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact_me">Contact me</a>
        </li>
      </ul>
      <div className={"mb-4 flex justify-center gap-5"}>
        <button
          className={"btn btn-circle btn-outline"}
          aria-label={"instagram"}
        >
          <Instagram />
        </button>
        <button
          className={"btn btn-circle btn-outline"}
          aria-label={"linkedin"}
        >
          <Linkedin />
        </button>
        <button
          className={"btn btn-circle btn-outline"}
          aria-label={"dribbble"}
        >
          <Dribbble />
        </button>
      </div>
      <div className={"bg-fade-dark h-[1px] w-2/3 md:w-[500px]"}></div>
      <p>Designed by @mahmood.fazile UI/UX designer</p>
    </footer>
  );
};

export default Footer;
