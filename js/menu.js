(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-Menu-open]'),
    closeMenuBtn: document.querySelector('[data-Menu-close]'),
      Menu: document.querySelector('[data-Menu]'),
      body: document.querySelector('body'),
    };
    // console.log(refs.body)

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.Menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');

    }
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
        !refs.Menu.classList.contains('is-hidden') ?
            refs.Menu.classList.add('is-hidden') : '';
        
        if (refs.modal) {
            refs.body.classList.contains('no-scroll')
                && refs.modal.classList.contains('is-hidden')
                ? refs.body.classList.remove('no-scroll') : '';
        } else {
            refs.body.classList.contains('no-scroll')
                ? refs.body.classList.remove('no-scroll') : '';
        }

        }
    })
})();