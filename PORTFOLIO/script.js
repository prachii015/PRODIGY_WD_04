
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // For demonstration, we'll just log the data to the console
    console.log(Name: ${name}, Email: ${email}, Message: ${message});
    
    // Here you can add code to send this data to your email or a server
    alert('Thank you for your message!');
});
