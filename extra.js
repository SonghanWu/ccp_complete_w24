document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.photo-gallery img');
    var viewportWidth = window.innerWidth;
    if (viewportWidth < 600) {
        images.forEach(function(image) {
            image.addEventListener('mouseenter', function() {
                image.classList.add('shake_small');
            });
            image.addEventListener('mouseleave', function() {
                image.classList.remove('shake_small');
            });
        });
    }
    else {
        images.forEach(function(image) {
            image.addEventListener('mouseenter', function() {
                image.classList.add('shake_big');
            });
            image.addEventListener('mouseleave', function() {
                image.classList.remove('shake_big');
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var body = document.querySelector('body');
    var lightness = 95;
    var currentTime = new Date().getHours();
    var gradientColor = `linear-gradient(to right, hsl(${currentTime}, 100%, ${lightness}%), hsl(${currentTime}, 100%, ${lightness + 10}%))`;
    body.style.background = gradientColor;
});