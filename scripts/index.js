$(() => {
  $(window).on('scroll', handleScroll);

  // To display all events
  fetch("../db/images.json")
    .then(response => response.json())
    .then((images) => {
      totalImages = images.length;
      for (let i = 0; i < totalImages; i++) {
        const $image = createImageElement(images[i], i);
        $('#images').append($image);
      }
    })

  // Add Image
  $('form').on('submit', submitImage);

  // $(".container").slick();
});

const createImageElement = function (image, i) {
  const $image = $(`<div class="col-12 col-md-6 col-lg-3">
  <img src="${image}" data-target="#indicators" data-slide-to="0" alt="" />
  </div>`)
  const $imageSelected = $(`<div class="carousel-item ${(i) ? '' : 'active'}">
  <img class="d-block w-100" src="${image}" alt="">
  </div>`);
  return { $image, $imageSelected };
};

const submitImage = function (event) {
  // // Initial settings
  event.preventDefault();
  const $textArea = $(this).find('textarea');
  const $imageUrl = $textArea.val();
  $textArea.val("");
  totalImages++;

  // If invalid url
  if (!$imageUrl) {
    $errorMessage.text('Please type something');
    $errorMessage.css("display", "block");
    return;
  }

  // If valid url add it to the JSON file

};

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