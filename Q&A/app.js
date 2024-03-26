document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach(function(faqItem) {
      const question = faqItem.querySelector(".questions");
      const answer = faqItem.querySelector(".answer");
      const toggleButton = question.querySelector(".toggle-answer-btn");
  
      toggleButton.addEventListener("click", function() {
        answer.classList.toggle("show-answer");
        
        // Change the button icon
        if (toggleButton.classList.contains("open")) {
          toggleButton.innerHTML = '<i class="fas fa-plus"></i>';
        } else {
          toggleButton.innerHTML = '<i class="fas fa-minus"></i>';
        }
  
        toggleButton.classList.toggle("open");
      });
    });
  });
  