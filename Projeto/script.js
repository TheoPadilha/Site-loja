const track = document.querySelector(".carousel-track");
const leftArrow = document.querySelector(".seta-esquerda");
const rightArrow = document.querySelector(".seta-direita");
const images = document.querySelectorAll(".banner");

let currentIndex = 0;

const updateSlidePosition = () => {
  const slideWidth = images[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

// Evento para a seta esquerda
leftArrow.addEventListener("click", () => {
  if (currentIndex === 0) {
    // Vai para a última imagem
    currentIndex = images.length - 1;
  } else {
    currentIndex -= 1;
  }
  updateSlidePosition();
});

// Evento para a seta direita
rightArrow.addEventListener("click", () => {
  if (currentIndex === images.length - 1) {
    // Volta para a primeira imagem
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  updateSlidePosition();
});

// Ajusta a largura em caso de redimensionamento
window.addEventListener("resize", updateSlidePosition);
