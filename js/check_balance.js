// Initialize balance in localStorage if not set
if (localStorage.getItem("balance") === null) {
    localStorage.setItem("balance", "10000"); // Set initial balance
}

// Retrieve the balance from localStorage
let balance = parseFloat(localStorage.getItem("balance"));

// Display the balance in the balance display area
document.getElementById("balance").textContent = `$${balance.toFixed(2)}`;

// Function for transferring funds (used in transfer_funds.js)
function transferFunds() {
    const amount = parseFloat(document.getElementById("amount").value);

    if (amount > 0 && amount <= balance) {
        balance -= amount;
        // Update the balance in localStorage
        localStorage.setItem("balance", balance.toString());

        // Update the displayed balance
        document.getElementById("balance").textContent = `$${balance.toFixed(2)}`;
        document.getElementById("balance-display").textContent = `Remaining Balance: $${balance.toFixed(2)}`;
        
        alert("Transfer successful!");
    } else {
        alert("Insufficient funds or invalid amount.");
    }
}
