//Файлы в которых нужно работать прикреплены ниже

// 1. Собрать данные с формы при ее сабмите

// 2. Сохранить эти данные в качестве объекта внутри localStorage (не забываем о преобразовании в json)

// 3. Создать второй html файл, в котором списком (ul > li) вывести вывести все те данные, которые пользователь ввел в форму ранее

// 4. Если данных нет, то показать соответствующее сообщение

const getFormData = function (event) {
  event.preventDefault();

  const inputs = event.target.querySelectorAll("input, select, textarea");
  const dataObj = {};

  for (const input of inputs) {
    if (input.name === "terms") {
      dataObj.terms = input.checked;
      continue;
    }

    if (input.name === "file") {
      gettingFileInputData();
    }

    dataObj[input.name] = input.value;
  }

  localStorage.setItem("data", JSON.stringify(dataObj));
};

const gettingFileInputData = function () {
  const fileReader = new FileReader();

  fileReader.addEventListener("load", () => {
    const dataObj = JSON.parse(localStorage.getItem("data"));
    try {
      dataObj.file = fileReader.result;
      localStorage.setItem("data", JSON.stringify(dataObj));
    } catch {
      dataObj.file = null;
      localStorage.setItem("data", JSON.stringify(dataObj));
    }
  });

  fileReader.readAsDataURL(document.querySelector("#file-input").files[0]);
};

const loadFormData = function () {
  if (!localStorage.getItem("data")) return;

  const dataObj = JSON.parse(localStorage.getItem("data"));
  const inputs = document.querySelectorAll("#form input, #form select, #form textarea");

  for (const input of inputs) {
    if (input.name === "terms") {
      input.checked = dataObj[input.name];
    }

    if (input.name === "file") {
      continue;
    }

    !dataObj[input.name] ? (input.value = "") : (input.value = dataObj[input.name]);
  }
};

document.addEventListener("DOMContentLoaded", loadFormData);
document.querySelector("#form").addEventListener("submit", getFormData);
