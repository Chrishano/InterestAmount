function calculateInterest() {
    // Get input values
    const principalInput = document.getElementById('principalInput');
    const rateInput = document.getElementById('rateInput');
    const timeInput = document.getElementById('timeInput');
  
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value) / 100; // Convert percentage to decimal
    const time = parseFloat(timeInput.value);
  
    // Check if the inputs are valid numbers
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      alert('Please enter valid numbers for principal, rate, and time.');
      return;
    }
  
    // Calculate simple interest
    const interest = (principal * rate * time) / 100;
  
    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Simple Interest: $${interest.toFixed(2)}`;
  }
  