document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded');
  let date = document.querySelector('footer p');

  let dates = new Date();
  date.innerHTML = `Copyright © ${dates.getFullYear()} - Philippe DELENTE | Tous droits réservés`;
  let slider = document.getElementsByClassName('slider');

  let etape = 0;
  let nbimg = slider.length;
  let precedent = document.querySelector('.precedent');
  let suivant = document.querySelector('.suivant');

  let enleverActiveImages = () => {
    for (let i = 0; i < nbimg; i++) {
      slider[i].classList.remove('active');
    }
  };

  suivant.addEventListener('click', () => {
    etape++;
    if (etape >= nbimg) {
      etape = 0;
    }
    enleverActiveImages();
    slider[etape].classList.add('active');
  });

  precedent.addEventListener('click', () => {
    etape--;
    if (etape < 0) {
      etape = nbimg - 1;
    }
    enleverActiveImages();
    slider[etape].classList.add('active');
  });
});
