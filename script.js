function unlock() {
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");
  const content = document.getElementById("protected-content");

  if (password === "CORESTUDIOBESTADMINS!@#@") {
    content.hidden = false;
    message.textContent = "Access granted!";
  } else {
    content.hidden = true;
    message.textContent = "Incorrect password!";
  }
}
