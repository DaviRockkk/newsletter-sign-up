const subscriptionForm = document.getElementById('subscription__form');
const mainCard = document.getElementById('main__card');
const confirmation = document.getElementById('confirmation');

function showConfirmation(event) {
  event.preventDefault();
  mainCard.classList.add('hidden');
  confirmation.classList.remove('hidden');
}

function dismissConfirmation() {
  confirmation.classList.add('hidden');
  mainCard.classList.remove('hidden');
  subscriptionForm.reset();
}

subscriptionForm.addEventListener('submit', showConfirmation);