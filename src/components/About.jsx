import React, { useRef } from "react";
import { DownloadIcon, Figma } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircularProgress from "./CircularProgress.jsx";

const skills = [
  {
    name: "Figma",
    percentage: 100,
    icon: (
      <Figma
        width={50}
        height={50}
        className="text-gray absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    ),
  },
  {
    name: "Adobe XD",
    percentage: 100,
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="text-gray absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.7114 14.9692L22.7423 35.0309M12.7114 35.0309L22.7423 14.9692M47.8194 12.4615V37.5386C47.8194 40.199 46.7626 42.7504 44.8815 44.6315C43.0003 46.5127 40.4489 47.5695 37.7886 47.5695H12.7114C10.0511 47.5695 7.49967 46.5127 5.61851 44.6315C3.73736 42.7504 2.68054 40.199 2.68054 37.5386V12.4615C2.68054 9.80112 3.73736 7.24973 5.61851 5.36857C7.49967 3.48742 10.0511 2.4306 12.7114 2.4306H37.7886C40.4489 2.4306 43.0003 3.48742 44.8815 5.36857C46.7626 7.24973 47.8194 9.80112 47.8194 12.4615Z"
          stroke="#959595"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M37.7886 25.0001V33.5263C37.7886 33.7239 37.7496 33.9195 37.674 34.1021C37.5984 34.2846 37.4876 34.4505 37.3479 34.5902C37.2081 34.7299 37.0423 34.8408 36.8597 34.9164C36.6772 34.992 36.4815 35.0309 36.2839 35.0309H32.7731C31.4429 35.0309 30.1673 34.5025 29.2267 33.5619C28.2861 32.6214 27.7577 31.3457 27.7577 30.0155C27.7577 28.6853 28.2861 27.4096 29.2267 26.469C30.1673 25.5285 31.4429 25.0001 32.7731 25.0001H37.7886ZM37.7886 25.0001V17.4769"
          stroke="#959595"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Adobe Photoshop",
    percentage: 85,
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 51 50"
        className="text-gray absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.0695 12.4615V37.5386C48.0695 40.199 47.0127 42.7504 45.1316 44.6315C43.2504 46.5127 40.699 47.5695 38.0387 47.5695H12.9615C10.3011 47.5695 7.74976 46.5127 5.86861 44.6315C3.98745 42.7504 2.93063 40.199 2.93063 37.5386V12.4615C2.93063 9.80112 3.98745 7.24973 5.86861 5.36857C7.74976 3.48742 10.3011 2.4306 12.9615 2.4306H38.0387C40.699 2.4306 43.2504 3.48742 45.1316 5.36857C47.0127 7.24973 48.0695 9.80112 48.0695 12.4615Z"
          stroke="#959595"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.9615 35.0309V25M12.9615 25V14.9692H17.9769C19.3071 14.9692 20.5828 15.4976 21.5234 16.4382C22.4639 17.3787 22.9924 18.6544 22.9924 19.9846C22.9924 21.3148 22.4639 22.5905 21.5234 23.5311C20.5828 24.4716 19.3071 25 17.9769 25H12.9615ZM38.0387 22.4923C37.2713 20.9551 35.699 19.9846 33.9812 19.9846H33.0232C32.0256 19.9846 31.0688 20.3809 30.3634 21.0864C29.658 21.7918 29.2616 22.7486 29.2616 23.7462C29.2616 24.7438 29.658 25.7006 30.3634 26.406C31.0688 27.1115 32.0256 27.5078 33.0232 27.5078H34.2771C35.2747 27.5078 36.2315 27.9041 36.9369 28.6095C37.6423 29.3149 38.0387 30.2717 38.0387 31.2693C38.0387 32.267 37.6423 33.2237 36.9369 33.9292C36.2315 34.6346 35.2747 35.0309 34.2771 35.0309H33.3191C32.4767 35.0309 31.6508 34.7963 30.9342 34.3534C30.2176 33.9105 29.6384 33.2767 29.2616 32.5232"
          stroke="#959595"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Adobe Illustrator",
    percentage: 60,
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="text-gray absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.7809 25V35.0309M34.7809 17.4769V17.502M47.3195 12.4615V37.5386C47.3195 40.199 46.2627 42.7504 44.3815 44.6315C42.5004 46.5127 39.949 47.5695 37.2886 47.5695H12.2115C9.55112 47.5695 6.99973 46.5127 5.11857 44.6315C3.23742 42.7504 2.1806 40.199 2.1806 37.5386V12.4615C2.1806 9.80112 3.23742 7.24973 5.11857 5.36857C6.99973 3.48742 9.55112 2.4306 12.2115 2.4306H37.2886C39.949 2.4306 42.5004 3.48742 44.3815 5.36857C46.2627 7.24973 47.3195 9.80112 47.3195 12.4615Z"
          stroke="#959595"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.2115 35.0309L15.0326 27.5078M15.0326 27.5078L19.7346 14.9692L24.4366 27.5078M15.0326 27.5078H24.4366M27.2578 35.0309L24.4366 27.5078"
          stroke="#959595"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Adobe Premiere",
    percentage: 70,
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        className="text-gray absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.7612 4.91678C20.1636 3.98544 28.643 3.98544 37.0454 4.91678C38.6493 5.09431 40.1467 5.80739 41.2954 6.94082C42.4442 8.07426 43.1773 9.56186 43.3763 11.1633C44.3718 19.6749 44.3718 28.2735 43.3763 36.7851C43.1773 38.3865 42.4442 39.8741 41.2954 41.0076C40.1467 42.141 38.6493 42.8541 37.0454 43.0316C28.6431 43.963 20.1636 43.963 11.7612 43.0316C10.1573 42.8541 8.65995 42.141 7.5112 41.0076C6.36245 39.8741 5.62934 38.3865 5.43029 36.7851C4.43484 28.2735 4.43484 19.6749 5.43029 11.1633C5.62934 9.56186 6.36245 8.07426 7.5112 6.94082C8.65995 5.80739 10.1573 5.09431 11.7612 4.91678ZM37.4575 1.21751C28.7813 0.255692 20.0253 0.255692 11.3491 1.21751C6.35387 1.77364 2.31943 5.70877 1.73351 10.7288C0.704146 19.5291 0.704146 28.4193 1.73351 37.2196C2.31943 42.2396 6.35138 46.1748 11.3491 46.7334C20.0254 47.6942 28.7812 47.6942 37.4575 46.7334C42.4527 46.1748 46.4872 42.2396 47.0731 37.2196C48.1024 28.4193 48.1024 19.5291 47.0731 10.7288C46.4872 5.70877 42.4552 1.77364 37.4575 1.21503M17.8861 32.6637H14.5543V14.5026C15.756 14.2841 17.4219 14.1203 19.6886 14.1203C22.1465 14.1203 23.949 14.6391 25.1233 15.6223C26.2157 16.5235 26.9258 17.971 26.9258 19.6915C26.9258 21.4393 26.3796 22.8868 25.3418 23.8699C24.0011 25.2081 21.9007 25.8362 19.5247 25.8362C18.8966 25.8362 18.3231 25.8089 17.8861 25.727V32.6637ZM19.8227 16.6874C18.8966 16.6874 18.2412 16.7693 17.8861 16.8512V23.0779C18.2958 23.1872 18.842 23.2145 19.5247 23.2145C22.0373 23.2145 23.5666 21.9855 23.5666 19.828C23.5666 17.7798 22.1465 16.6874 19.8252 16.6874M31.6206 32.6637H28.2615V23.6514C28.2615 21.849 28.2366 20.5654 28.1522 19.3638H31.0744L31.1836 21.9036H31.2929C31.9483 20.0192 33.505 19.0634 34.9251 19.0634C35.2528 19.0634 35.4465 19.0907 35.7196 19.1453V22.3133C35.3958 22.242 35.0654 22.2053 34.7339 22.204C33.1226 22.204 32.0302 23.2418 31.7298 24.7438C31.6621 25.0858 31.6256 25.4331 31.6206 25.7816V32.6637Z"
          fill="#959595"
        />
      </svg>
    ),
  },
];

