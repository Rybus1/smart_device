function menuToggle () {
  const navigationBlock = document.querySelector('[data-navigation]')
  const navigationButton = navigationBlock.querySelector('[data-expand-button]');
  const navigationList = navigationBlock.querySelector('[data-expand-list]');
  const navigationIcon = navigationButton.querySelector('[data-icon]');

  const contactsBlock = document.querySelector('[data-contacts]')
  const contactsButton = contactsBlock.querySelector('[data-expand-button]');
  const contactsList = contactsBlock.querySelector('[data-expand-list]');
  const contactsIcon = contactsButton.querySelector('[data-icon]');

  navigationButton.dataset.expandButton = 'is-closed';
  navigationList.dataset.expandList = 'is-closed';
  navigationIcon.setAttribute("href", "img/sprite_auto.svg#plus");
  contactsButton.dataset.expandButton = 'is-closed';
  contactsList.dataset.expandList = 'is-closed';
  contactsIcon.setAttribute("href", "img/sprite_auto.svg#plus");


  navigationButton.addEventListener('click', () => {
    if (navigationButton.dataset.expandButton == 'is-closed') {
      navigationButton.dataset.expandButton = 'is-open';
      navigationList.dataset.expandList = 'is-open';
      contactsButton.dataset.expandButton = 'is-closed';
      contactsList.dataset.expandList = 'is-closed';
      navigationIcon.setAttribute("href", "img/sprite_auto.svg#minus");
      contactsIcon.setAttribute("href", "img/sprite_auto.svg#plus");
    } else {
      navigationButton.dataset.expandButton = 'is-closed';
      navigationList.dataset.expandList = 'is-closed';
      navigationIcon.setAttribute("href", "img/sprite_auto.svg#plus");
    }
  })

  contactsButton.addEventListener('click', () => {
    if (contactsButton.dataset.expandButton == 'is-closed') {
      contactsButton.dataset.expandButton = 'is-open';
      contactsList.dataset.expandList = 'is-open';
      navigationButton.dataset.expandButton = 'is-closed';
      navigationList.dataset.expandList = 'is-closed';
      contactsIcon.setAttribute("href", "img/sprite_auto.svg#minus");
      navigationIcon.setAttribute("href", "img/sprite_auto.svg#plus");
    } else {
      contactsButton.dataset.expandButton = 'is-closed';
      contactsList.dataset.expandList = 'is-closed';
      contactsIcon.setAttribute("href", "img/sprite_auto.svg#plus");
    }
  })
}

export {menuToggle};
