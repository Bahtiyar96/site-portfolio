// Service section - Modal
const serviceModal = document.querySelectorAll('.service-modal');
const learnMoreBtn = document.querySelectorAll('.learn-more-btn');
const modalCloseBtn = document.querySelectorAll('.modal-close-btn');

const modal = function(modalClick){
   serviceModal[modalClick].classList.add('active')
}

learnMoreBtn.forEach((button, i) => {
   button.addEventListener('click', function(){
      modal(i)
   })
})

modalCloseBtn.forEach(button => {
   button.addEventListener('click', () => {
      serviceModal.forEach(modal => {
         modal.classList.remove('active')
      })
   })
})

// Portfolio section - Modal
const portfolioModals = document.querySelectorAll('.portfolio-model');
const imgCard = document.querySelectorAll('.img-card');
const portfolioCloseBtn = document.querySelectorAll('.portfolio-close-btn');

const portfolioModal = function(modalClick){
   portfolioModals[modalClick].classList.add("active");
};

imgCard.forEach((button, i) => {
   button.addEventListener("click", () => {
      portfolioModal(i);
   });
});

portfolioCloseBtn.forEach(button => {
   button.addEventListener("click", () => {
      portfolioModals.forEach(modelView => {
         modelView.classList.remove("active")
      })
   })
})