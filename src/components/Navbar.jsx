import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap.ts";

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksContainerRef = useRef(null);
  const hireRef = useRef(null);

  useGSAP(() => {
    if (!gsap) return;
    const tl = gsap.timeline();
    tl.from(logoRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });
    tl.from(
      navLinksContainerRef.current.children,
      {
        y: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.inOut",
      },
      "-=0.5",
    );
    tl.from(
      hireRef.current,
      {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=2",
    );
  });

  return (
    <nav ref={navRef} className={"pt-6"}>
      <div
        className={"container mx-auto flex items-center justify-between p-4"}
      >
        <button className={"block md:hidden"} aria-label={"menu"}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 12.5H3"
              stroke="#959595"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 6.5H3"
              stroke="#959595"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 18.5H3"
              stroke="#959595"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <h1 ref={logoRef} className={"font-k2d logo text-3xl font-bold"}>
          <a href="#">LOGO</a>
        </h1>
        <ul
          ref={navLinksContainerRef}
          className={
            "*:text-gray *:font-k2d hidden items-center justify-center gap-8 font-bold md:flex"
          }
        >
          <li className={"text-primary!"}>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact me</a>
          </li>
        </ul>
        <button ref={hireRef} className={"btn btn-primary"}>
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
