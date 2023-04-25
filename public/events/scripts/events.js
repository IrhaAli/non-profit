
$(() => {
  console.log("jQuery loaded");
  fetch("db/events.json") 
	.then(response => response.json()) 
  .then((parsed) => {
    console.log(parsed)
  })
});
