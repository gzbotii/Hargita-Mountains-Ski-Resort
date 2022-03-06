gsap.registerPlugin(ScrollTrigger);

function animation() {
  gsap.from("h3, .carousel-item p", {
    scrollTrigger: {
      trigger: "h3",
      start: "top 85%",
    },
    duration: 0.7,
    ease: "slow(0.7, 0.7, false)",
    y: 100,
    opacity: 0.4,
  });

  gsap.from(".arrow-prev", {
    scrollTrigger: {
      trigger: ".arrow",
    },
    duration: 0.7,
    ease: "elastic.out(1.5, 0.3)",
    x: 20,
    delay: 1,
  });

  gsap.from(".arrow-next", {
    scrollTrigger: {
      trigger: ".arrow",
    },
    duration: 0.7,
    ease: "elastic.out(1.5, 0.3)",
    x: -20,
    delay: 1,
  });

  gsap.from(".footer-col", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%",
    },
    duration: 1,
    ease: "slow(0.7, 0.7, false)",
    y: 120,
    opacity: 0.4,
  });

  gsap.from(".pattern_2 h1", {
    scrollTrigger: {
      trigger: ".pattern_2_image",
      start: "top 75%",
    },
    duration: 0.7,
    ease: "slow(0.7, 0.7, false)",
    y: 150,
    opacity: 0.3,
  });

  gsap.from(".pattern_1 h1", {
    scrollTrigger: {
      trigger: ".service_content",
      start: "top 75%",
    },
    duration: 0.7,
    ease: "slow(0.7, 0.7, false)",
    y: 150,
    opacity: 0.3,
  });

  gsap.from(".app-title, .app-contact", {
    scrollTrigger: {
      trigger: ".screen",
      start: "top 85%",
    },
    duration: 1.5,
    // ease: "slow(0.7, 0.7, false)",
    // x: -150,
    opacity: 0.2,
    stagger: 0.1,
  });

  // gsap.from(".app-contact", {
  //   scrollTrigger: {
  //     trigger: ".screen",
  //     start: "top 85%",
  //   },
  //   duration: 0.5,
  //   ease: "slow(0.7, 0.7, false)",
  //   y: 150,
  //   opacity: 0.3,
  // });

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

window.onload = animation();
