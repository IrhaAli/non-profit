// events object holding the events
const eventsObj = {
  0: {
    title: "Tech Conference",
    date: "2023-05-15 - 7:00pm",
    location: "Toronto, ON, Canada",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_url:
      "https://unknown.sytes.net/original_images/Food%20&%20Medcine/food%20&%20medicine-02.jpg",
  },
  1: {
    title: "Charity Run",
    date: "2023-06-10 - 11:00am",
    location: "Vancouver, BC, Canada",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_url:
      "https://unknown.sytes.net/original_images/Food%20&%20Medcine/food%20&%20medicine-02.jpg",
  },
};

const addNewEvent = (formData) => {
  eventsObj.title = formData[0].title;
  eventsObj.date = formData[2].date;
  eventsObj.location = formData[1].location;
  eventsObj.description = formData[4].description;
  eventsObj.image_url = formData[3].image_url;
};

$(() => {
  // To display all events
  // fetch("../db/events.json")
  //   .then((response) => response.json())
  //   .then((events) => {
  //     for (const event of events) {
  //       const $event = createEventElement(event);
  //       $(".events").append($event);
  //     }
  //   });
  console.log(eventsObj);
  loadEvents();

  // When add events button is clicked
  $("form").on("submit", submitEvent);
});

const loadEvents = () => {
  for (let singleEvent in eventsObj) {
    const event = eventsObj[singleEvent];
    const $event = createEventElement(event);
    $(".events").append($event);
  }
};

const createEventElement = function (event) {
  const $event = $(`
  <div class="events--card">
  <img src="${event.image_url}" class="events--card--img" />
  <div class="events--card--body">
    <h2 class="events--card--body--title">${event.title}</h2>
    <h3 class="events--card--body--title">${event.location}</h3>
    <div class="events--card--body--date">
      <div class="events--card--body--date--text">${event.date}</div>
    </div>
    <p class="events--card--body--content">${event.description}</p>
    </div>
  </div>`);
  return $event;
};

const submitEvent = function (event) {
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

  event.preventDefault();
  const formData = $(".eventForm").serializeArray();
  console.log("formData: ", formData);
  addNewEvent(formData);
  loadEvents();
  // writeToJSON(formData);
};

// const writeToJSON = (formData) => {
//   $.getJSON("../db/events.json", (data) => {
//     console.log("data: ", data);
//     data.push(formData);

//     $.ajax({
//       type: "POST",
//       url: "../db/events.json",
//       data: JSON.stringify(data),
//       dataType: "json",
//       contentType: "application/json",
//     }).then((res) => console.log(res));
//   });
// };
