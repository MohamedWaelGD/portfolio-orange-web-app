import React, { useRef } from "react";
import { ArrowDown, ChevronDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap.js";

const ContactMe = () => {
  const headerText = useRef(null);
  const paraText = useRef(null);
  const formContainer = useRef(null);

  useGSAP(() => {
    if (!gsap) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-me",
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
    tl.from(paraText.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });
    tl.from(
      formContainer.current.children,
      {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.5",
    );
  });

  return (
    <section
      id={"contact_me"}
      className={"contact-me container mx-auto p-4 text-center"}
    >
      <h2 ref={headerText} className={"mb-2 text-4xl font-bold text-white"}>
        Contact me
      </h2>
      <p ref={paraText} className={"mb-16"}>
        Cultivating Connections: Reach Out and Connect with Me{" "}
      </p>
      <form className={"mx-auto md:w-5/6"}>
        <fieldset
          ref={formContainer}
          className={"grid grid-cols-1 gap-4 md:grid-cols-2"}
        >
          <div>
            <input
              className={"input-form"}
              name={"name"}
              placeholder={"Name"}
            />
          </div>
          <div>
            <input
              className={"input-form"}
              name={"email"}
              type={"email"}
              placeholder={"Email"}
            />
          </div>
          <div>
            <input
              className={"input-form"}
              name={"phone_number"}
              placeholder={"Phone Number"}
            />
          </div>
          <div className={"relative"}>
            <select
              defaultValue={null}
              className={"input-form"}
              name={"service"}
            >
              <option value={null}>Service of Interest</option>
              <option value={"web"}>Web design</option>
              <option value={"desktop"}>Desktop design</option>
              <option value={"mobile"}>Mobile design</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <ChevronDown />
            </span>
          </div>
          <div>
            <input
              className={"input-form"}
              name={"timeline"}
              placeholder={"Timeline"}
            />
          </div>
          <div>
            <textarea
              className={"input-form"}
              name={"details"}
              placeholder={"Project Details..."}
            ></textarea>
          </div>
          <div className={"flex justify-end md:col-span-2"}>
            <button className={"btn btn-outline"}>Send</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default ContactMe;
