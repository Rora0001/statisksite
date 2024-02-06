const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/products//${id}`;

function getProduct() {
  fetch("url")
    .then((response) => response.json())
    .then(showProduct);
}

function showProduct(product) {
  console.log(product);
  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
  document.querySelector(".purchaseBox p").textContent = product.productname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img").alt = product.productdisplayname;
  document.querySelector("a").href = product.html?${product.id};
}

getProduct();
