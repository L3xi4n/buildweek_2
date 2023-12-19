const url = "https://striveschool-api.herokuapp.com/api/deezer/album/";

// const tracks =[];

function createArtist() {
  const url2 = new URLSearchParams(window.location.search);
  const artistId = url2.get("id");
  const artistUrl = `${url}${artistId}`
  fetch(artistUrl)
  .then((response) => response.json())
  .then((data) => {cardArtist(data)
    console.log(data)
})
  }

window.onload = () => {
  createArtist()
  }

// funzione per card artista
function cardArtist(artist) {
  const containerArtist = document.getElementById("rowArtist");
  // containerArtist.innerHTML = "";
containerArtist.innerHTML = `
<img src="${artist.picture}" class="img-fluid rounded-start mx-3 my-4" alt="..." >
            <div>
              <div class="verificato">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" class="bi bi-patch-check-fill" viewBox="0 0 20 20">
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
              </svg>
              Artista verificato</div>
              <div class="nome_artista">${artist.name}</div>
              <div class="ascoltatori_mensili">
                ${artist.rank} ascoltatori mensili
              </div>
            </div>
<!-- bottoni -->
            <div class="buttons">
              <button class="" id="play_button">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                </svg>
              </button>
              <button id="follow_button">FOLLOWING</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="18"
                fill="currentColor"
                id="icon"
                class="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
                />
              </svg>
            </div>`
}

// funzione per displayare le canzoni
// function tableAlbum(tracks){
//   const tableAlbum = document.getElementById("contenitore_body")
//   tableAlbum.innerHTML = "";
//   let i = 0
//   tracks.forEach((track) => {
//      tableAlbum.innerHTML += `

//      <div class="contenitore_body row">
//      <div class="col-7 card_popolari">
//        <div class="card">
//          <div class="row g-0">
//            <div class="col-md-2">
//              <img src="" class="img-fluid rounded-start" alt="...">
//            </div>
//            <div class="col-md-8">
//              <div class="card-body">
//                <div class="row">
//                <div class="numberTracks">${i+1}</div>
//                <h5 class="card-title col-4">${track.title}</h5>
//                <h5 class="card-views col-4">${track.rank}</h5>
//                <h5 class="card-duration col-4">${track.duration}</h5>
//              </div>
//            </div>
//            </div>
//          </div>
//      </div>
//    </div>
//  `
//  i++
//   });
 
// }
