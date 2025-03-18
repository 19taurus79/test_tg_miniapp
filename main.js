const tg = window.Telegram.Webapp;
console.log(tg);
const btn = document.querySelector("#btn");
btn.addEventListener("click", (event) => {
  tg.invoke("openChat", { chat_id: "@EridonKharkiv_bot" });
});
