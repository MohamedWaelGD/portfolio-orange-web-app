let gsap;
let ScrollTrigger;

if (typeof window !== "undefined") {
  import("gsap").then((mod) => {
    gsap = mod.gsap || mod.default;
    import("gsap/ScrollTrigger").then((st) => {
      ScrollTrigger = st.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
    });
  });
}

export { gsap, ScrollTrigger };
