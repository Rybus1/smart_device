function popupShow() {
  const showButton = document.querySelector('[data-show-popup]');
  const popupBlock = document.querySelector('[data-popup]');
  const closeButton = popupBlock.querySelector('[data-close-popup]');
  const header = document.querySelector('[data-header]');
  const body = document.querySelector('body');
  const scrollCover = document.querySelector('[data-scroll-cover]')

  showButton.addEventListener('click', () => {
    popupBlock.dataset.popup = 'is-open';
    body.classList.add('scroll-lock');
    header.classList.add('scroll-lock');
    scrollCover.classList.remove('visually-hidden');
  });

  closeButton.addEventListener('click', () => {
    popupBlock.dataset.popup = '';
    body.classList.remove('scroll-lock');
    header.classList.remove('scroll-lock');
    scrollCover.classList.remove('visually-hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      popupBlock.dataset.popup = '';
      body.classList.remove('scroll-lock');
      header.classList.remove('scroll-lock');
      document.removeEventListener('keydown', callbackOnEsc);
    }
  }
  );

  // aboutButton.style.display = "block";
  // aboutDynamicParagraphs.forEach(element => {
  //   element.dataset.paragraph = 'is-collapsed';
  // });

  // aboutButton.addEventListener('click', () => {
  //   if (aboutButton.dataset.detailedButton == 'is-collapsed') {
  //     aboutButton.dataset.detailedButton = 'is-expanded';
  //     aboutButton.innerHTML = 'Свернуть';
  //     aboutDynamicParagraphs.forEach(element => {
  //       element.dataset.paragraph = 'is-expanded';
  //     });
  //   } else {
  //     aboutButton.dataset.detailedButton = 'is-collapsed';
  //     aboutButton.innerHTML = 'Подробнее';
  //     aboutDynamicParagraphs.forEach(element => {
  //       element.dataset.paragraph = 'is-collapsed';
  //     });
  //   }
  // })
}

export { popupShow };
