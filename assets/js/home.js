document.addEventListener("DOMContentLoaded", function() {
  const scrollDownBtn = document.querySelector('.scroll-down');

  scrollDownBtn.addEventListener('click', function(e) {
    console.log("Enter Site clicked"); // Debugging line
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Smooth scroll to the target element
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });

    // Show the masthead
    const masthead = document.querySelector('.masthead'); // Use the class to select the masthead
    if (masthead) {
      masthead.style.display = 'block'; // Or 'flex', depending on your layout needs
    }
  });
});
