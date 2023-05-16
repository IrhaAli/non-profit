$(() => {
  $(window).on('scroll', handleScroll);
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