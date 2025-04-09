  const shareIcon = document.querySelector('.icon-share');
  const shareMenu = document.querySelector('.share-menu');

  shareIcon.addEventListener('click', ()=>  {
    shareMenu.classList.toggle('show-menu');
    shareIcon.classList.toggle('active');
  });
