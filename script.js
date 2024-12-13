// Get DOM elements
const emailInput = document.getElementById('email');
const voteBtn = document.getElementById('vote-btn');
const resultDiv = document.getElementById('result');

// Function to handle voting
voteBtn.addEventListener('click', () => {
    // Get selected option
    const selectedOption = document.querySelector('input[name="option"]:checked');

    // Check if an option is selected
    if (!selectedOption) {
        alert('Please select an option.');
        return;
    }

    // Get email address
    const email = emailInput.value.trim();

    // Validate email format (simple regex for demonstration)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate sending vote data (replace with actual server-side logic)
    console.log('Email:', email);
    console.log('Selected Option:', selectedOption.value);

    // Display success message
    resultDiv.style.display = 'block';
    // resultDiv.textContent = 'Thank you for voting!'; // Optional: Display a thank you message

    // Clear email input field and selected option
    emailInput.value = '';
    selectedOption.checked = false; // Clear selected option

    // Disable voting button and radio buttons after submission
    voteBtn.disabled = true;
    const radioButtons = document.querySelectorAll('input[name="option"]');
    radioButtons.forEach(radio => {
        radio.disabled = true;
    });
});