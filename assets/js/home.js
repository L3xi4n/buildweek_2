const url = "https://striveschool-api.herokuapp.com/api/deezer/album/";
let photos = [];
const urlSearch = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

const albumMixPreferiti = [
  384842207, 76311092, 508204251, 721846, 721845, 721843,
];


const albumRecenti = [721833, 1329897, 1329898, 1329889, 81763, 68346981];

const albumPiuAscoltati = [
  664237, 10966110, 86773062, 71624, 345122517, 302204417,
];

window.onload = function () {
  document.getElementById("mixPreferiti").innerHTML = ""; 
};
cardGrande(1329897);

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
  const cardsPreferiti = document.getElementById(rowId);

  cardsPreferiti.innerHTML += `
    <div class=" col-xs-12  col-sm-6 col-md-4 col-lg-2 ">
    <div class="card h-100 cardPopolo">
        <img src="${album.cover}" class="card-img-top p-3 coversAlbumsHome" alt="...">
        <div class="card-body">
           <a  class="text-decoration-none" href="../../album.html?id=${album.id}"><h5 class="card-title text-white">${album.title}</h5></a> 
            <p class="card-text text-secondary">${album.artist.name}</p>
        </div>
    </div>
    </div>`;
}

function cardsBuongiorno(album) {
  const cardsBuongiorno = document.getElementById("cardBuongiorno");

  cardsBuongiorno.innerHTML += `
    <div class="col-4 my-2">
    <div class="card col-12 border-0 text-white">
      <div class="row g-0 cardBuongiorno">
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
  fetch(url + album)
  .then((response) => response.json())
  .then((data) => {

  const cardGrande = document.getElementById("cardGrande");
  cardGrande.innerHTML += `<div class="row g-0">
  <div class="col-md-2">
    <img src="${data.cover}" class="img-fluid rounded-start mx-3 my-4" alt="..." >
  </div>
  <div class="col-md-10 text-white">
    <div class="card-body">
      <div class="display-2 fw-bold">${data.title}</div>
      <div> ${data.artist.name}</div>
      <div>Ascolta il nuovo singolo di ${data.artist.name}</div> 
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

function search(si) {
  const search = document.getElementById("contenitoreSearch");
  if (si){
    search.innerHTML = `<form class="d-flex " role="search" id="searchBar">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="cerca">
    <button class="btn btn-outline-success" type="submit" onclick="ricerca()" data-bs-toggle="modal" data-bs-target="#exampleModal">Search</button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

  </form>`
  } else {
    search.innerHTML = "";
  }
}


async function ricerca() {
  try {
      const cerca = document.getElementById("cerca").value;
      const url2 = `${urlSearch}${cerca}`;

      const response = await fetch(url2, {
      });

      const data = await response.json();
      photos = data.photos;

      if (photos.length === 0) {
          // Nessun risultato trovato
          document.getElementById("risultato").innerText = "Nessun risultato trovato";
      }
  } catch (error) {
      console.error("Errore durante la ricerca:", error);
  }
}