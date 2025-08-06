async function getAllAlbums() {
  let albums = await fetch("https://jsonplaceholder.typicode.com/albums");
  albums = await albums.json();

  renderAlbums(albums);
}

getAllAlbums();

function renderAlbums(albumsObject) {
  const albumWrap = document.querySelector(".album-cards");

  for (const album of albumsObject) {
    const albumCard = document.createElement("div");
    albumCard.setAttribute("album-id", album.id);
    albumCard.innerText = album.title;
    albumCard.classList.add("album-card");
    albumWrap.append(albumCard);
  }
}

document.querySelector(".album-cards").addEventListener("click", (e) => {
  if (e.target.classList.contains("album-card")) {
    let albums = fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${e.target.getAttribute("album-id")}`
    );

    albums
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        localStorage.setItem("photos", JSON.stringify(result));
        window.location.pathname = "../../photos_page/index_photos.html";
      });
  }
});
