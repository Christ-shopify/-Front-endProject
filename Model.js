const btn = document.querySelector("#btn");
const close = document.querySelector(".close-btns");
const modal = document.querySelector(".modal-overlay");

btn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

close.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
