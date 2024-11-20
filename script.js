const items = [
    { name: 'Product 1', price: 10.99 },
    { name: 'Product 2', price: 15.99 },
    { name: 'Product 3', price: 7.99 },
];

const basket = document.getElementById('basket');
const totalAmount = document.getElementById('total-amount');

function addItemToBasket(item) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
    basket.appendChild(listItem);
}

items.forEach(item => {
    addItemToBasket(item);
});

const prices = items.map(item => item.price);
const totalPrice = prices.reduce((total, price) => total + price, 0).toFixed(2);
totalAmount.textContent = totalPrice;