const About = () => {
  const headerText = useRef(null);
  const paraText = useRef(null);
  const avatarImg = useRef(null);
  const avatarCircleImg = useRef(null);
  const paraBigText = useRef(null);
  const buttonRef = useRef(null);
  const skillsContainer = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-me",
        start: "top 60%",
        // scrub: true
      },
    });
    tl.from(headerText.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });
    tl.from(
      paraText.current,
      {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=0.5",
    );
    tl.from(
      paraBigText.current,
      {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=0.5",
    );
    tl.from(
      buttonRef.current,
      {
        y: 200,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=0.75",
    );
    tl.from(
      avatarImg.current,
      {
        x: -500,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=0.75",
    );
    tl.from(
      avatarCircleImg.current,
      {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=0.75",
    );
    tl.from(skillsContainer.current.children, {
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.inOut",
    });
  });
  return (
    <section className={"about-me container mx-auto p-4 text-center"}>
      <h2 ref={headerText} className={"mb-2 text-4xl font-bold text-white"}>
        About Me
      </h2>
      <p ref={paraText} className={"mb-16"}>
        User Interface and User Experience and Also video editing
      </p>
      <div className={"grid grid-cols-1 gap-4 md:grid-cols-2"}>
        <div className={"relative flex items-center justify-center"}>
          <div
            ref={avatarCircleImg}
            className={
              "bg-fade-dark rounded-b-1xl absolute top-1/2 h-full w-2/3 -translate-y-1/2 rounded-t-full"
            }
          ></div>
          <img
            ref={avatarImg}
            src="/images/hero-person.webp"
            alt={"hero-person"}
            className={"grayscale-100"}
          />
        </div>
        <div className={"flex flex-col justify-center gap-4"}>
          <p
            ref={paraBigText}
            className={"text-start text-lg leading-10 text-balance"}
          >
            A software engineer, the modern-day architect of digital realms,
            navigates the ethereal landscapes of code, sculpting intangible
            structures that shape our technological world. With fingers poised
            over keyboards like virtuoso pianists, they compose symphonies of
            logic, their minds a labyrinth of algorithms and solutions.Their
            canvas is a screen, a vast expanse where lines of code dance in
            intricate patterns, weaving the fabric of programs and applications.
            Each keystroke is a brushstroke, crafting intricate architectures
            and breathing life into innovative designs.In this digital atelier,
            they don the mantle of problem solvers, confronting bugs and
            glitches like valiant knights in an ever-evolving quest for
            perfection. Debugging becomes a noble pursuit, unraveling the
            mysteries hidden within the tangled webs of code. designs.In this
            digital atelier.
          </p>
          <div className={"flex"}>
            <button
              ref={buttonRef}
              className={"btn btn-primary flex items-center gap-2"}
            >
              <DownloadIcon /> Download CV
            </button>
          </div>
        </div>
      </div>
      <div
        ref={skillsContainer}
        className={"mt-16 flex flex-wrap justify-center gap-30 text-xl"}
      >
        {skills.map((skill, i) => (
          <div key={i} className="text-center">
            <div className="relative mb-2 flex justify-center">
              <CircularProgress
                percentage={skill.percentage}
                size={100}
                strokeWidth={8}
              />
              {skill.icon}
            </div>
            <p className="text-primary! font-bold">{skill.percentage}%</p>
            <p className="font-bold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
