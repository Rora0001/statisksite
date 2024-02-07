const urlp = new URLSearchParams(window.location.search);
const id = urlp.get("id"); // i første omgang prøver vi med et fast ID - senere bliver det også dynamisk
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

function getProduct() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector(".purchaseBox h3").textContent = produkt.productdisplayname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
  document.querySelector("img").alt = produkt.productdisplayname;
  // etc. med de øvrige data
}

getProduct();
