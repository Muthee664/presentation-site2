// JavaScript to handle modal functionality and form submission

function openModal(title) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('donationModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('donationModal').classList.add('hidden');
}

document.getElementById('donationForm').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const amount = document.getElementById('amount').value;
  
  // Process donation (for example, send to backend or third-party service)
  alert(`Thank you for your donation, ${name}! You have donated $${amount}.`);
  
  closeModal();
  
  // Optionally reset the form
  document.getElementById('donationForm').reset();
});
