let slideIdx = 0;

const showSlide = () => {
  const slides = document.getElementsByClassName('slide');
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIdx++;

  if (slideIdx > slides.length) {
    slideIdx = 1;
  }
  
  slides[slideIdx-1].style.display = "block";

  setTimeout(showSlide, 1400);
};

showSlide();