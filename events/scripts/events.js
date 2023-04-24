// import eventList from "../db/events.json"

$(() => {
  console.log("jQuery loaded");
  // console.log("eventlist: ", eventList);

  fetch('../db/events.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});
