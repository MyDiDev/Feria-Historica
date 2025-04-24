const images = [
  "https://www.puntacanatravelblog.com/wp-content/uploads/dominican_republic_095_santo_domingo_zona_colonial_alcazar_de_colon-1024x768.jpg",
  "https://mostinterestingdestinations.com/wp-content/uploads/2022/11/Zona-Colonial.jpg",
  "https://vagabuzz.com/img/blog/plaza-epana-santo-domingo.jpg",
];
const imageElement = document.getElementById("img_slider");
let savedIndx = 0;

const changeImage = () => {
  if (savedIndx >= images.length) {
    savedIndx = 0;
    return;
  }
  imageElement.src = images[savedIndx];
  savedIndx += 1;
  console.log("Image Changed");
};

setInterval(changeImage, 5000);
