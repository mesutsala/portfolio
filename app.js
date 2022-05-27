const burger = document.querySelector(".burger");

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotate: "45", y: 5, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "black" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
    gsap.to("#logo", 1, { color: "Black" });
    document.body.classList.add("hide"); //To get rid of scroll
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "white" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "white" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
    gsap.to("#logo", 1, { color: "white" });
    document.body.classList.remove("hide");
  }
}

//Event Listeners
burger.addEventListener("click", navToggle);
