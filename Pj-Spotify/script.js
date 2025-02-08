document.addEventListener('DOMContentLoaded', () => {
  const artistsData = [
  {name: 'Ariana Grande', image: './img/ariana.jpg'},
  {name: 'Chappel Roan', image: './img/chappel.jpg'},
  {name: 'ZAYN', image: './img/zayn.jpg'},
  {name: 'Måneskin', image: './img/maneskin.jpg'},
  {name: 'Olivia Rodrigo', image: './img/olivia.jpg'},
  {name: 'Sabrina Carpenter', image: './img/sabrina.jpg'},
];

const albumsData = [
  {name: "Harry's House", artist: 'Harry Styles', image: './img/harrysjouse.jpg'},
  {name: "COWBOY CARTER", artist: 'Beyoncé', image: './img/cowboy.jpg'},
  {name: "GUTS", artist: 'Olivia Rodrigo', image: './img/guts.jpg'},
  {name: "RUSH!", artist: 'Måneskin', image: './img/rush.jpg'},
  {name: "MAÑANA SERÁ BONITO", artist: 'KAROL G', image: './img/manana.jpg'},
  {name: "THE TORTURED POETS DEPARTMENT", artist: 'Taylor Swift', image: './img/ttpd.jpg'},
  {name: "Mind Of Mine", artist: 'ZAYN', image: '../img/MoM.jpg'},
];

const artistGrid = document.querySelector('.artists-grid')
const albumsGrid = document.querySelector('.albums-grid')

artistsData.forEach( artist =>{
  const artistCard = document.createElement('div')
  artistCard.classList.add('artist-card')

  artistCard.innerHTML = `
    <img src="${artist.image}" alt= "Imagem de ${artist.name}">
    <h3>${artist.name}</h3>
  `
  artistGrid.appendChild(artistCard)
})

albumsData.forEach( album =>{
  const albumCard = document.createElement('div')
  albumCard.classList.add('album-card')

  albumCard.innerHTML = `
    <img src="${album.image}" alt= "Capa de ${album.name}">
    <h3>${album.name}</h3>
    <p>${album.artist}</p>
  `
  albumsGrid.appendChild(albumCard)
})

})

  