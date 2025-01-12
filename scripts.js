let cart = [];
let selectedProduct = {};

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function customizeProduct(id, name, price) {
    selectedProduct = { id, name, price, color: '', size: '' };
    const modal = document.getElementById('customize-modal');
    modal.style.display = 'block';
}

function selectCustomization(type, value, element) {
    selectedProduct[type] = value;
    const buttons = element.parentNode.querySelectorAll('.option');
    buttons.forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
}

function addToCart() {
    if (!selectedProduct.color || !selectedProduct.size) {
        alert('Please select customization options before adding to cart.');
        return;
    }

    cart.push({ ...selectedProduct });
    alert(`${selectedProduct.name} added to the cart!`);
    closeModal();
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        cartItems.innerHTML += `<div>${item.name} (${item.color}, ${item.size}) - $${item.price}</div>`;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
    document.getElementById('cart-count').textContent = cart.length;
}

function closeModal() {
    document.getElementById('customize-modal').style.display = 'none';
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCartDisplay();
    closeCart();
}
