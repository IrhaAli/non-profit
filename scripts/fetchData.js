$(() => {
  var url = window.location.href;
  console.log("URL: ", url);

  if(url.indexOf("events")) fetchEvents();
  if(url.indexOf("projects")) fetchProjects();
});

const fetchEvents = () => {
  // To display all events
  fetch("../db/events.json")
    .then(response => response.json())
    .then((events) => {
      for (const event of events) {
        const $event = createEventElement(event);
        $('.events').append($event);
      }
    })
};

const fetchProjects = () => {
  // To display all projects
  fetch("../db/projects.json")
    .then(response => response.json())
    .then((projects) => {
      console.log(projects);
      for (const project of projects) {
        const $project = createProjectElement(project);
        $('.projects').append($project);
      }
    })
};

const createEventElement = function (event) {
  const $event = $(`
  <div class="events--card">
  <img src="${event.image_url}" class="events--card--img" />
  <div class="events--card--body">
    <h2 class="events--card--body--title">${event.title}</h2>
    <h3 class="events--card--body--location ">${event.location}</h3>
    <div class="events--card--body--date">
      <div class="events--card--body--date--text">${event.date}</div>
    </div>
    <p class="events--card--body--content">${event.description}</p>
    </div>
  </div>`);
  return $event;
};

const createProjectElement = function (project) {
  const $project = $(`
  <div class="projects--card">
  <img src="${project.image_url}" class="projects--card--img" />
  <div class="projects--card--body">
    <h2 class="projects--card--body--title">${project.title}</h2>
    <h3 class="projects--card--body--location ">${project.location}</h3>
    <div class="projects--card--body--date">
      <div class="projects--card--body--date--text">${project.date}</div>
    </div>
    <p class="projects--card--body--content">${project.description}</p>
    </div>
  </div>`);
  return $project;
};

const submitEvent = function(event) {
  // Initial settings
  event.preventDefault();
  const $errorMessage = $(this).find('#errMess');
  const $textArea = $(this).find('title');
  console.log($textArea)

  // Get validity of the event details
  const $title = $textArea.val();
  const $date = $textArea.val();
  const $location = $textArea.val();
  const $description = $textArea.val();
  const $image_url = $textArea.val();
  const validTweet = validate();

  // valid vs. invalid tweet
  if (!validTweet) {
    $errorMessage.css("display", "block");
    return;
  }
  // if tweet is valid send it to the server then prepend it to all tweets and clear textbox/textarea
  const tweetObj = { name: 'Irha', avatar: "/images/profile-hex.png", handle: "@IrhaAli", text: $tweetText };
  $.post("/tweets", tweetObj)
    .then(function(response) {
      $errorMessage.css("display", "none");
      const $tweet = createTweetElement(response);
      $('#tweets-container').prepend($tweet);
      $textArea.val('');
      $(this).find('output').text('140');
    })
    .catch(function(error) {
      console.log(error);
    });
};
