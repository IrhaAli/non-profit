$(async () => {
  // Display add image form
  let loggedIn = true;
  const $showForm = $('form');
  $showForm.css("display", (loggedIn) ? "block" : "none");

  // Total images
  let totalImages;

  // To display all images
  await fetch("../db/images.json")
    .then(response => response.json())
    .then((images) => {
      totalImages = images.length;
      for (let i = 0; i < totalImages; i++) {
        const $image = createImageElement(images[i], i, loggedIn);
        $('#images').append($image);
      }
    })

  // Add Image
  $('form').on('submit', (event) => submitImage(event, totalImages, loggedIn));

  // Remove Image
  $(".del-img").on("click", deleteImage);
});

const createImageElement = function(image, id, loggedIn) {
  const $image = $(`<div class="image" id="${id}">
  <div class="col-12 col-md-6 col-lg-3">
  <img src="${image}" data-target="#indicators" data-slide-to="0" alt="" />
  </div>
  ${(loggedIn) ? '<button class="del-img"><i class="fa fa-trash-o" style="font-size:48px;color:red"></i></button>' : ''}
  </div>
  `)
  return $image
};

const submitImage = function(event, totalImages, loggedIn) {
  // // Initial settings
  event.preventDefault();
  const $textArea = $(this).find('textarea');
  const $imageUrl = $textArea.val();
  totalImages++;

  // Add it to the JSON file
  // addNewImage($imageUrl);

  // Update image list (frontend)
  const $image = createImageElement($imageUrl, totalImages, loggedIn);
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