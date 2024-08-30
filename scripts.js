document.addEventListener('DOMContentLoaded', () => {
    const roleElement = document.querySelector('.highlight');

    // Function to change text content
    function changeText() {
        roleElement.classList.add('animate-text');
        setTimeout(() => {
            roleElement.textContent = 'Freelancer';
            roleElement.classList.remove('animate-text');
        }, 2000); // Matches the duration of the fade-out animation
    }

    // Change text after 3 seconds
    setTimeout(changeText, 3000);
});
function toggleContent(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
// script.js

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});
