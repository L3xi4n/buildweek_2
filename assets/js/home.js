const url = "https://striveschool-api.herokuapp.com/api/deezer/album/";

const albumMixPreferiti = [384842207, 76311092, 508204251,721846,721845,721843 ];

const albumRecenti =[721833,1329897,1329898,1329889,81763,68346981];

const albumPiuAscoltati = [664237,70874562, 86773062, 71624, 345122517,302204417];

const arrayMixPreferiti = [];

const arrayRecenti = [];

const arrayPiuAscoltati = [];

albumMixPreferiti.forEach((el) => {
    fetch(url + el)
      .then((response) => response.json())
      .then(data => arrayMixPreferiti.push(data));
});

console.log(arrayMixPreferiti);

albumRecenti.forEach((el) => {
    fetch(url + el)
     .then((response) => response.json())
     .then(data => arrayRecenti.push(data));
});

console.log(arrayRecenti);

albumPiuAscoltati.forEach((el) => {
    fetch(url + el)
    .then((response) => response.json())
    .then(data => arrayPiuAscoltati.push(data));
});

console.log(arrayPiuAscoltati);