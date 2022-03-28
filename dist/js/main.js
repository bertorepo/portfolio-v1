// Swiper Scrollbar

const swiper = new Swiper(".swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragClass: "swiper-scrollbar-drag",
  },
});

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");
const navItem = menu.querySelectorAll("li");

menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
});

const changeActive = () => {
  navItem.forEach((item) => {
    const link = item.querySelector("a");
    link.classList.remove("active");
  });
};

navItem.forEach((item) => {
  const link = item.querySelector("a");
  link.addEventListener("click", () => {
    changeActive();
    link.classList.add("active");
  });
});

// About
const readMoreBtn = document.querySelector(".read-more");
const readMoreContent = document.querySelector(".read-more-content");

readMoreBtn.addEventListener("click", () => {
  readMoreContent.classList.toggle("show-content");
  if (readMoreContent.classList.contains("show-content")) {
    readMoreBtn.textContent = "Show Less";
  } else {
    readMoreBtn.textContent = "Show More";
  }
});

//Skills

const skillItems = document.querySelectorAll(".skills .container .skill");

skillItems.forEach((skill) => {
  const headItem = skill.querySelector(".head");
  const skillItems = skill.querySelector(".items");
  headItem.addEventListener("click", () => {
    skillItems.classList.toggle("show-items");
  });
});

// show box shadow in navbar when window scrolling

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("show-box-shadow", window.scrollY > 0);
});
