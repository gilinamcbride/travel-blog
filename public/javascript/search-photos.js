const cityName = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];
console.log(cityName);

const displayImages = (city) => {
  const pexelApi = "https://api.pexels.com/v1/search?query=" + city;
  fetch(pexelApi)
    .then((response) => {
      if (response.ok) {
        response.json().then((photoData) => {
          console.log(photoData);
          displayPhotos(photoData);
        });
      } else {
        alert("Images Not Found");
      }
    })
    .catch((error) => {
      alert("Unable to connect to pexels.");
    });
};

displayImages(cityName);

const mainEl = document.querySelector("#photos");

const displayPhotos = (dataObj) => {
  const imageArray = dataObj.photos;
  for (var i = 0; i < imageArray.length; i++) {
    const image = imageArray[i].src.medium;
    const alt = imageArray[i].alt;
    console.log(image);
    console.log(alt);

    var imageEl = document.createElement("div");
    imageEl.innerHTML = `<img src="${image}" alt="${alt}">`;
    mainEl.appendChild(imageEl);
  }
};