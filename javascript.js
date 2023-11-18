// hello world function.
console.log("Hello world!")

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Simulate form submission and show success message
      // In a real application, you'd likely send the data to a server using AJAX
      // and handle the response accordingly.
      showSuccessMessage();
    });
  
    function showSuccessMessage() {
      contactForm.classList.add('hidden');
      successMessage.classList.remove('hidden');
    }
  });
  