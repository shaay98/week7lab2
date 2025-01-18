"use strict";

let products = [
  { id: 1, name: "Echo Dot", price: 29.99, quantity: 1 },
  { id: 2, name: "Fire TV Stick", price: 39.99, quantity: 2 },
  { id: 3, name: "Kindle Paperwhite", price: 119.99, quantity: 1 },
  { id: 4, name: "Echo Show 5", price: 89.99, quantity: 0 },
  { id: 5, name: "Fire Tablet", price: 49.99, quantity: 3 },
  { id: 6, name: "Ring Video Doorbell", price: 99.99, quantity: 1 },
];
function rendertable() {
  const tableBody = document.getElementById("tb");
  products.forEach((product) => {
    let tr = `  
<tr>
    <td>ID${product.id}</td>
    <td>Name${product.name}</td>
    <td>Price${product.price}</td>
    <td>Quantity${product.quantity}</td>
</tr>
 `;
    tableBody.innerHTML += tr;
  });
}
rendertable();
document.getElementById("display-button").addEventListener("click", rendertable);
