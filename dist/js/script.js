const ScrollUp = document.querySelector(".scroll-up");

window.onscroll = () => {
    if (window.scrollY > 500) {
        ScrollUp.classList.add("scroll-active");
    } else {
        ScrollUp.classList.remove("scroll-active");
    }
}


const circles = document.querySelectorAll(".circle");

window.addEventListener("scroll", () => {
  circles.forEach(circle => {
    const percent = circle.getAttribute("data-percent");
    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    const progress = circle.querySelector("svg circle:last-child");

    const offset = circumference - (percent / 100) * circumference;

    const rect = circle.getBoundingClientRect();

    if (rect.top < window.innerHeight) {
      progress.style.strokeDashoffset = offset;
    }
  });
});

document.addEventListener("DOMContentLoaded", function(){

    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

});