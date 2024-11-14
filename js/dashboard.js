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
  