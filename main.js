document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    const photoElements = document.querySelectorAll('.photo1, .photo2, .photo3');
    const ulannElements = document.querySelectorAll('.ulann1, .ulann2, .ulann3');
    let showPhotos = true;

    heart.addEventListener('click', () => {
        if (showPhotos) {
            photoElements.forEach(el => el.style.display = 'none');
            ulannElements.forEach(el => el.style.display = 'block');
        } else {
            photoElements.forEach(el => el.style.display = 'block');
            ulannElements.forEach(el => el.style.display = 'none');
        }
        showPhotos = !showPhotos;
    });

    // Set initial state
    photoElements.forEach(el => el.style.display = 'block');
    ulannElements.forEach(el => el.style.display = 'none');
});