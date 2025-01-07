const initNav = () => {
  const navLinks = document.querySelectorAll('.menu_link');
  navLinks.forEach(link => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      const id = link.id;
      window.location.href = './newproducts.html';
      console.log(id)
    });
  });
};

export { initNav };
