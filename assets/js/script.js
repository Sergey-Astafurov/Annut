 gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  let smoother = ScrollSmoother.create({
    wrapper: '.wrapperAntut',
    content: '.contentAntut',
    smooth: 1.2,
    effects: true
  })

  if (document.querySelector('.begin__block')) {


    ScrollTrigger.create({
      trigger: ".begin__block",
      start: "top top",
      end: () => "+=" + document.querySelector(".begin__slider-right").offsetHeight,
      pin: true,
      scrub: true
    });

    const rightBlocks = gsap.utils.toArray(".begin__top-slider-right");
    const rightBlock = document.querySelector(".begin__slider-right");
    const numberEl = document.querySelector(".numberBegin");
    let tl = gsap.timeline();
    tl.fromTo(rightBlock, {
      y: () => `${rightBlocks[0].offsetHeight}`,
    },
      {
        y: () => `-${rightBlock.offsetHeight}`,
        ease: "none",
        scrollTrigger: {
          trigger: ".begin__block",
          start: "top top",
          end: () => "+=" + rightBlock.offsetHeight,
          scrub: true,
          pin: true,
          markers: true
        },
      });
    rightBlocks.forEach((el, index) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top center",  // как только блок доходит до центра
        end: "bottom center",
        onEnter: () => setActive(index),
        onEnterBack: () => setActive(index)
      });
    });

    function setActive(index) {
      numberEl.textContent = index + 1;
    }
  }