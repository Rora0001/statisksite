// burgermenu.
//deklaration af konstanterne
const burger = document.querySelectorAll(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelectorAll(".menu");
const links = document.querySelectorAll(".menu li a");

//bruger eventlistener til at tilføje hændelser når man trykket på burgerikonet.
burger.forEach((burgerElement, index) => {
  burgerElement.addEventListener("click", () => {
    console.log("click");
    burgerElement.classList.toggle("active");
    nav.classList.toggle("active");
    menu[index].classList.toggle("active");
  });
});

//bruger eventlistener når man klikket på et link fjernes active klassen fra burgerikonet og navigationsmenuen.
links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.forEach((burgerElement) => {
      burgerElement.classList.remove("active");
    });
    nav.classList.remove("active");
    menu.forEach((menuElement) => {
      menuElement.classList.remove("active");
    });
  });
});
