document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if(name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else {
            alert(`Thank you, ${name}! Your message has been sent.`);
            form.reset(); // Reset the form fields
        }
    });
});
