// Show car details
function showDetails(carModel, price) {
    alert(`Model: ${carModel}\nPrice: ${price}`);
}

// Form submission handling
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
    } else {
        alert('Please fill out all fields.');
    }
});

// Carousel functionality
const images = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalImages = images.children.length;

function updateCarousel() {
    const offset = currentIndex * -100; // Calculate the horizontal shift
    images.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages; // Move to the next image
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Move to the previous image
    updateCarousel();
});

// Optional: Auto-swipe every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}, 5000);

let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  currentIndex = (currentIndex + step + totalSlides) % totalSlides;
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
  moveSlide(1); // Automatically move to the next slide every 5 seconds
}, 5000);
