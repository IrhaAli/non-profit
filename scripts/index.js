$(() => {
  // To display all events
  fetch("../db/images.json")
    .then(response => response.json())
    .then(({ images }) => {
      for (let i = 0; i < images.length; i++) {
        const { $image, $imageSelected } = createImageElement(images[i], i);
        $('#images').append($image);
        $('.carousel-inner').append($imageSelected);
      }
    })

  // When add image button is clicked
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

const submitImage = function(image) {
  // // Initial settings
  // event.preventDefault();
  // const $errorMessage = $(this).find('#errMess');
  // const $textArea = $(this).find('title');
  // console.log($textArea)

  // // Get validity of the event details
  // const $title = $textArea.val();
  // const $date = $textArea.val();
  // const $location = $textArea.val();
  // const $description = $textArea.val();
  // const $image_url = $textArea.val();
  // const validTweet = validate();

  // // valid vs. invalid tweet
  // if (!validTweet) {
  //   $errorMessage.css("display", "block");
  //   return;
  // }
  // // if tweet is valid send it to the server then prepend it to all tweets and clear textbox/textarea
  // const tweetObj = { name: 'Irha', avatar: "/images/profile-hex.png", handle: "@IrhaAli", text: $tweetText };
  // $.post("/tweets", tweetObj)
  //   .then(function(response) {
  //     $errorMessage.css("display", "none");
  //     const $tweet = createTweetElement(response);
  //     $('#tweets-container').prepend($tweet);
  //     $textArea.val('');
  //     $(this).find('output').text('140');
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
};