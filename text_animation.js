let links = gsap.utils.toArray(".left li a");

links.forEach((link) => {
  let linkTl = gsap.timeline({
    defaults: { ease: "power4.inOut", duration: 0.6 },
  });
  const headingStart = link.querySelector(".primary");
  const headingEnd = link.querySelector(".secondary");
  const date = link.querySelector(".date");
  const line = link.querySelector(".line");

  linkTl
    .to(headingStart, {
      yPercent: -100,
    })
    .to(
      headingEnd,
      {
        yPercent: -100,
      },
      "<"
    )
    .to(
      line,
      {
        scaleX: 1,
      },
      "<"
    )
    .to(
      date,
      {
        x: 0,
      },
      "<"
    );
  linkTl.pause();

  link.addEventListener("mouseenter", () => {
    linkTl.play();
  });

  link.addEventListener("mouseleave", () => {
    linkTl.reverse();
  });
});
