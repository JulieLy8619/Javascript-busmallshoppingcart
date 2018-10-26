/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var rowToDelete = document.querySelectorAll('#cart tr');
  for (var i = 0; i <= rowToDelete.length; i++) {
    if (rowToDelete[i]) {
      rowToDelete[i].remove();
    }
  }

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  var containerEl = document.getElementById('cart');

  // TODO: Find the table body

console.log('in show cart ' + cart.items.length);
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  for (var i = 0; i < cart.items.length; i++){
    var trEl = document.createElement('tr');
    var tdLinkEl = document.createElement('td');
    tdLinkEl.textContent = ('X');
    tdLinkEl.classList.add('removelistitem');
    tdLinkEl.id= cart.items[i].product;
    var tdQtyEl = document.createElement('td');
    tdQtyEl.textContent = cart.items[i].quantity;
    var tdNameEl = document.createElement('td');
    tdNameEl.textContent = cart.items[i].product;
    trEl.appendChild(tdLinkEl);
    trEl.appendChild(tdQtyEl);
    trEl.appendChild(tdNameEl);
    containerEl.appendChild(trEl);
  }
}

function removeItemFromCart(event) {
  if(event.target.classList.contains('removelistitem')) {
    cart.removeItem(event.target.id);
    cart.saveToLocalStorage();
    renderCart();
  }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
