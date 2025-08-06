function setTitleName() {
  document.querySelector(".title").textContent = `Here your photos from album № ${
    JSON.parse(localStorage.getItem("photos"))[0].albumId
  }`;
}

setTitleName();

function renderPhotos() {
  const photosObj = JSON.parse(localStorage.getItem("photos"));

  for (const dataOfOnephoto of photosObj) {
    const photoCard = document.createElement("div");
    photoCard.classList.add("photo-card");
    photoCard.textContent = dataOfOnephoto.title;
    document.querySelector(".photos-wrap").append(photoCard);
  }
}

renderPhotos();
