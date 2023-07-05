function cancel() {
  window.open("Start.html");
}
function verifyPassword() {
  const passwordInput = document.getElementById("password");
  if (passwordInput.value === "password") {
    return true;
  } else {
    alert("Invalid password");
    return true; // prevent the form from being submitted
  }
}
