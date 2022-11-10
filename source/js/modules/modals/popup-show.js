function popupShow() {
  const showButton = document.querySelector('[data-show-popup]');
  const popupBlock = document.querySelector('[data-popup]');
  const closeButton = popupBlock.querySelector('[data-close-popup]');
  const header = document.querySelector('[data-header]');
  const body = document.querySelector('body');

  showButton.addEventListener('click', () => {
    popupBlock.dataset.popup = 'is-open';
    body.classList.add('scroll-lock');
    header.classList.add('scroll-lock');
  });

  closeButton.addEventListener('click', () => {
    popupBlock.dataset.popup = '';
    body.classList.remove('scroll-lock');
    header.classList.remove('scroll-lock');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      popupBlock.dataset.popup = '';
      body.classList.remove('scroll-lock');
      header.classList.remove('scroll-lock');
    }
  }
  );
}

export {popupShow};
