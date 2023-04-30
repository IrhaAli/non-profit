$(() => {
  // To display all events
  fetch("../db/events.json")
    .then(response => response.json())
    .then((events) => {
      loadEvents(events)
    })

  // Display add event form option
  let loggedIn = true;
  const $showForm = $('form');
  $showForm.css("display", (loggedIn) ? "block" : "none");


  // When event is added
  $("form").on("submit", submitEvent);
});

const loadEvents = (eventsObj) => {
  for (let singleEvent in eventsObj) {
    const event = eventsObj[singleEvent];
    const $event = createEventElement(event);
    $(".events").append($event);
  }
};

const createEventElement = function(event) {
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

const submitEvent = function(event) {
  // Initial settings
  event.preventDefault();


  // Get the event
  const formData = $(".eventForm").serializeArray();
  const eventDetails = {}
  for (const item of formData) {
    const $value = item.value
    eventDetails[`${item.name}`] = $value;
  }

  // Add event to JSON file
  // addNewEvent(eventDetails);

  // Update event list (frontend)
  const $event = createEventElement(eventDetails);
  $(".events").append($event);
};
