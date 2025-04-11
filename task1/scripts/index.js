const defaultNoValueMessage = "Очень жаль что вы не захотели вводить";

const getUserAge = function () {
  const userDateOfBirth = prompt("Введите год вашего рождения");

  if (!userDateOfBirth.trim()) {
    return "";
  }

  return 2025 - userDateOfBirth;
};

const getUserCity = function () {
  const userCityInput = prompt("В каком городе вы живете?");

  if (!userCityInput.trim()) {
    return "";
  }

  switch (userCityInput) {
    case "Москва":
      return "Вы живете в столице болотии!";
    case "Киев":
      return "Вы живете в столице Украины!";
    case "Минск":
      return "Вы живете в столице картофляндии!";
    default:
      return `Вы живете в городе: ${userCityInput}`;
  }
};

const getUserFavoriteSport = function () {
  const userFavSportInput = prompt("Какой ваш любимый спорт?");

  if (!userFavSportInput.trim()) {
    return "";
  }

  switch (userFavSportInput) {
    case "Футбол":
      return "Круто! Вы хотите стать Месси";
    case "Баскетбол":
      return "Круто! Вы хотите стать Джорданом";
    case "Гонки":
      return "Круто! Вы хотите стать Шумахером";
    default:
      return `Ваш любимый спорт: ${userFavSportInput}`;
  }
};

const getUserInformation = function () {
  const textField = document.querySelector("#text-field");

  const userAge = getUserAge();
  if (!userAge) {
    alert(`${defaultNoValueMessage} ваш год рождения`);
    return;
  }

  const userCity = getUserCity();
  if (!userCity) {
    alert(`${defaultNoValueMessage} город в котором живете`);
    return;
  }

  const userFavoriteSport = getUserFavoriteSport();
  if (!userFavoriteSport) {
    alert(`${defaultNoValueMessage} ваш любимый спорт`);
    return;
  }

  if (!userAge || !userCity || !userFavoriteSport) {
    textField.innerHTML =
      "Вы не ввели что то из выше перечисленного! Пожалуйста попробуйте заново";
    return;
  }

  textField.innerHTML = `Вам ${userAge} лет, ${userCity}, ${userFavoriteSport}`;
};

getUserInformation();

// const defaultNoValueMessage = "Очень жаль что вы не захотели вводить";

// const usersDateOfBirth = prompt("Введите год вашего рождения");
// let usersAge;

// if (usersDateOfBirth === null) {
//   console.log(defaultNoValueMessage + " ваш год рождения");
// } else if (usersDateOfBirth.length === 0) {
//   usersAge = "Вы ничего не ввели!";
// } else if (usersDateOfBirth < 1900) {
//   usersAge = "неизвестно сколько";
// } else {
//   switch (usersDateOfBirth) {
//     default:
//       usersAge = 2025 - usersDateOfBirth;
//       break;
//   }
// }

// const usersCityInput = prompt("В каком городе вы живете?");
// let usersCity;

// if (usersCityInput === null) {
//   console.log(defaultNoValueMessage + " город в котором живете");
// } else if (usersCityInput.length === 0) {
//   usersCity = "Вы ничего не ввели!";
// } else {
//   switch (usersCityInput) {
//     case "Москва":
//       usersCity = "Вы живете в столице болотии!";
//       break;
//     case "Киев":
//       usersCity = "Вы живете в столице Украины!";
//       break;
//     case "Минск":
//       usersCity = "Вы живете в столице картофляндии!";
//     default:
//       usersCity = "Вы живете в городе: " + usersCityInput;
//       break;
//   }
// }

// const usersFavSportInput = prompt("Какой ваш любимый спорт?");
// let usersFavSport;
// if (usersFavSportInput === null) {
//   console.log(defaultNoValueMessage + " ваш любимый спорт");
// } else if (usersFavSportInput.length === 0) {
//   usersFavSport = "Вы ничего не ввели!";
// } else {
//   switch (usersFavSportInput) {
//     case "Футбол":
//       usersFavSport = "Круто! Вы хотите стать Месси";
//       break;
//     case "Баскетбол":
//       usersFavSport = "Круто! Вы хотите стать Джорданом";
//       break;
//     case "Гонки":
//       usersFavSport = "Круто! Вы хотите стать Шумахером";
//       break;
//     default:
//       usersFavSport = "Ваш любимый спорт: " + usersFavSportInput;
//       break;
//   }
// }

// const textField = document.querySelector("#text-field");

// if (usersDateOfBirth === null || usersCityInput === null || usersFavSportInput === null) {
//   textField.innerHTML =
//     "Вы не ввели что то из выше перечисленного! Пожалуйста попробуйте заново";
// } else {
//   textField.innerHTML = `Вам ${usersAge} лет, ${usersCity}, ${usersFavSport}`;
// }
