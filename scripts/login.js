// Global Variables
let password;
let cookieKey;
let cookieValue;

$(async () => {
  // Get the password
  await fetch("../db/admin-password.txt")
    .then(response => response.text())
    .then((loginDetails) => {
      [password, cookieKey, cookieValue] = loginDetails.split('\n');
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
    document.cookie = `${cookieKey}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
    $(this).html("Admin Login");
  } else {
    const input = prompt("Please enter the admin password:");
    const decryptedPassword = CryptoJS.AES.decrypt(password, "Secret Passphrase").toString(CryptoJS.enc.Utf8);
    if (input === decryptedPassword) {
      document.cookie = `${cookieKey}=${cookieValue}; path=/`;
      $(this).html("Logout");
    }

  }

}