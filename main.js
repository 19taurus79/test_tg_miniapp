const tg = window.Telegram.Webapp;
console.log(tg);
const btn = document.querySelector("#btn");
btn.addEventListener("click", (event) => {
  console.log(tg.initData);
});
