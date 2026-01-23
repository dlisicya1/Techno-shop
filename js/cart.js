let cart_list = document.querySelector('.cart-items-list')
let cart_total = document.querySelector('.cart-total')
let orderBtn = document.querySelector("#orderBtn")
let orderSection = document.querySelector(".order")


function get_item(item) {
    return `<div class = "cart-item">
                <h4 class="cart-item-title">${item.title}</h4>
                <div class="cart-item-quantity">Кількість: ${item.quantity}</div>
                <div class="cart-item-price" data-price="${item.price}">${item.price * item.quantity} грн</div>
            </div>`
}

function showCartList() {
    cart_list.innerHTML = ''
    for (let key in cart.items) { // проходимося по всіх ключах об'єкта cart.items
        cart_list.innerHTML += get_item(cart.items[key])
    }
    cart_total.innerHTML = cart.calculateTotal()
}

showCartList()


function showCartList() {
    cart_list.innerHTML = '';

    if (Object.keys(cart.items).length === 0) {
        cart_list.innerHTML = '<p>У кошику ще немає товарів</p>';
        cart_total.textContent = '0';
        return;
    }

    for (let key in cart.items) {
        const itemHTML = get_item(cart.items[key]);
        cart_list.insertAdjacentHTML('beforeend', itemHTML);
    }

    cart_total.textContent = cart.calculateTotal().toFixed(0);
}