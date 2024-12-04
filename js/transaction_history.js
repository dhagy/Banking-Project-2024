// Transaction History Script
document.addEventListener("DOMContentLoaded", () => {
    // Load transactions from localStorage
    const transactionList = document.getElementById("transaction-list");
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    console.log(localStorage);

    // Display transactions
    if (transactions.length === 0) {
        const noTransactions = document.createElement("li");
        noTransactions.textContent = "No transactions available.";
        transactionList.appendChild(noTransactions);
    } else {
        transactions.forEach((transaction) => {
            const transactionItem = document.createElement("li");
            transactionItem.textContent = `${transaction.type}: $${transaction.amount.toFixed(2)} on ${transaction.date}`;
            transactionList.appendChild(transactionItem);
        });
    }
});


function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "./login.html";
}
