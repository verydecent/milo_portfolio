// Mobile Nav
const mobileNav = document.querySelector(".mobile-nav");
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
