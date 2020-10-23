// Mobile Nav
const mobileNav = document.querySelector(".mobile-nav");
const navColumn = document.querySelector(".nav-column");

mobileNav.addEventListener("click", function () {
  if (navColumn.style.display === "none") {
    navColumn.style.display = "block";
  } else {
    navColumn.style.display = "none";
  }
});
console.log(mobileNav);

// Nav Sliding
const showsListButton = document.getElementById("shows-list-button");
const showsList = document.querySelector(".shows-list");

showsListButton.addEventListener("click", function () {
  if (showsList.className === "shows-list") {
    showsList.className = "shows-list show-list-appear";
  } else {
    showsList.className = "shows-list";
  }
});
