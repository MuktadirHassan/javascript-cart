function updateSingleProduct(id, isTrue) {
  console.log(id);
  const singlePrice = getPrice(id);
  let quantity = getQty(id);
  if (isTrue) {
    quantity++;
    updateQty(id, quantity);
  } else {
    quantity--;
    updateQty(id, quantity);
  }
  updateProductPrice(id, singlePrice, quantity);
  updateSubTotal();
  updateTotal();
}

function updateSubTotal() {
  const ipadPro = document.getElementById(`ipad_pro-total`).innerText;
  const ipadAir = document.getElementById("ipad_air-total").innerText;

  const subtotal = parseInt(ipadPro) + parseInt(ipadAir);

  document.getElementById("subtotal").innerText = subtotal;
}

function updateTotal() {
  const subtotal = document.getElementById("subtotal").innerText;

  const vat = parseInt(subtotal) * 0.1;
  document.getElementById("vat").innerText = vat.toFixed(2);

  const total = parseInt(subtotal) + vat;
  document.getElementById("total").innerText = total;
}

function updateProductPrice(id, unit, qty) {
  const productTotal = unit * qty;
  document.getElementById(`${id}-total`).innerText = productTotal;
}

function getPrice(id) {
  const price = document.getElementById(`${id}-price`).innerText;
  return price;
}

function updatePrice() {}

function getQty(id) {
  const qty = document.getElementById(`${id}-qty`).value;
  return qty;
}

function updateQty(id, value) {
  document.getElementById(`${id}-qty`).value = value;
}
