 document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
    
});
document.addEventListener("DOMContentLoaded", function() {
    const categoryLinks = document.querySelectorAll('.menu-categories a');
    const menuItems = document.querySelectorAll('.menu-item');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            categoryLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            menuItems.forEach(item => {
                if (item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    menuItems.forEach(item => {
        if (item.dataset.category !== 'pasta') {
            item.style.display = 'none';
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    displayNotification("Form submitted!");
});
function displayNotification(message) {
    const notificationDiv = document.getElementById('notification');
    notificationDiv.textContent = message;
    notificationDiv.style.display = 'block'; 
    setTimeout(function() {
        notificationDiv.style.display = 'none';
    }, 3000); 
}
function addToCart(itemName, itemPrice) {
    const cartItem = {
        name: itemName,
        price: itemPrice
    };
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    currentCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(currentCart));
    displayNotification(`${itemName} has been added to your cart.`);
}

function displayNotification(message) {
    let notification = document.getElementById('cart-notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'cart-notification';
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.left = '50%'; 
        notification.style.transform = 'translateX(-50%)'; 
        notification.style.backgroundColor = '#f8e2b1';
        notification.style.color = 'black';
        notification.style.padding = '15px';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '9999'; 
        document.body.appendChild(notification);
    }
    notification.innerText = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

