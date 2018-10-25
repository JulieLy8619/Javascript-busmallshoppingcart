/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optionElement = document.createElement('option');
    optionElement.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionElement);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  event.stopPropagation();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {

  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  var pickedItem = document.getElementById('items').value;
  var pickedQty = document.getElementById('quantity').value;
  cart.addItem(pickedItem,pickedQty);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  //console.log ('updatecounter ' + cart.items.length);
  //return(cart.items.length);
  var updateContainerEl = document.getElementById('itemCount');
  updateContainerEl.textContent = (' ' + cart.items.length);
  //updateContainerEl.appendChild();
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  var previewItem = document.getElementById('items').value;
  var previewQty = document.getElementById('quantity').value;
  var previewEl = document.getElementById('cartContents');
  var divEl = document.createElement('div');
  divEl.textContent = previewItem + ': ' + previewQty;
  previewEl.appendChild(divEl);

}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
