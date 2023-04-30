$(() => {
  // To display all images
  fetch("../db/images.json")
    .then(response => response.json())
    .then((images) => {
      for (let i = 0; i < images.length; i++) {
        const { $image, $imageSelected } = createImageElement(images[i], i);
        $('#images').append($image);
        $('.carousel-inner').append($imageSelected);
      }
    })

  // Display add image form
  let loggedIn = true;
  const $showForm = $('form');
  $showForm.css("display", (loggedIn) ? "block" : "none");

  // Add Image
  $('form').on('submit', submitImage);
});

const createImageElement = function(image, i) {
  const $image = $(`<div class="col-12 col-md-6 col-lg-3">
  <img src="${image}" data-target="#indicators" data-slide-to="0" alt="" />
  </div>`)
  const $imageSelected = $(`<div class="carousel-item ${(i) ? '' : 'active'}">
  <img class="d-block w-100" src="${image}" alt="">
  </div>`);
  return { $image, $imageSelected };
};

const submitImage = function(event) {
  // // Initial settings
  event.preventDefault();
  const $textArea = $(this).find('textarea');
  const $imageUrl = $textArea.val();

  // Add it to the JSON file
  // addNewImage($imageUrl);

  // Update image list (frontend)
  const { $image, $imageSelected } = createImageElement($imageUrl, true);
  $('#images').append($image);
  $('.carousel-inner').append($imageSelected);
};