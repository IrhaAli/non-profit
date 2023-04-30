$(async () => {
  // Get the password
  let password;
  await fetch("../db/admin-password.txt")
    .then(response => response.text())
    .then((pass) => {
      password = pass
    })

    // If Admin Login is clicked

  });

  const loginCredentials = function() {
    const input = prompt("Please enter the admin password:");

    if (input === password) {
      // Set cookie
    }
  }