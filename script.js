document.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll('.add-btn');
    
    addButtons.forEach(button => {
      button.addEventListener('click', () => {
        const item = button.dataset.item.replace(/\s+/g, '-'); 
        const countElement = document.getElementById(`${item}-count`);
        const currentCount = parseInt(countElement.textContent);
        countElement.textContent = currentCount + 1;
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const orderBtn = document.querySelector('.order-btn');
  
    orderBtn.addEventListener('click', () => {
      alert('Order placed! Thank you for choosing Sweet Smith Bakery. Come again soon!');
    });
  });