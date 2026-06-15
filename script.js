function showMessage() {
    window.location.href = "mailto:subashinib2008@gmail.com";
}

emailjs.init("rOiGjJQCrt_mP84NJ");

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_ylj4xdn",
        "template_umqnqb9",
        this
    )
    .then(function() {
        alert("Message Sent Successfully!");
        document.getElementById("contactForm").reset();
    })
    .catch(function(error) {
        console.log("EMAILJS ERROR:", error);
    alert("Failed to send message");
    });
    

    
});
console.log("Dark Mode Loaded");
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkBtn.innerHTML = "☀️ Light Mode";
    } else {
        darkBtn.innerHTML = "🌙 Dark Mode";
    }
});