let products = [];
let cart = [];
let totalMRP = 0;
let coupon = 0;


// Fetch products from Fake Store API
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts(data);
    });

// Display products
function displayProducts(products) {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <div class="product-card-head">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
            </div>
            <div class="product-card-body">
                <p>Rating: ${product.rating.rate}</p>
                <p>₹${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
            
        `;
        productContainer.appendChild(productCard);
    });
}

// Add product to cart
function addToCart(id) {
    const product = products.find(prod => prod.id === id);
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

// Update cart display
function updateCart() {
    const cartContainer = document.getElementById('cart');
    const totalMrpEl = document.getElementById('total-mrp');
    const totalAmountEl = document.getElementById('total-amount');
    const couponcontainer = document.getElementById('coupon-price');
    cartContainer.innerHTML = '';
    totalMRP = 0;
   
    
    cart.forEach(item => {
        totalMRP += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
           
            <div class="cart-price">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-body">
                    <h4>${item.title}</h4>
                    <p>₹${item.price}</p>
                </div>
                
            </div>
            <div class="cart-increment">
                <div class="cart-buttons">
                    <button onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})">+</button>
                </div>
                <div>
                    <button class="remove-button" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
                
                
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });
    if(totalMRP <= 50){ //i am assuming like if total MRP of items is greater than 50 rupees then only the coupon is applied orelse coupon price is 0
        coupon = 0;        //or else there wont be any kind of profit for the platform
    }else{
        coupon = 50;
    }
    couponcontainer.innerHTML = `₹${coupon}`;
    totalMrpEl.innerText = `₹${totalMRP}`;
    const totalAmount = totalMRP + 20 + 10 - coupon;
    totalAmountEl.innerText = `₹${totalAmount}`;
}

// Increase item quantity in cart
function increaseQuantity(id) {
    const cartItem = cart.find(item => item.id === id);
    cartItem.quantity++;
    updateCart();
}

// Decrease item quantity in cart
function decreaseQuantity(id) {
    const cartItem = cart.find(item => item.id === id);
    if (cartItem.quantity > 1) {
        cartItem.quantity--;
    } else {
        removeFromCart(id);
    }
    updateCart();
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Search functionality
document.getElementById('search').addEventListener('input', function(event) { 
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});


// pop up functionality
document.getElementById('place-order').addEventListener('click', function() {
//    show
    document.getElementById('popup').style.display = 'block';
    
// background overlay
    document.body.classList.add('show-popup');
  });
  
  document.getElementById('closeButton').addEventListener('click', function() {
// hide
    document.getElementById('popup').style.display = 'none';
    
// remove
    document.body.classList.remove('show-popup');
  });
  