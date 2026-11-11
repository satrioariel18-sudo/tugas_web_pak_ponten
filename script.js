let currentProduct = '';
let currentPrice = 0;

// Navigasi Mobile Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

const dropdownTrigger = document.querySelector('.dropdown-trigger');
if (dropdownTrigger) {
  dropdownTrigger.addEventListener('click', (event) => {
    if (window.matchMedia('(max-width: 760px)').matches) {
      event.preventDefault();
      dropdownTrigger.parentElement.classList.toggle('open');
    }
  });
}


function filterMenu(category) {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}



function openOrderModal(productName, price) {
    currentProduct = productName;
    currentPrice = price;
    document.getElementById('modalProductName').innerText = `${productName} - Rp ${price.toLocaleString('id-ID')}`;
    document.getElementById('orderModal').style.display = 'flex';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
}


// fitur Kirim Pesanan ke WhatsApp
function handleFormSubmit(event) {
    event.preventDefault();
    const name = event.target.querySelectorAll('input')[0].value;
    const phone = event.target.querySelectorAll('input')[1].value;
    const qty = event.target.querySelectorAll('input')[2].value;

    const totalPrice = currentPrice * parseInt(qty);
    const message = `Halo FoodStore, saya mau pesan:%0A- *Menu:* ${currentProduct}%0A- *Jumlah:* ${qty}%0A- *Total:* Rp ${totalPrice.toLocaleString('id-ID')}%0A%0A*Data Pemesan:*%0A- Nama: ${name}%0A- No HP: ${phone}`;

    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
    closeOrderModal();
}