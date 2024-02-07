// categories.js

// Lyt efter klik på kategorilinks
document.querySelectorAll("a").forEach((categoryLink) => {
  categoryLink.addEventListener("click", handleCategoryClick);
});

function handleCategoryClick(event) {
  event.preventDefault();

  // Hent kategorien fra href-attributten
  const category = event.currentTarget.getAttribute("href").split("=")[1];

  // Redirect til produktlisten med kategori-parameteren
  window.location.href = `productlist.html?category=${category}`;
}
