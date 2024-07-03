const plusButtons = document.querySelectorAll('.fa-plus-circle');
const minusButtons = document.querySelectorAll('.fa-minus-circle');
const trashButtons = document.querySelectorAll('.fa-trash-alt');
const heartButtons = document.querySelectorAll('.fa-heart');
const totalPriceElement = document.querySelector('.total');

const updateTotalPrice = () => {
  let total = 0;
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const quantity = parseInt(card.querySelector('.quantity').textContent);
    const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace('$', ''));
    total += quantity * unitPrice;
  });
  totalPriceElement.textContent = total + ' Fcfa';
};

plusButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const quantityElement = e.target.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
    updateTotalPrice();
  });
});

minusButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const quantityElement = e.target.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantityElement.textContent = quantity - 1;
      updateTotalPrice();
    }
  });
});

trashButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    card.remove();
    updateTotalPrice();
  });
});

heartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.target.classList.toggle('liked');
  });
});
