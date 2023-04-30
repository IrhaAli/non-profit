// Global Variables
let loggedIn = document.cookie;
let totalImages;

$(async () => {
  // Display add image form
  const $showForm = $('form');
  $showForm.css("display", (loggedIn) ? "block" : "none");

  // To display all images
  await fetch("../db/images.json")
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

  // Remove Image
  $(".del-img").on("click", deleteImage);
});

const createImageElement = function(image_url, id) {
  const $image = $(`<div class="image" id="${id}">
  <div class="col-12 col-md-6 col-lg-3">
  <img src="${image_url}" data-target="#indicators" data-slide-to="0" alt="" />
  </div>
  ${(loggedIn) ? '<button class="del-img"><i class="fa fa-trash-o" style="font-size:48px;color:red"></i></button>' : ''}
  </div>
  `)
  return $image
};

const submitImage = function(event) {
  // // Initial settings
  event.preventDefault();
  const $textArea = $(this).find('textarea');
  const $imageUrl = $textArea.val();
  $textArea.val("");
  totalImages++;

  // Add it to the JSON file
  // addNewImage($imageUrl);

  // Update image list (frontend)
  const $image = createImageElement($imageUrl, totalImages);
  $('#images').append($image);
};

const deleteImage = function(event) {
  // Initial settings
  event.preventDefault();
  const imageId = $(this).closest('.image').attr('id');

  // Remove event from JSON file
  // removeEvent(eventId);

  // Update event list (frontend)
  $(`#${imageId}`).css("display", 'none');
}