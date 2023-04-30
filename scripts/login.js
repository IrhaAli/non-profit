// Global Variable
let password;

$(async () => {
  // Get the password
  await fetch("../db/admin-password.txt")
    .then(response => response.text())
    .then((pass) => {
      password = pass
    })

  // Dynamically show button text
  const $adminLogin = $('#admin-login')
  $adminLogin.html((document.cookie) ? "Logout" : "Admin Login");

  // If Admin Login is clicked
  $adminLogin.on('click', loginCredentials)
});

const loginCredentials = function() {
  // If logged in vs not logged in
  if (document.cookie) {
    document.cookie = "admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    $(this).html("Admin Login");
  } else {
    const input = prompt("Please enter the admin password:");
    if (input === password) {
      document.cookie = "admin=true";
      $(this).html("Logout");
    }

  }

}