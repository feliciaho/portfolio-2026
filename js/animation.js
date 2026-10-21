gsap.registerPlugin(ScrollTrigger);

gsap.set(".secTitle", { scale: 1 });
gsap.set(".project_s1", { yPercent: 0});
gsap.set(".secTextUiux", { yPercent: -5 });
const animatedBanners = gsap.utils
  .toArray(".banner, .bannerVisual")
  .filter((banner) => !banner.closest("#s2"));
gsap.set(animatedBanners, { yPercent: 10 });


// 一開始就動
gsap.to(".mainTitle1", {
  xPercent: 200,
  scale: 5,
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    scrub: 1,
  },
});

// 當滾動到特定區域時，觸發動畫
document.querySelectorAll(".secTitle").forEach((secTitle) => {
  gsap.to(secTitle, {
    yPercent: 5,
    scale: 1.2,
    ease: "none",
    scrollTrigger: {
      trigger: secTitle,
      scrub: 1,
    },
  });
});

document.querySelectorAll(".project_s1").forEach((project_s1) => {
  gsap.to(project_s1, {
    yPercent: 10,
    ease: "none",
    scale: 1,
    scrollTrigger: {
      trigger: project_s1,
      scrub: 1,
    },
  });
});

animatedBanners.forEach((banner) => {
  gsap.to(banner, {
    yPercent: -10,
    ease: "none",
    scale: 1,
    scrollTrigger: {
      trigger: banner,
      scrub: 1,
    },
  });
});

gsap.utils.toArray("#s2 .bannerImageFrame:first-child").forEach((frame) => {
  const image = frame.querySelector("img");
  gsap.fromTo(
    image,
    { scale: 1.4, transformOrigin: "center center" },
    {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: frame,
        start: "top 80%",
        end: "top 25%",
        scrub: 1.2,
      },
    }
  );
});

gsap.utils.toArray("#s9 .mySwiper2").forEach((swiperElement) => {
  const getVisibleImages = () => {
    const swiperBounds = swiperElement.getBoundingClientRect();
    return gsap.utils
      .toArray(swiperElement.querySelectorAll(".swiper-slide"))
      .filter((slide) => {
        const slideBounds = slide.getBoundingClientRect();
        return slideBounds.right > swiperBounds.left && slideBounds.left < swiperBounds.right;
      })
      .map((slide) => slide.querySelector("img"))
      .filter(Boolean);
  };

  gsap.set(getVisibleImages(), { autoAlpha: 0 });

  let hasPlayed = false;
  ScrollTrigger.create({
    trigger: swiperElement,
    start: "top 80%",
    onEnter: () => {
      if (hasPlayed) return;
      hasPlayed = true;

      gsap.fromTo(
        getVisibleImages(),
        { autoAlpha: 0, x: -36 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.75,
          stagger: 0.25,
          ease: "power2.out",
          clearProps: "transform,opacity,visibility",
        }
      );
    },
  });
});

document.querySelectorAll(".secTextUiux").forEach((secTextUiux) => {
  gsap.to(secTextUiux, {
    yPercent: 25,
    ease: "none",
    scale: 1,
    scrollTrigger: {
      trigger: secTextUiux,
      scrub: 1,
    },
  });
});
