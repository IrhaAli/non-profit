// Global Variables
let loggedIn = true;
let totalEvents;

$(async () => {
  // Display add event form option
  const $showForm = $('form');
  $showForm.css("display", (loggedIn) ? "block" : "none");

  // To display all events
  await fetch("../db/events.json")
    .then(response => response.json())
    .then((events) => {
      totalEvents = events.length;
      for (let id = 0; id < totalEvents; id++) {
        const event = events[id];
        const $event = createEventElement(event, id);
        $(".events").append($event);
      }
    })

  // When event is added
  $("form").on("submit", submitEvent);

  // When event is removed
  $(".del-eve").on("click", deleteEvent);
});

const createEventElement = function(event, id) {
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
  totalEvents++;

  // Get the event
  const formData = $(".eventForm").serializeArray();
  const eventDetails = {}
  for (const item of formData) {
    const $textArea = $(this).find(`textarea[name="${item.name}"`);
    const $value = $textArea.val();
    $textArea.val("");
    eventDetails[`${item.name}`] = $value;
  }

  // Add event to JSON file
  // addNewEvent(eventDetails);

  // Update event list (frontend)
  const $event = createEventElement(eventDetails, totalEvents);
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
