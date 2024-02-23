document.addEventListener("DOMContentLoaded", function() {
  // Function to scroll to the target element
  function scrollToElement(selector) {
    const targetElement = document.querySelector(selector);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  // Handle click event for '.scroll-down' button
  const scrollDownBtn = document.querySelector('.scroll-down');
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', function(e) {
      console.log("Enter Site clicked"); // Debugging line
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      // Smooth scroll to the target element
      scrollToElement(targetId);
    });
  }

  // Handle direct navigation or refresh with URL hash
  if (window.location.hash) {
    scrollToElement(window.location.hash);
  }

  // Optional: Show the masthead, if needed
  const masthead = document.querySelector('.masthead'); // Use the class to select the masthead
  if (masthead) {
    masthead.style.display = 'block'; // Adjust based on your layout needs
  }
});
