function validateForm() {
    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Validate Name
    if (name === "") {
      alert("Name is required.");
      return false;
    }
    if (name.length < 2) {
      alert("Name must be at least 2 characters long.");
      return false;
    }
  
    // Validate Email
    if (email === "") {
      alert("Email is required.");
      return false;
    }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Validate Message
    if (message === "") {
      alert("Message is required.");
      return false;
    }
    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return false;
    }
  
    // All validations passed
    alert("Form submitted successfully!");
    return true;
  }
  
  // Helper function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  