function updateSinglePrice(id, isIncreasing) {
  const singlePrice = getPrice(id);
  let quantity = getQty(id);
  if (isIncreasing) {
    quantity++;
    updateQty(id, quantity);
    updateProductPrice(id, singlePrice, quantity);
  } else {
    quantity--;
    updateQty(id, quantity);
    updateProductPrice(id, singlePrice, quantity);
  }
  updateSubTotal();
}
function getPrice(id) {
  const price = document.getElementById(`${id}-price`).innerText;
  return price;
}
function getQty(id) {
  const qty = document.getElementById(`${id}-qty`).value;
  return qty;
}
function updateProductPrice(id, price, qty) {
  console.log(price, qty, id);
  document.getElementById(`${id}-total`).innerText = price * qty;
}
function updateQty(id, value) {
  document.getElementById(`${id}-qty`).value = value;
}

function getSubTotal() {
  return document.getElementById("subtotal").innerText;
}
function updateSubTotal() {
  const ipadPrice = document.getElementById(`ipad-total`).innerText;
  document.getElementById("subtotal").innerText = ipadPrice;
  updateTotal();
}
function updateTotal() {
  document.getElementById("total").innerText = getSubTotal();
}
