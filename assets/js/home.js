const url = "https://striveschool-api.herokuapp.com/api/deezer/album/";

const albumMixPreferiti = [
  384842207, 76311092, 508204251, 721846, 721845, 721843,
];

const albumRecenti = [721833, 1329897, 1329898, 1329889, 81763, 68346981];

const albumPiuAscoltati = [
  664237, 70874562, 86773062, 71624, 345122517, 302204417,
];

window.onload = function () {
  document.getElementById("mixPreferiti").innerHTML = "";
};

albumMixPreferiti.forEach((id) => {
  fetch(url + id)
    .then((response) => response.json())
    .then((data) => {
      cardsMixPreferiti(data, "mixPreferiti");
    });
});

albumRecenti.forEach((id) => {
  fetch(url + id)
    .then((response) => response.json())
    .then((data) => {
      cardsMixPreferiti(data, "recenti");
    });
});



albumPiuAscoltati.forEach((id) => {
  fetch(url + id)
    .then((response) => response.json())
    .then((data) => {
      cardsMixPreferiti(data, "piuAscoltati");
      cardsBuongiorno(data);
    });
});

function cardsMixPreferiti(album, rowId) {
  console.log(album);
  const cardsPreferiti = document.getElementById(rowId);

  cardsPreferiti.innerHTML += `
    <div class=" col-xs-12  col-sm-6 col-md-4 col-lg-2 ">
    <div class="card h-100">
        <img src="${album.cover}" class="card-img-top px-1" alt="...">
        <div class="card-body">
            <h5 class="card-title">${album.title}</h5>
            <p class="card-text">${album.artist.name}</p>
        </div>
    </div>
    </div>`;
}

function cardsBuongiorno(album) {
  const cardsBuongiorno = document.getElementById("cardBuongiorno");

  cardsBuongiorno.innerHTML += `
    <div class="col-4 my-2">
    <div class="card col-12">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${album.cover}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${album.title}</h5>
            
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function cardGrande(album) {
  fetch(url + 1329897)
  .then((response) => response.json())
  .then((data) => {

  const cardGrande = document.getElementById("cardGrande");
  cardGrande.innerHTML += `<div class="row g-0">
  <div class="col-md-2">
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
  </div>
</div>`;
  })
}
