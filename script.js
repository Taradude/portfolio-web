const topTl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

const h1 = new SplitType("h1");
const h2 = new SplitType("h2");
gsap.set("h1", { autoAlpha: "1" });
gsap.set(".top h2", { autoAlpha: "1" });

topTl
  .from(".char", {
    y: 50,
    opacity: 0,
    skewX: 40,
    stagger: 0.04,
    duration: 1,
  })
  .to(
    "#myPhoto",
    {
      scale: 1.15,
      duration: 2,
    },
    "-.2"
  )
  .to("#myPhoto", {
    scale: 1,
    duration: 1.5,
  })
  .from(
    [".left h3", ".left ul ", ".left li "],

    { duration: 2, scale: 0, skewX: 30 },
    "-.2"
  );

const Scrolltl = gsap.timeline({
  scrollTrigger: {
    trigger: ".middle",
    start: "top 20%",
    end: "bottom+=20% center",
    toggleActions: "play reverse play reverse",
  },
});

Scrolltl.from([".mask h2", ".mask h3", ".card p", ".card ul", ".card li"], {
  yPercent: 140,
  stagger: 0.04,
});

const bottomTl = gsap.timeline(
  {
    defaults: {
      ease: "power2.out",
      duration: 0.5,
    },
    scrollTrigger: {
      trigger: "section.bottom",
      start: "top 20%",
      end: "bottom",
      toggleActions: "play reverse play reverse",
    },
  },
  "<"
);

bottomTl
  .from("section.bottom", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
  })
  .from("section.bottom img", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
  })
  .from("section.bottom p", {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
  });
