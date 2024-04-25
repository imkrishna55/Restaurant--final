const searchicon1 = document.querySelector("#searchicon1");
const srchicon1 = document.querySelector("#srchicon1");
const search1 = document.querySelector("#searchinput1");

searchicon1.addEventListener("click", function () {
  search1.style.display = "flex";
  searchicon1.style.display = "none";
});
const searchicon2 = document.querySelector("#searchicon2");
const srchicon2 = document.querySelector("#srchicon2");
const search2 = document.querySelector("#searchinput2");

searchicon2.addEventListener("click", function () {
  search2.style.display = "flex";
  searchicon2.style.display = "none";
});
const bar = document.querySelector(".fa-bars");
const cross = document.querySelector("#hdcross");
const headerbar = document.querySelector(".headerbar");

bar.addEventListener("click", function () {
  setTimeout(() => {
    cross.style.display = "block";
  }, 200);
  headerbar.style.right = "0%";
});

cross.addEventListener("click", function () {
  cross.style.display = "none";
  headerbar.style.right = "-100%";
});

// Add click event listeners for "About," "Food Menu," and "Book Table"
const aboutLink = document.querySelector(".nav ul li:nth-child(2) a");
const foodMenuLink = document.querySelector(".nav ul li:nth-child(3) a");
const bookTableLink = document.querySelector(".nav ul li:nth-child(4) a");

aboutLink.addEventListener("click", function (event) {
  event.preventDefault();
  document
    .querySelector(".about-section")
    .scrollIntoView({ behavior: "smooth" });
});

foodMenuLink.addEventListener("click", function (event) {
  event.preventDefault();
  document
    .querySelector(".food-menu-section")
    .scrollIntoView({ behavior: "smooth" });
});

bookTableLink.addEventListener("click", function (event) {
  event.preventDefault();
  document
    .querySelector(".book-table-section")
    .scrollIntoView({ behavior: "smooth" });
});
