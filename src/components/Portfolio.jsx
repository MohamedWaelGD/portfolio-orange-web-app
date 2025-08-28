import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap.js";

const portfolioList = [
  {
    id: 1,
    title: "App Design",
    image: "/images/portfolio-1.webp",
    category: "App Category",
  },
  {
    id: 2,
    title: "App Design",
    image: "/images/portfolio-2.webp",
    category: "App Category",
  },
  {
    id: 3,
    title: "App Design",
    image: "/images/portfolio-3.webp",
    category: "App Category",
  },
  {
    id: 4,
    title: "App Design",
    image: "/images/portfolio-1.webp",
    category: "App Category",
  },
  {
    id: 5,
    title: "App Design",
    image: "/images/portfolio-2.webp",
    category: "App Category",
  },
  {
    id: 6,
    title: "App Design",
    image: "/images/portfolio-3.webp",
    category: "App Category",
  },
  {
    id: 7,
    title: "App Design",
    image: "/images/portfolio-1.webp",
    category: "App Category",
  },
  {
    id: 8,
    title: "App Design",
    image: "/images/portfolio-2.webp",
    category: "App Category",
  },
  {
    id: 9,
    title: "App Design",
    image: "/images/portfolio-3.webp",
    category: "App Category",
  },
];

const Portfolio = () => {
  const headerText = useRef(null);
  const btnContainer = useRef(null);
  const portfolioContainer = useRef(null);

  useGSAP(() => {
    if (!gsap) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio",
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
      btnContainer.current.children,
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
      portfolioContainer.current.children,
      {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.inOut",
      },
      "-=0.5",
    );
  });
  return (
    <section
      id={"portfolio"}
      className={"portfolio container mx-auto p-4 text-center"}
    >
      <h2 ref={headerText} className={"mb-2 text-4xl font-bold text-white"}>
        Portfolio
      </h2>
      <div
        ref={btnContainer}
        className={"mb-8 flex flex-wrap items-center justify-center gap-4"}
      >
        <button className={"btn btn-primary"}>All</button>
        <button className={"btn btn-gray"}>Website Design</button>
        <button className={"btn btn-gray"}>App Mobile Design</button>
        <button className={"btn btn-gray"}>App Desktop</button>
        <button className={"btn btn-gray"}>Braiding</button>
      </div>
      <div
        ref={portfolioContainer}
        className={"grid grid-cols-1 gap-10 md:grid-cols-3"}
      >
        {portfolioList.map((item) => (
          <div
            key={item.id}
            className={
              "bg-fade-dark flex flex-col gap-2 rounded-4xl rounded-b-2xl"
            }
          >
            <img
              src={item.image}
              alt={item.title}
              className={"h-[415px] w-full rounded-t-4xl"}
            />
            <div className={"flex items-center justify-between p-4 font-bold"}>
              <p className={"text-white!"}>{item.title}</p>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
