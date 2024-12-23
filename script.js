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
}};

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelector('.carousel-images');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 0;
  const totalImages = document.querySelectorAll('.car-item').length;

  function updateCarousel() {
    const offset = currentIndex * -100;
    images.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  }, 5000);
});

// Show car details
function showDetails(carModel, price) {
  alert(`Model: ${carModel}\nPrice: ${price}`);
}
