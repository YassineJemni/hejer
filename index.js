
const popup = document.getElementById('popup');
const passwordInput = document.getElementById('password');
const confirmButton = document.getElementById('confirm');
const cancelButton = document.getElementById('cancel');
const errorMessage = document.getElementById('error-message');


const correctPassword = "guelblouz";


confirmButton.addEventListener('click', () => {
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === correctPassword) {
    
    window.location.href = 'icons/icons.html';
  } else {
    
    errorMessage.style.display = 'block';
    errorMessage.textContent = "Wrong password! You will be redirected.";
    setTimeout(() => {
      window.location.href = 'https://www.youtube.com/watch?v=NXiZNwjEnUA'; 
    }, 1000); 
  }
});


cancelButton.addEventListener('click', () => {
  window.location.href = 'https://www.youtube.com/watch?v=NXiZNwjEnUA²'; 
});
