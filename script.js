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


function showMore() {
  const content = document.getElementById("Body");
  const button = document.getElementById("showmoreB");

  if (content.style.display === "none") {
    content.style.display = "block";
    button.textContent = "Show Less";
  } else {
    content.style.display = "none";
    button.textContent = "Show More";
  }
}