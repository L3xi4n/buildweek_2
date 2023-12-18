const url = "https://striveschool-api.herokuapp.com/api/deezer/album/";
function createAlbum() {
    const url2 = new URLSearchParams(window.location.search);
    const albumId = url2.get("id");
    const albumUrl = `${url}${albumId}`;
    fetch(albumUrl)
    .then((response) => response.json())
    .then((data) =>{ detailsAlbum(data)})
}

function detailsAlbum(album) {
    const containerAlbum = document.getElementById("rowAlbum");
    containerAlbum.innerHTML= "";
    containerAlbum.innerHTML = ` <div class="col-md-2">
    <img src="${album.cover}" class="img-fluid rounded-start mx-3 my-4" alt="..." >
  </div>
  <div class="col-md-10 text-white">
    <div class="card-body">
      <div class="display-2 fw-bold">${album.title}</div>
      <div> ${album.artist.name}</div>
      <div>Ascolta il nuovo singolo di ${album.artist.name}</div> 
      <button type="button" class="btn btn-success text-dark border rounded-5 px-4 py-2 fw-bold" id="btnPlay">Play</button>
      <button type="button" class="btn btn-dark border border-white rounded-5 px-4 py-2" id="btnSave">Salva</button>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="18" fill="currentColor" id="icon" class="bi bi-three-dots" viewBox="0 0 16 16">
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
      </svg>
    </div>
  </div>`
}
 
window.onload = () => {
createAlbum()
}