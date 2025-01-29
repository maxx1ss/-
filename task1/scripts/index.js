const message = "Очень жаль что вы не захотели вводить";

const usersDateOfBirth = prompt("Введите год вашего рождения");
let usersAge;

if (usersDateOfBirth === null) {
  console.log(message + " ваш год рождения");
} else if (usersDateOfBirth.length === 0) {
  usersAge = "Вы ничего не ввели!";
} else if (usersDateOfBirth < 1900) {
  usersAge = "неизвестно сколько";
} else {
  switch (usersDateOfBirth) {
    default:
      usersAge = 2025 - usersDateOfBirth;
      break;
  }
}

const usersCityInput = prompt("В каком городе вы живете?");
let usersCity;

if (usersCityInput === null) {
  console.log(message + " город в котором живете");
} else if (usersCityInput.length === 0) {
  usersCity = "Вы ничего не ввели!";
} else {
  switch (usersCityInput) {
    case "Москва":
      usersCity = "Вы живете в столице болотии!";
      break;
    case "Киев":
      usersCity = "Вы живете в столице Украины!";
      break;
    case "Минск":
      usersCity = "Вы живете в столице картофляндии!";
    default:
      usersCity = "Вы живете в городе: " + usersCityInput;
      break;
  }
}

const usersFavSportInput = prompt("Какой ваш любимый спорт?");
let usersFavSport;
if (usersFavSportInput === null) {
  console.log(message + " ваш любимый спорт");
} else if (usersFavSportInput.length === 0) {
  usersFavSport = "Вы ничего не ввели!";
} else {
  switch (usersFavSportInput) {
    case "Футбол":
      usersFavSport = "Круто! Вы хотите стать Месси";
      break;
    case "Баскетбол":
      usersFavSport = "Круто! Вы хотите стать Джорданом";
      break;
    case "Гонки":
      usersFavSport = "Круто! Вы хотите стать Шумахером";
      break;
    default:
      usersFavSport = "Ваш любимый спорт: " + usersFavSportInput;
      break;
  }
}

const textField = document.querySelector("#text-field");

if (usersDateOfBirth === null || usersCityInput === null || usersFavSportInput === null) {
  textField.innerHTML =
    "Вы не ввели что то из выше перечисленного! Пожалуйста попробуйте заново";
} else {
  textField.innerHTML = `Вам ${usersAge} лет, ${usersCity}, ${usersFavSport}`;
}
