// Initialize balance in localStorage if not set
if (localStorage.getItem("balance") === null) {
    localStorage.setItem("balance", "10000"); // Set initial balance to $10,000
}

// Retrieve the balance from localStorage
let balance = parseFloat(localStorage.getItem("balance"));
console.log("Initial balance:", balance); // Debugging balance initialization

// Function to update the balance display in both sections
function updateBalanceDisplay() {
    document.getElementById("remaining-balance").textContent = `$${balance.toFixed(2)}`;
    document.getElementById("updated-balance").textContent = `$${balance.toFixed(2)}`;
    console.log("Updated balance displayed:", balance); // Debugging display update
}

// Initial display update on page load
updateBalanceDisplay();

// Function to save a transaction to localStorage
function saveTransaction(type, amount) {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    const newTransaction = {
        type: type, // "Transfer" or "Deposit"
        amount: parseFloat(amount),
        date: new Date().toLocaleString(), // Timestamp
    };
    transactions.push(newTransaction); // Add the new transaction to the list
    localStorage.setItem("transactions", JSON.stringify(transactions)); // Save the updated list
    console.log("Transaction saved:", newTransaction); // Debugging transaction saving
}

// Function for transferring funds
function transferFunds() {
    console.log("Transfer function called"); // Debugging function call
    const amount = parseFloat(document.getElementById("transfer-amount").value);
    console.log("Transfer amount entered:", amount); // Debugging amount entered

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid transfer amount.");
    } else if (amount > balance) {
        alert("Insufficient funds.");
    } else {
        balance -= amount;
        localStorage.setItem("balance", balance.toString()); // Update balance in localStorage
        updateBalanceDisplay(); // Update displayed balance
        saveTransaction("Transfer", amount); // Save the transaction
        alert("Transfer successful!");
        console.log("Balance after transfer:", balance); // Debugging updated balance
    }
}

// Function for depositing funds
function depositFunds() {
    console.log("Deposit function called"); // Debugging function call
    const depositAmount = parseFloat(document.getElementById("deposit-amount").value);
    console.log("Deposit amount entered:", depositAmount); // Debugging amount entered

    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Please enter a valid deposit amount.");
    } else {
        balance += depositAmount;
        localStorage.setItem("balance", balance.toString()); // Update balance in localStorage
        updateBalanceDisplay(); // Update displayed balance
        saveTransaction("Deposit", depositAmount); // Save the transaction
        alert("Deposit successful!");
        console.log("Balance after deposit:", balance); // Debugging updated balance
    }
}
