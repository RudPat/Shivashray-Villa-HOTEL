// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the contact form
    const contactForm = document.querySelector('form');

    // Add an event listener to handle form submission
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        // Collect user input
        const name = contactForm.elements['name'].value;
        const email = contactForm.elements['email'].value;
        const message = contactForm.elements['message'].value;

        // Check if all fields are filled
        if (name && email && message) {
            // Display feedback using an alert or log to the console
            alert(`Thank you, ${name}! We have received your message:\n\n"${message}"\nWe will contact you shortly at ${email}.`);
            
            // Optionally, log the feedback to the console (for debugging)
            console.log(`Feedback received from ${name} (${email}): ${message}`);

            // Clear the form fields
            contactForm.reset();
        } else {
            // If any field is empty, show an error alert
            alert('Please fill in all the required fields.');
        }
    });
});
