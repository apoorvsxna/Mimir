document.getElementById('submitIp').addEventListener('click', submitIp);
    
// Function to handle IP submission
function submitIp() {
    const userIpAddress = document.getElementById('ipInput').value;

    // Check if the user entered a valid IP address
    if (userIpAddress && /^(\d{1,3}\.){3}\d{1,3}$/.test(userIpAddress)) {
        const baseUrl = `http://${userIpAddress}:3000`;

        // Attach click event listeners to the buttons
        document.querySelectorAll('.key').forEach(button => {
            button.addEventListener('click', function() {
                const key = this.innerText;
                sendKeyToServer(key, baseUrl);
            });
        });

        // Display the entered IP address
        alert(`IP address entered: ${userIpAddress}`);
    } else {
        alert("Invalid IP address. Please enter a valid IP address.");
    }
}

// Function to send key to server
function sendKeyToServer(key, baseUrl) {
    fetch(`${baseUrl}/press?key=${key}`, {
        method: 'POST',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Handle Enter key press inside the input field
document.getElementById('ipInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        submitIp();
    }
});

// Prevent form submission to avoid page reload
document.getElementById('ipInputContainer').addEventListener('submit', function(event) {
    event.preventDefault();
});