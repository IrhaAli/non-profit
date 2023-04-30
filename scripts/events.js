$(async () => {
  // Display add event form option
  let loggedIn = true;
  const $showForm = $('form');
  $showForm.css("display", (loggedIn) ? "block" : "none");

  // To display all events
  await fetch("../db/events.json")
    .then(response => response.json())
    .then((events) => {
      loadEvents(events, loggedIn)
    })

  // When event is added
  $("form").on("submit", submitEvent);

  // When event is removed
  $(".del-eve").on("click", deleteEvent);
});

const loadEvents = (eventsArr, loggedIn) => {
  for (let id = 0; id < eventsArr.length; id++) {
    const event = eventsArr[id];
    const $event = createEventElement(event, id, loggedIn);
    $(".events").append($event);
  }
};

const createEventElement = function(event, id, loggedIn) {
  const $event = $(`
  <div class="events--card" id="${id}">
  <img src="${event.image_url}" class="events--card--img" />
  <div class="events--card--body">
    <h2 class="events--card--body--title">${event.title}</h2>
    <h3 class="events--card--body--title">${event.location}</h3>
    <div class="events--card--body--date">
      <div class="events--card--body--date--text">${event.date}</div>
    </div>
    <p class="events--card--body--content">${event.description}</p>
    </div>
    ${(loggedIn) ? '<button class="del-eve"><i class="fa fa-trash-o" style="font-size:48px;color:red"></i></button>' : ''}
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

const deleteEvent = function(event) {
  // Initial settings
  event.preventDefault();
  const eventId = $(this).closest('.events--card').attr('id');

  // Remove event from JSON file
  // removeEvent(eventId);

  // Update event list (frontend)
   $(`#${eventId}`).css("display", 'none');
}
