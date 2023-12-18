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
