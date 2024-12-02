function showTransactions() {
    document.getElementById("transactions").style.display = "block";
    document.getElementById("transfer").style.display = "none";
  }
  
  function showTransfer() {
    document.getElementById("transactions").style.display = "none";
    document.getElementById("transfer").style.display = "block";
  }
  
  function transferFunds() {
    const amount = parseFloat(document.getElementById("amount").value);
    const balanceElement = document.getElementById("balance");
    let balance = parseFloat(balanceElement.textContent.replace("$", ""));
    
    if (amount > 0 && amount <= balance) {
      balance -= amount;
      balanceElement.textContent = `$${balance.toFixed(2)}`;
      alert("Transfer successful!");
    } else {
      alert("Insufficient funds or invalid amount.");
    }
  }

  // Logout function to end session
  function logout() {
    localStorage.removeItem("isLoggedIn"); // Remove login flag from localStorage
    window.location.href = "./login.html"; // Redirect to login page
  }

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
  