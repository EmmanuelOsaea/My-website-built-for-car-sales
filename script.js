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

// Optional: Auto-swipe every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}, 5000);

$('.carousel').slick({
  slidesToShow: 6, // Display 6 slides at once
  slidesToScroll: 1, // Scroll 1 slide at a time
  infinite: true, // Keeps scrolling infinitely
  autoplay: true, // Optional: Autoplay the slides
  autoplaySpeed: 5000, // Change slide every 2 seconds
});
