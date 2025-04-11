const ulList = document.querySelector(".ulClass");
const ulChildrenArray = document.querySelector(".ulClass").children;

for (const node of ulChildrenArray) {
  console.log(node); //Вывод всех лишек списка в консоль
}

const ulListAttributeNames = [];
const ulListAttributeValues = [];

//Здесь создаются два массива один из них с названием атрибута другой с его значением
for (const attribute of ulList.attributes) {
  ulListAttributeValues.push(attribute.value);

  ulListAttributeNames.push(attribute);
}

console.log(ulListAttributeNames);
console.log(ulListAttributeValues);

ulList.lastElementChild.textContent = "Привет, меня зовут Максим"; //контент последней лишки меняем
ulList.firstElementChild.setAttribute("data-my-name", "Максим"); //создание аттрибута первой лишке
ulList.removeAttribute("data-dog-tail"); //удаление аттрибута

// снизу функция генерирующая списки и вложенные списки

const initArray = [1, 2, 3, 4, [1.1, 1.2, 1.3], 5];

generateList = (array) => {
  if (!array || array.length === 0) {
    return;
  }

  const initUlList = document.createElement("ul");
  document.body.prepend(initUlList);

  for (let i = 0; i < array.length; i++) {
    let outerLiElem = document.createElement("li");
    outerLiElem.textContent = array[i];

    if (Array.isArray(array[i])) {
      outerLiElem.textContent = "";
      const nestedUl = document.createElement("ul");
      outerLiElem.append(nestedUl);

      for (let j = 0; j < array[i].length; j++) {
        let insideLiElem = document.createElement("li");
        insideLiElem.textContent = array[i][j]; //берем числа из вложенного массива в массив (1.1, 1.2 и тд)
        nestedUl.append(insideLiElem);
      }
    }

    initUlList.append(outerLiElem);
  }
};

generateList(initArray);
