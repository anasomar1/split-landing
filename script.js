const one = document.querySelector(".one");
const two = document.querySelector(".two");
const box = document.querySelectorAll(".box");

box.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.width = "75%";
  });
  item.addEventListener("mouseleave", () => {
    item.style.width = "50%";
  });
});
