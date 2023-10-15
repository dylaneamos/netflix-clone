// JavaScript for Netflix Clone

// Function to handle the "Sign Up" button click event
function handleSignUpClick() {
    // Placeholder for sign-up functionality
    alert("Sign Up functionality goes here.");
}

// Function to initialize the JavaScript after the DOM is loaded
function initializeNetflixClone() {
    // Add event listener for the "Sign Up" button
    const signUpButton = document.querySelector('.cta-button');
    if (signUpButton) {
        signUpButton.addEventListener('click', handleSignUpClick);
    }

 // JavaScript to toggle the "active" class on the mobile menu icon
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileMenuIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});


}

// Add event listener to initialize the JavaScript after the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeNetflixClone);
