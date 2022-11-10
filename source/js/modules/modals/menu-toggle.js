function menuToggle() {
  const navigationBlock = document.querySelector('[data-navigation]');
  const navigationButton = navigationBlock.querySelector('[data-expand-button]');
  const navigationList = navigationBlock.querySelector('[data-expand-list]');
  const navigationIcon = navigationButton.querySelector('[data-icon]');

  const contactsBlock = document.querySelector('[data-contacts]');
  const contactsButton = contactsBlock.querySelector('[data-expand-button]');
  const contactsList = contactsBlock.querySelector('[data-expand-list]');
  const contactsIcon = contactsButton.querySelector('[data-icon]');

  function menuReset(button, list, icon) {
    button.dataset.expandButton = 'is-closed';
    list.dataset.expandList = 'is-closed';
    icon.setAttribute('href', 'img/sprite_auto.svg#plus');
  }

  function menuClassChanger(button, list, icon, neighbourButton, neighbourList, neighbourIcon) {
    button.addEventListener('click', () => {
      if (button.dataset.expandButton === 'is-closed') {
        button.dataset.expandButton = 'is-open';
        list.dataset.expandList = 'is-open';
        neighbourButton.dataset.expandButton = 'is-closed';
        neighbourList.dataset.expandList = 'is-closed';
        icon.setAttribute('href', 'img/sprite_auto.svg#minus');
        neighbourIcon.setAttribute('href', 'img/sprite_auto.svg#plus');
      } else {
        button.dataset.expandButton = 'is-closed';
        list.dataset.expandList = 'is-closed';
        icon.setAttribute('href', 'img/sprite_auto.svg#plus');
      }
    });
  }

  menuReset(navigationButton, navigationList, navigationIcon);
  menuReset(contactsButton, contactsList, contactsIcon);
  menuClassChanger(navigationButton, navigationList, navigationIcon, contactsButton, contactsList, contactsIcon);
  menuClassChanger(contactsButton, contactsList, contactsIcon, navigationButton, navigationList, navigationIcon);
}

export {menuToggle};
