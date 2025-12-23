import Typed from "typed.js";
import gsap from "gsap";

const typed = new Typed("#typed", {
  strings: ["Software Engineer", "Back-end Developer", "Software Architect"],
  loop: true,
  typeSpeed: 150,
});

const buttons = document.querySelectorAll(".buttonContainer");

buttons.forEach((button) => {
  const word = button.querySelector(".buttonText");
  const uname = button.querySelector(".slideText");
  gsap.set(uname, {
    autoAlpha: 0,
    x: -20,
  });
  const tl = gsap.timeline({ paused: true });
  tl.to(word, {
    y: 2,
    stagger: 0.5,
  }).to(
    uname,
    {
      x: 0,
      autoAlpha: 1,
      duration: 0.2,
    },
    "<",
  );
  button.addEventListener("mouseenter", () => tl.play());
  button.addEventListener("mouseleave", () => tl.reverse());
});
