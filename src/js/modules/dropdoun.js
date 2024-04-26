const initializeDropdown = () => {
  const list = document.querySelector('.faq__list');

  list.addEventListener('click', (event) => {
    if (!event.target.classList.contains('drop-down-btn')) return;

    const listItem = event.target.closest('.faq__item');

    const content = listItem.querySelector('.faq__item-content');
    const openBtn = listItem.querySelector('.icon--open-icon');
    const closeBtn = listItem.querySelector('.icon--close-icon');

    content.classList.toggle('is-shown');
    openBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
  });
};

export default initializeDropdown;
