//register links
const registerLinks = document.querySelectorAll('.get-link');

if (registerLinks.length > 0) {
  registerLinks.forEach(item => {
    item.setAttribute('href', item.getAttribute('href') + window.location.search);
  });
}

//modal 
const modalTrigger = document.querySelector('.hero__info');

modalTrigger.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modal.classList.add('active');

  const modalClose = document.querySelector('.modal-info__close');
  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });

});






@@include('webpSupport.js')