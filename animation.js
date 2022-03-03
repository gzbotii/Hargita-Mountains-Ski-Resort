// const { default: gsap } = require("gsap/gsap-core");
gsap.registerPlugin(ScrollTrigger);

gsap.from(".footer-col", {
  scrollTrigger: {
    trigger: ".footer",
  },
  duration: 0.7,
  ease: "slow(0.7, 0.7, false)",
  y: 70,
  delay: 0.2,
});

gsap.from("header", {
  duration: 0.4,
  ease: "back.out(1.1)",
  y: -500,
});

gsap.from(".nav-link, .weather-info, weather-icon", {
  duration: 0.4,
  ease: "back.outexpo.out",
  y: -100,
  delay: 0.4,
  stagger: 0.1,
});

gsap.from(".logo", {
  duration: 1,
  opacity: 0,
  delay: 1.5,
});
