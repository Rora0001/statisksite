// Hent produkter og vis dem
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts)
  .catch(handleError);

function showProducts(products) {
  const container = document.querySelector(".productlist_container");

  // Tjek om der er nogen produkter
  if (products.length === 0) {
    container.innerHTML = "<p>No products available</p>";
    return;
  }

  // Loop gennem hvert produkt og vis det
  products.forEach((product) => showProduct(product, container));
}

function showProduct(product, container) {
  const template = document.querySelector(".productlist_template").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".productlist_image").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".productlist_image").alt = product.productdisplayname;
  copy.querySelector(".productlist_name").textContent = product.productdisplayname;
  copy.querySelector(".productlist_price").textContent = `${product.price} kr`;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.id) {
    copy.querySelector("a").href = `produkt.html?id=${product.id}`;
  }

  // Fjern denne linje, da kopien allerede tilføjes til containeren nedenfor
  // document.querySelector("main").appendChild(copy);

  container.appendChild(copy);
}

function handleError(error) {
  const container = document.querySelector(".productlist_container");
  container.innerHTML = `<p>Error loading products: ${error.message}</p>`;
}
