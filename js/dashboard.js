const firebaseConfig = {
  apiKey: "AIzaSyBMDTAYpyTVpXuJ7WZYe4k4ST1nOz214sw",
  authDomain: "database225-beea1.firebaseapp.com",
  projectId: "database225-beea1",
  storageBucket: "database225-beea1.firebasestorage.app",
  messagingSenderId: "417526537882",
  appId: "1:417526537882:web:78bfc0c1be09ce7f42c923",
  measurementId: "G-PF89NZ4ZL4"
};

// Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebaseApp.auth();
 
  db.collection("bank").add({
    balance: parseFloat(localStorage.getItem("balance")),
    type: "Logout",
    history: JSON.parse(localStorage.getItem("transactions"))
  });




// Initialize balance in localStorage if not set
if (localStorage.getItem("balance") === null) {
  localStorage.setItem("balance", "10000"); // Default balance: $10,000
}

// Retrieve balance from localStorage
let balance = parseFloat(localStorage.getItem("balance")) || 0;

// Debugging: Log balance to ensure it's retrieved correctly
console.log("Current Balance:", balance);

// Function to display the balance on the Dashboard
function displayBalance() {
  const balanceElement = document.getElementById("balance");

  if (balanceElement) {
      balanceElement.textContent = `$${balance.toFixed(2)}`;
      console.log("Balance displayed:", balance);
  } else {
      console.error("Balance element not found on the page.");
  }
}

// Call the display function on page load
displayBalance();

/*
  // Logout function to end session
  function logout() {
    //localStorage.removeItem("isLoggedIn"); // Remove login flag from localStorage
    // save the stuff in localStroage to the database
 console.log("logout function called");
    db.collection("bank").add({
      balance: parseFloat(localStorage.getItem("balance")),
      type: "Logout",
      history: JSON.parse(localStorage.getItem("transactions"))
    });


    window.location.href = "./login.html"; // Redirect to login page
  }
  */

 /*
    // Event listener to run after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Redirect to login page if user is not logged in
  if (!localStorage.getItem("isLoggedIn")) {
      window.location.href = "./login.html"; // Redirects unauthenticated users
  }

  // Retrieve the balance from localStorage or initialize if not set
  let balance = parseFloat(localStorage.getItem("balance"));

  if (isNaN(balance)) {
      balance = 10000; // Set default balance to $10,000 if not available
      localStorage.setItem("balance", balance.toString()); // Save balance to localStorage
  }

  // Display the balance in the dashboard
  document.getElementById("balance").textContent = `$${balance.toFixed(2)}`; // Format balance to 2 decimal places
});

// Logout function to end session
function logout() {
  localStorage.removeItem("isLoggedIn"); // Remove login flag from localStorage
  window.location.href = "./login.html"; // Redirect to login page
}*/
  