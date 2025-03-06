let first = document.querySelector(".first");
let second = document.querySelector(".second");
let button = document.querySelector(".popup-button");
let close = document.querySelector(".close");
let subscribe = document.querySelector(".btn-sub");
let overlay = document.querySelector(".overlay");
let body = document.querySelector("body");  

button.addEventListener("click", () => {
  first.parentElement.classList.add("openPopup");
  first.parentElement.classList.add("overlay");
});

close.addEventListener("click", () => {
  first.parentElement.classList.remove("openPopup");
  first.parentElement.classList.remove("overlay");
});

subscribe.addEventListener("click", (e) => {
  e.preventDefault();
  first.parentElement.classList.remove("openPopup");
  first.parentElement.classList.remove("overlay");
});
