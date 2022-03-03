gsap.from("header", { duration: 0.4, ease: "back.out(1.2)", y: -500 });

gsap.from(".nav-link, .weather-info, weather-icon", {
  duration: 0.4,
  ease: "back.outexpo.out",
  y: -900,
  delay: 0.4,
  stagger: 0.1,
});

// gsap.from("#temp, #description", {
//   duration: 0.4,
//   ease: "back.outexpo.out",
//   x: +200,
//   delay: 0.8,
//   stagger: 0.1,
// });
