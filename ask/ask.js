const btnNo = document.getElementById('btnNo');

// Function to navigate to the Yes page
function goToYesPage() {
    window.location.href = '../yes/yes.html';
}

// Function to move the No button randomly from the first click
function moveButton() {
    const maxWidth = window.innerWidth - btnNo.clientWidth;
    const maxHeight = window.innerHeight - btnNo.clientHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    btnNo.style.position = 'absolute';
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
}