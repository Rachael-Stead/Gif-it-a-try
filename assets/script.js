//jiggle icons
const smallImages = document.querySelectorAll('.jiggle');

smallImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.classList.add('jiggle-animation');
    });

    image.addEventListener('mouseout', () => {
        image.classList.remove('jiggle-animation');
    });
});

//retracting flex-box
var box = document.getElementById('box');
var hiddenImage = document.getElementById('hiddenImage');

box.addEventListener('click', () => {
  box.style.height = '0';
  hiddenImage.style.opacity = '1';
});