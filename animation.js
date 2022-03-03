function animation() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".footer-col", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 75%",
    },
    duration: 0.6,
    ease: "slow(0.7, 0.7, false)",
    y: 70,
    //   delay: 0.3,
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
    delay: 1.2,
  });

  gsap.from("h1, .button", {
    duration: 1,
    ease: "Power3.easeIn",
    x: -730,
    delay: 1.8,
    stagger: 0.5,
  });

  gsap.from("h3, .carousel-item p", {
    scrollTrigger: {
      trigger: "h3",
      start: "top 85%",
    },
    duration: 0.7,
    ease: "slow(0.7, 0.7, false)",
    y: 100,
  });

  gsap.from(".arrow-prev", {
    scrollTrigger: {
      trigger: "p.arrow",
    },
    duration: 0.7,
    ease: "elastic.out(1.5, 0.3)",
    x: 20,
    delay: 1,
  });

  gsap.from(".arrow-next", {
    scrollTrigger: {
      trigger: "arrow",
    },
    duration: 0.7,
    ease: "elastic.out(1.5, 0.3)",
    x: -20,
    delay: 1,
  });
}

window.onload = animation();
