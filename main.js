let tg = window.Telegram.WebApp;

// Проверяем, есть ли доступ к данным пользователя
if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
  let user = tg.initDataUnsafe.user;

  console.log("ID пользователя:", user.id);
  console.log("Имя:", user.first_name);
  console.log("Фамилия:", user.last_name || "Нет");
  console.log("Юзернейм:", user.username || "Нет");

  document.getElementById("user-data").innerHTML = `
        <b>ID:</b> ${user.id} <br>
        <b>Имя:</b> ${user.first_name} <br>
        <b>Фамилия:</b> ${user.last_name || "Нет"} <br>
        <b>Юзернейм:</b> @${user.username || "Нет"}
    `;
} else {
  console.error("Мини-приложение не запущено в Telegram!");
}

// Получаем локацию пользователя
tg.onEvent("location", (event) => {
  const { latitude, longitude } = event.data;

  // Отображаем локацию
  document.getElementById("location-data").innerHTML = `
        <b>Широта:</b> ${latitude} <br>
        <b>Долгота:</b> ${longitude}
    `;
});

// Запрос локации
function getLocation() {
  tg.LocationManager.init();
  tg.LocationManager.getLocation()
    .then((location) => {
      console.log("Локация получена:", location);
      // Отображаем локацию на странице
      document.getElementById("location-data").innerHTML = `
                <b>Широта:</b> ${location.latitude} <br>
                <b>Долгота:</b> ${location.longitude}
            `;
    })
    .catch((error) => {
      console.error("Ошибка при получении локации:", error);
      alert("Не удалось получить локацию.");
    });
}

// Кнопка для запроса локации
document
  .getElementById("get-location-btn")
  .addEventListener("click", getLocation);
