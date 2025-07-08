function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  const error = document.getElementById('error');
  if (input === "8787") {
    window.location.href = "home.html";
  } else {
    error.textContent = "Incorrect password. Try again!";
  }
}

