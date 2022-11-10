function aboutExpand() {
  const aboutBlock = document.querySelector('[data-about]');
  const aboutButton = aboutBlock.querySelector('[data-detailed-button]');
  const aboutDynamicParagraphs = aboutBlock.querySelectorAll('[data-paragraph]');

  aboutButton.style.display = 'block';
  aboutDynamicParagraphs.forEach((element) => {
    element.dataset.paragraph = 'is-collapsed';
  });

  aboutButton.addEventListener('click', () => {
    if (aboutButton.dataset.detailedButton === 'is-collapsed') {
      aboutButton.dataset.detailedButton = 'is-expanded';
      aboutButton.innerHTML = 'Свернуть';
      aboutDynamicParagraphs.forEach((element) => {
        element.dataset.paragraph = 'is-expanded';
      });
    } else {
      aboutButton.dataset.detailedButton = 'is-collapsed';
      aboutButton.innerHTML = 'Подробнее';
      aboutDynamicParagraphs.forEach((element) => {
        element.dataset.paragraph = 'is-collapsed';
      });
    }
  });
}

export {aboutExpand};
