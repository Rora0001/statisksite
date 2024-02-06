window.addEventListener("DOMContentLoaded", init);

const productlistURL = "https://kea-alt-del.dk/t7/api/products";

let productlistTemplate;
let productlistContainer;

function init() {
  console.log("init");

  productlistTemplate = document.querySelector(".productlist_template");
  console.log("productlistTemplate", productlistTemplate);

  productlistContainer = document.querySelector(".productlist_container");
  console.log("productlist_container", productlistContainer);

  fetch(productlistURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showProductslists(json);
    });
}

function showProductslists(productlistJSON) {
  let productlistClone;

  productlistJSON.forEach((productlist) => {
    console.log("Productlist", productlist);
    productlistClone = productlistTemplate.cloneNode(true).content;
    productlistClone.querySelector(".productlist_image").src = `https://kea-alt-del.dk/t7/images/webp/640/${productlist.id}.webp`;
    productlistClone.querySelector(".productlist_image").alt = `Picture of a ${productlist.name} productlist`;
    productlistClone.querySelector(".productlist_name").textContent = productlist.productdisplayname;
    productlistClone.querySelector(".productlist_price").textContent = productlist.price + " kr.";
    productlistContainer.appendChild(productlistClone);
  });
}
