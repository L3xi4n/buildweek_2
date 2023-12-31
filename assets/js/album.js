const url = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const tracks =[];
function createAlbum() {
    const url2 = new URLSearchParams(window.location.search);
    const albumId = url2.get("id");
    const albumUrl = `${url}${albumId}`
    fetch(albumUrl)
    .then((response) => response.json())
    .then((data) =>{ detailsAlbum(data) 
      console.log(data)
      tableAlbum(data.tracks.data) 
      bgBody(data);
    })
   
    
    
}

function detailsAlbum(album) {
    const containerAlbum = document.getElementById("rowAlbum");
    containerAlbum.innerHTML= "";
    containerAlbum.innerHTML = ` <div class="col-md-2">
    <img src="${album.cover}" class="img-fluid  mx-4 my-4 w-100" alt="..." >
  </div>
  <div class="col-md-9 mx-5 text-white my-auto">

    <div class="card-body">
    <p>ALBUM</p>
      <div class="display-1 fw-bold mt-4">${album.title}</div>
      <div> ${album.artist.name}</div>
    </div>
  </div>`
}
 
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

//  function bgBody(foto){
// const body = document.getElementById("body_home") 
// body.style.backgroundImage = `url('${foto.cover_xl}')`
// body.style.backgroundRepeat = "no-repeat"
// body.style.backgroundSize = "100%"
// body.style.opacity = "80%"
// } 

window.onload = () => {
createAlbum()

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