function generateList() {
  const ul = document.createElement("ul");
  const objData = JSON.parse(localStorage.getItem("data"));

  for (const inputName in objData) {
    const li = document.createElement("li");
    if (inputName === "file") {
      if (!objData.file) {
        li.textContent = "error occured";
        ul.append(li);
        continue;
      }

      const image = document.createElement("img");
      image.src = objData.file;
      li.append(image);
      ul.append(li);
      continue;
    }

    li.textContent = objData[inputName];
    ul.append(li);
  }

  return ul;
}

document.body.append(generateList());
