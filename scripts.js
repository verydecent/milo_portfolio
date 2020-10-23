// Mobile Nav
const mobileNavBurger = document.querySelector(".mobile-nav-burger");
const mobileNavColumn = document.querySelector(".mobile-nav-column");
const mobileNavExitButton = document.querySelector(".mobile-nav-exit-button");

mobileNavBurger.addEventListener("click", function () {
  if (mobileNavColumn.style.display === "block") {
    mobileNavColumn.style.display = "none";
  } else {
    mobileNavColumn.style.display = "block";
  }
});

// Mobile Nav Exit Button

mobileNavExitButton.addEventListener("click", function () {
  mobileNavColumn.style.display = "none";
});

// Mobile Sliding
const mobileShowsListButton = document.getElementById(
  "mobile-shows-list-button"
);
const mobileShowsList = document.querySelector(".mobile-shows-list");

mobileShowsListButton.addEventListener("click", function () {
  if (mobileShowsList.className === "shows-list") {
    mobileShowsList.className = "shows-list show-list-appear";
  } else {
    mobileShowsList.className = "shows-list";
  }
});
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
