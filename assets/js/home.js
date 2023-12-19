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
        <div class="card-body ">
           <a  class="text-decoration-none text-white" href="../../album.html?id=${album.id}"><h5 class="card-title text-white">${album.title}</h5></a> 

            <a class="text-decoration-none" href="../../artista.html?id=${album.id}">
          <p class="card-text text-secondary">${album.artist.name}</p></a>

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
        <div class="col-md-3">
          <img src="${album.cover}" class="img-fluid rounded-start " alt="...">
        </div>
        <div class="col-md-9 my-auto">
          <div class="card-body d-flex ">
          <a class="text-decoration-none text-white " href="../../album.html?id=${album.id}"><h5 class="card-title ">${album.title}</h5></a> 
         
            
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
  <div class="col-md-2 ">
    <img src="${data.cover}" class="img-fluid  mx-3 my-4" alt="..." width="90%"  >
  </div>
  <div class="col-md-10 text-white">
    <div class="card-body ms-3">
    <p>ALBUM</p>
      <div class="display-1 fw-bold">${data.title}</div>
      <div class="mb-3"> ${data.artist.name}</div>
      <div class="my-3">Ascolta il nuovo singolo di ${data.artist.name}</div> 
      <button type="button" class="btn btn-success text-dark border rounded-5 px-4 py-2 fw-bold" id="btnPlay">Play</button>
      <button type="button" class="btn btn-dark  rounded-5 px-4 py-2" id="btnSave">Salva</button>
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="25" fill="grey" id="icon" class="bi bi-three-dots" viewBox="0 0 16 16">
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
      </svg>
    </div>
  </div>
</div>`;
  })
}

function onSearch(event) {
  event.preventDefault();

  const query = event.target.elements.search.value;

  const title = document.getElementById("staticBackdropLabel");
  const container = document.getElementById("searchCardContainer");

  container.innerHTML = `
  <div class="container-fluid text-center">
    <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;

  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    .then((response) => response.json())
    .then(({ data }) => {

      title.innerText = `Search for ${query}`;
      container.innerHTML = "";

      data?.forEach((item) => {
        container.innerHTML += `
          <div class="card mb-3" style="width: 49.6%">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${item.album.cover}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.artist.name}</p>
              </div>
            </div>
          </div>
        </div>
        `;
      });
    });
}



/* frecce avanti e indietro */
// Aggiungi un gestore di eventi per le frecce
document.getElementById('prevArrow').addEventListener('click', function() {
  window.history.back(); // Torna indietro nella cronologia del browser
});

document.getElementById('nextArrow').addEventListener('click', function() {
  window.history.forward(); // Avanti nella cronologia del browser
});
