$(() => {
  $("#admin-login").on("click", loginCredentials);
});

const loginCredentials = function (event) {
  // Initial Settings
  event.preventDefault();

  let password = prompt("Please enter the admin password:");

  console.log(password)
}