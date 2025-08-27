import React, { useRef } from "react";
import { Dribbble, Instagram, Linkedin } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap.ts";

const Hero = () => {
  const iamText = useRef(null);
  const authorText = useRef(null);
  const roleText = useRef(null);
  const linksListContainer = useRef(null);
  const buttonsListContainer = useRef(null);
  const experienceContainer = useRef(null);
  const avatarImg = useRef(null);
  const avatarCircleImg = useRef(null);
  const pattern = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(iamText.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
    tl.from(
      authorText.current,
      {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.7",
    );
    tl.from(
      roleText.current,
      {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.7",
    );
    tl.from(
      linksListContainer.current.querySelectorAll("button"),
      {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        rotate: "180deg",
        ease: "power2.out",
      },
      "-=0.7",
    );
    tl.from(
      buttonsListContainer.current.querySelectorAll("button"),
      {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.7",
    );
    tl.from(
      experienceContainer.current,
      {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.7",
    );
    tl.from(
      avatarImg.current,
      {
        x: 500,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=2",
    );
    tl.from(
      avatarCircleImg.current,
      {
        opacity: 0,
        duration: 1,
        scale: 0,
        ease: "expo.inOut",
      },
      "-=1.75",
    );
    tl.from(
      pattern.current,
      {
        scale: 0,
        opacity: 0,
        duration: 2,
        rotate: "180deg",
        ease: "power2.out",
      },
      "-=2.5",
    );
  });

  return (
    <section
      className={
        "container mx-auto flex flex-col items-center justify-between gap-4 p-4 md:flex-row"
      }
    >
      <div className={"relative flex flex-col gap-4"}>
        <img
          ref={pattern}
          src={"/images/pattern-orange.webp"}
          alt={"pattern-hero"}
          className={"absolute top-0 left-0 scale-50 md:scale-125"}
        />
        <p ref={iamText} className={"text-2xl"}>
          Hi I am
        </p>
        <p ref={authorText} className={"text-2xl"}>
          Mahmood Fazile
        </p>
        <p ref={roleText} className={"hero-title mb-4 text-7xl leading-24"}>
          UI/UX designer
        </p>
        <div ref={linksListContainer} className={"mb-4 flex gap-5"}>
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
        <div ref={buttonsListContainer} className={"flex gap-5"}>
          <button className={"btn btn-primary"}>Hire Me</button>
          <button className={"btn btn-outline"}>Download CV</button>
        </div>
        <div
          ref={experienceContainer}
          className={
            "bg-fade-dark flex items-center gap-7 rounded-lg p-3 text-lg font-bold md:p-6 md:text-2xl"
          }
        >
          <div className={"border-r pr-4"}>
            <p className={"text-primary!"}>5+</p>
            <p>Experiences</p>
          </div>
          <div className={"border-r pr-4"}>
            <p className={"text-primary!"}>20+</p>
            <p>Project done</p>
          </div>
          <div>
            <p className={"text-primary!"}>80+</p>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
      <div className={"relative"}>
        <div
          ref={avatarCircleImg}
          className={
            "bg-fade-dark absolute top-1/2 h-full w-full -translate-y-1/2 rounded-full"
          }
        ></div>
        <img
          ref={avatarImg}
          src="/images/hero-person.webp"
          alt={"hero-person"}
          className={"grayscale-100"}
          fetchPriority={"high"}
          decoding={"async"}
        />
      </div>
    </section>
  );
};

export default Hero;
