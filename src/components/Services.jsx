import React, { useRef } from "react";
import { UsersRound } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Services = () => {
  const headerText = useRef(null);
  const paraText = useRef(null);
  const gridContainer = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".services",
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
      gridContainer.current.children,
      {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.inOut",
      },
      "-=0.5",
    );
  });
  return (
    <section className={"services container mx-auto p-4 text-center"}>
      <h2 ref={headerText} className={"mb-2 text-4xl font-bold text-white"}>
        Services
      </h2>
      <p ref={paraText} className={"mb-16"}>
        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
        felis ligula aliquam
      </p>
      <div
        ref={gridContainer}
        className={"grid grid-cols-1 gap-10 md:grid-cols-3"}
      >
        {new Array(6).fill(0).map(() => {
          return (
            <div
              className={
                "bg-fade-dark flex flex-col items-center gap-2 rounded-lg p-9"
              }
            >
              <UsersRound width={70} height={70} className={"text-primary"} />
              <h3 className={"text-primary text-2xl font-bold"}>App Design</h3>
              <p className={"mt-4"}>
                Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit
                amet consectetur
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
