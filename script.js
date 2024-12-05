function showDetails(carModel, price) {
    alert(`Model: ${carModel}\nPrice: ${price}`);
}

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

let index = 0;

const images = document.querySelector('.carousel-images');
const items = document.querySelectorAll('.car-item');
const totalItems = items.length;

document.querySelector('.prev').addEventListener('click', () => {
    index = (index > 0) ? index - 1 : totalItems - 1;
    images.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.next').addEventListener('click', () => {
    index = (index < totalItems - 1) ? index + 1 : 0;
    images.style.transform = `translateX(-${index * 100}%)`;
});
