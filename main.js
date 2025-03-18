const tg = window.Telegram.Webapp;
console.log(tg);
const btn = document.querySelector("#button");
btn.addEventListener("click", () => {
  tg.openChat("@EridonKharkiv_bot");
});
