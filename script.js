const sliderInner = document.querySelector('.slider-inner');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const projectWidth = document.querySelector('.project').offsetWidth;

let currentIndex = 0;
const totalWidth = (sliderInner.children.length -1) * projectWidth;


nextButton.addEventListener('click', () => {
    currentIndex -= projectWidth;
    if (currentIndex < -totalWidth) {
        currentIndex = 0;
    }
    sliderInner.style.transform = `translateX(${currentIndex}px)`;
});

prevButton.addEventListener('click', () => {
    currentIndex += projectWidth;
    if (currentIndex > 0) {
        currentIndex = -totalWidth;
    }
    sliderInner.style.transform = `translateX(${currentIndex}px)`;
});

const images = document.querySelectorAll('.project img');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
const lightboxClose = document.createElement('span');
lightboxClose.classList.add('lightbox-close');
lightboxClose.innerHTML = '&times;';
lightbox.appendChild(lightboxClose);
document.body.appendChild(lightbox);


images.forEach(image => {
  image.addEventListener('click', () => {
    const imgClone = image.cloneNode();
    lightbox.innerHTML = ''; 
    lightbox.appendChild(imgClone);
    lightbox.appendChild(lightboxClose);
    lightbox.style.display = 'flex';

    lightboxClose.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  });
});