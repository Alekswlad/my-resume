const button = document.querySelector("#button");
const content = document.querySelector("#content");
let popupClose = document.querySelector(".js-popup-close");

button.addEventListener("click", function () {
  if (content.classList.toggle("content-hidden")) {
    button.textContent = "IT courses FrontEnd pro from ITEA";
  }

  // content.classList.toggle('content-hidden')

  // if (content.classList.contains('content-hidden')) {
  // button.textContent = 'Відкрити блок';
  // } else {
  // button.textContent = 'Закрити блок';
  // }
});
popupClose.addEventListener("click", function () {
  content.classList.add("content-hidden");
});
