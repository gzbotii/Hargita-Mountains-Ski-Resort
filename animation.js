gsap.registerPlugin(ScrollTrigger);

function animation() {
  gsap.from("h3, .carousel-item p", {
    scrollTrigger: {
      trigger: "h3",
      start: "top 85%",
    },
    duration: 0.7,
    ease: "slow(0.7, 0.7, false)",
    y: 140,
    opacity: 0.4,
  });

  gsap.from(".arrow-prev", {
    scrollTrigger: {
      trigger: ".arrow",
    },
    duration: 0.7,
    ease: "elastic.out(2, 0.3)",
    x: 30,
    delay: 1,
  });

  gsap.from(".arrow-next", {
    scrollTrigger: {
      trigger: ".arrow",
    },
    duration: 0.7,
    ease: "elastic.out(2, 0.3)",
    x: -30,
    delay: 1,
  });

  gsap.from(".footer-col", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 90%",
    },
    duration: 1.3,
    ease: "slow(0.7, 0.7, false)",
    y: 90,
    opacity: 0.4,
  });

  gsap.from(".pattern_2 h1", {
    scrollTrigger: {
      trigger: ".pattern_2_image",
      start: "top 65%",
    },
    duration: 0.8,
    ease: "slow(0.7, 0.7, false)",
    y: 110,
    opacity: 0.1,
  });

  gsap.from(".pattern_1 h1", {
    scrollTrigger: {
      trigger: ".service_content",
      start: "top 65%",
    },
    duration: 0.8,
    ease: "slow(0.7, 0.7, false)",
    y: 110,
    opacity: 0.1,
  });

  gsap.from(".app-contact, .app-title", {
    scrollTrigger: {
      trigger: ".screen",
      start: "top 85%",
    },
    duration: 0.5,
    ease: "slow(0.7, 0.7, false)",
    y: 150,
    opacity: 0.3,
    stagger: 0.1,
  });

  gsap.from(".screen-body-item", {
    scrollTrigger: {
      trigger: ".screen",
      start: "top 85%",
    },
    duration: 0.7,
    opacity: 0.2,
  });

  const timeline = gsap.timeline({ defaults: { duration: 0.4 } });

  timeline
    .from("header", {
      ease: "back.out(1.1)",
      yPercent: -100,
    })

    .from(".nav-link, .weather-info, weather-icon", {
      ease: "back.outexpo.out",
      y: -100,
      stagger: 0.1,
    })

    // .from(".logo", {
    //   duration: 0.5,
    //   opacity: 0,
    // })

    .from(".button--main, .button-outline, h1.title", {
      duration: 1,
      ease: "Power3.easeIn",
      xPercent: -300,
      stagger: 0.5,
    });
}

// window.onload = animation();

window.onload = () => {
  animation();
};
