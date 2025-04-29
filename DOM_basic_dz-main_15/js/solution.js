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

const initialArray = [1,2,3, [1.1, 1.2, ["1.1.1", "1.1.2", ["1.2.1", "1.2.2", "1.2.3"], "1.1.3"], 1.3], 4]

generateList = (array) => {
    const ul = document.createElement("ul")
    let elem;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            elem = generateList(array[i])
        } else {
            elem = document.createElement("li")
            elem.textContent = array[i]
        }

        ul.append(elem)
        
    }

    return ul
}

document.body.append(generateList(initialArray))
