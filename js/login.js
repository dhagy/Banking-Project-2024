function login() {
  window.location.href = "../dashboard.html";
  console.log("Login function called");
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  if (username === "user" && password === "password") {
    // Redirect to the dashboard page
    window.location.href = "../dashboard.html";
  } else {
    alert("Incorrect username or password.");
  }
}