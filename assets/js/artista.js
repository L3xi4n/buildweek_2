const url = "https://striveschool-api.herokuapp.com/api/deezer/album/";

// const tracks =[];

function createArtist() {
  const url2 = new URLSearchParams(window.location.search);
  const artistId = url2.get("id");
  console.log(url2.toString());
  console.log(artistId);
  const artistUrl = `${url}${artistId}`
  fetch(artistUrl)
  .then((response) => response.json())
  .then((data) => {cardArtist(data)
    tableAlbum(data.tracks.data),
    likedSongs(data)
    bgBody(data)
})
  }

window.onload = () => {
  createArtist()
  }


// funzione per card artista
function cardArtist(data) {
  const containerArtist = document.getElementById("rowArtist")
containerArtist.innerHTML = ""
containerArtist.innerHTML = `
            
            <div id="items_artist">
              <div class="verificato">
             
              <svg xmlns="http://www.w3.org/2000/svg" id="verificato" width="30" height="30" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 20 20">
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
              </svg>
              Artista verificato</div>
              <div class="nome_artista display-1 fw-bold mt-5 mx-3">${data.artist.name}</div>
              <div class="ascoltatori_mensili my-2 mx-3">
                ${data.fans} ascoltatori mensili
              </div>
            </div>
`
}

// funzione per displayare le canzoni
function tableAlbum(tracks){
  const tableAlbum = document.getElementById("tabella")
  tableAlbum.innerHTML = "";
  let i = 0
  tracks.forEach((track) => {
     tableAlbum.innerHTML += `
    <tr class= "text-white">
      <th scope="row" class="numberTable">${i+1}</th>
      <td class = "fw-bold">${track.title}</td>
      <td class="text-center fw-bold" >${track.rank}</td>
      <td class="text-center fw-bold">${track.duration}</td>
    </tr>
 `
 i++
  });
}

function likedSongs(data) {
  const containerArtist = document.getElementById("brani_piaciuti")
containerArtist.innerHTML = ""
containerArtist.innerHTML = `
                <div class="card bg-dark border-0">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="${data.artist.picture}" class="img-fluid  rounded-circle" alt="..." />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body pt-4 ps-0">
                        <h5 class="card-title text-white">
                          Hai messo mi piace a 11 brani
                        </h5>
                        <p class="text-secondary">Di ${data.artist.name}</p>
                        <small></small>
                      </div>
                    </div>
                  </div>
                </div>`
}



function bgBody(data){
  const body = document.getElementById("rowArtist") 
  body.style.backgroundImage = `url('${data.artist.picture_xl}')`
  body.style.backgroundRepeat = "no-repeat"
  body.style.backgroundSize = "100%"
  body.style.height = "400px"
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
document.getElementById("prevArrow").addEventListener("click", function () {
  window.history.back(); // Torna indietro nella cronologia del browser
});

document.getElementById("nextArrow").addEventListener("click", function () {
  window.history.forward(); // Avanti nella cronologia del browser
});
