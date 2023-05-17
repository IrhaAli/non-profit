$(() => {
  $(window).on('scroll', handleScroll);

  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-items');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
  })
});

// add color on scroll
const handleScroll = () => {
  const navbar = document.querySelector(".header");

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}