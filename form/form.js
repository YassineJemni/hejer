function validateAnswers() {
    const birthday = document.getElementById('birthday').value;
    const like = document.querySelector('input[name="like"]:checked');
    const food = document.querySelector('input[name="food"]:checked');
    const pet = document.getElementById('pet').value.trim().toLowerCase();
    const firstMeet = document.getElementById('firstMeet').value.trim();
    const truthConsent = document.querySelector('input[name="truth"]:checked');
    const yassineConsent = document.querySelector('input[name="yassine"]:checked');
    const errorMessage = document.getElementById('errorMessage');

    // Check if all answers are correct
    if (birthday !== '07/07/2003') {
        errorMessage.textContent = "Sorry, please check your answers!";
        return;
    }

    if (!like || like.value !== 'hejer') {
        errorMessage.textContent = "Sorry, please check your answers!";
        return;
    }

    if (!food || food.value !== 'lablebi') {
        errorMessage.textContent = "Sorry, please check your answers!";
        return;
    }

    if (pet !== 'michou') {
        errorMessage.textContent = "Sorry, please check your answers!";
        return;
    }

    if (firstMeet !== '08/11/2024') {
        errorMessage.textContent = "Sorry, please check your answers!";
        return;
    }

    if (!truthConsent || !yassineConsent) {
        errorMessage.textContent = "Sorry, please check your answers!";
        return;
    }

    // If all answers are correct, proceed to ask.html
    window.location.href = '../ask/ask.html';
}
